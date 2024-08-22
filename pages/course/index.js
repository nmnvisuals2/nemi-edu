import { useRouter } from "next/router";
import Section from "../../components/Section";
import {useState,useEffect} from 'react'
import DefaultLayout from "../../layout/DefaultLayout";
import { Button, Checkbox, CheckboxGroup, Chip, CircularProgress, Pagination, Select, SelectItem, Spacer } from "@nextui-org/react";
import { supabase } from "../../utils/supabaseClient";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function Course(){

    const router = useRouter()
    const { pc, sc, time,pg } = router.query;
   
  const parseQueryParam = (param) => (param ? param.split(',') : []);

  const [parentCategory, setParentCategory] = useState(parseQueryParam(pc));
  const [subCategory, setSubCategory] = useState(parseQueryParam(sc));
  const [timeKey, setTimeKey] = useState(parseQueryParam(time));
  const [categories,setCategories] = useState()
  const [courses,setCourses] = useState()
  const [pageNumber,setPageNumber] = useState(0)
  const [countPerPage,setCountPerPage] = useState(10)
  const [ascending,setAscending] = useState(true)
  const [sortBy,setSortBy] = useState('ratings')
  const [loading,setLoading] = useState(false)
  const [filterActive,setFilterActive] = useState(false)
  const timeFilter = [
    {
        title:'Instant',
        value:1
    },
    {
        title:'Under 15 Days',
        value:15
    },
    {
        title:'Under 30 Days',
        value:30
    },
    {
        title:'Under 1.5 Months',
        value:45
    },
    {
        title:'Under 3 Months',
        value:90
    },
    {
        title:'Under 6 Months',
        value:180
    },
    {
        title:'Under an Year',
        value:360
    }
   
  ]

  const handleFilterChange = () => {
    getCourses()
    
    
    // Update the URL hash
    
  };

  useEffect(() => {
    // Update states when URL query parameters change
    setParentCategory(parseQueryParam(pc));
    setSubCategory(parseQueryParam(sc));
    setTimeKey(parseQueryParam(time));
  }, [pc, sc, time]);
useEffect(()=>{
    setPageNumber(parseInt(pg??0))
},[
    pg
])
function getRange() {
    const totalItems = courses?.length;
    const from = (pageNumber - 1) * countPerPage + 1;
    const to = Math.min(pageNumber * countPerPage, totalItems);

    return { from, to };
}
async function getCategories(){
    const {data,error} = await supabase.from('categories').select('*,parent(*)')

    if(data){
        setCategories(data)
    }
}
async function getCourses() {
    // Start building the query
    let query = supabase.from('courses').select("*,category!inner(slug,title,parent!inner(*))")

    // Apply subCategory filter if it's defined and not an empty array
    if (subCategory && subCategory.length > 0) {
        query = query.in('category.slug', subCategory);
    }

    // Apply parentCategory filter if it's defined and not an empty array
    if (parentCategory && parentCategory.length > 0) {
        query = query.in('category.parent.slug', parentCategory);
    }
    if(sortBy != undefined && ascending != undefined){
        query = query.order(sortBy,{ascending:ascending})
    }

    if(courses?.length > countPerPage + 5){
    query = query.range(getRange().from,getRange().to)}

    setLoading(true)
    // Execute the query and handle the results
    const { data, error } = await query;

    if (error) {
        toast.error('Unable to load courses for selected params');
        setLoading(false)
    } else if (data) {
        setCourses(data);
        setLoading(false)
    }
    else{
    setLoading(false)    
    }
}


const sorting = [
    {
        title:'Relavance',
        value:'ratings',
        asc:false
    },
    {
        title:'Alphabetically (A-Z)',
        value:'title',
        asc:true
    },
    {
        title:'Alphabetically (Z-A)',
        value:'title',
        asc:false
    },
    {
        title:'Price (Low to High)',
        value:'price',
        asc:true
    },
    {
        title:'Price (High to Low)',
        value:'price',
        asc:false
    },
    {
        title:'Date (old to new)',
        value:'created_at',
        asc:true
    },
    {
        title:'Date (new to old)',
        value:'created_at',
        asc:false
    }
]

function filterCourses(a){

    if(timeKey == undefined || timeKey?.length ==0 ){
        return a;
    }
    if(timeKey != undefined && timeKey?.length > 0){
        return a?.filter(item=>item.duration <= Math.max(...timeKey))
    }
    
}

useEffect(()=>{

    getCategories()
},[])

  useEffect(() => {
    // Fire callback whenever filters or URL change
    handleFilterChange();
  }, [parentCategory, subCategory,sortBy,ascending]);

    return <DefaultLayout>
<Section>
    <Spacer y={28}></Spacer>
    <div className="w-full bg-white min-h-screen flex flex-row items-start justify-between">
        <div className={"flex-0 bg-gray-50 p-2 rounded-xl fixed bottom-0 lg:max-h-[unset] overflow-y-auto max-h-[50vh] shadow-[-2px_-2px_22px_-6px_#0006] lg:shadow-none left-0 w-full z-[99999999]  lg:z-[unset] lg:w-auto lg:relative block transition-all " + (filterActive ? ' translate-y-0 lg:translate-y-0':' translate-y-full lg:translate-y-0')}>

<Button size="sm" color="danger"  endContent={<svg width="24" className=" rotate-45 " height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" fill="currentColor"/></svg>} className=" cursor-pointer my-2 flex lg:hidden" onClick={()=>{setFilterActive(false)}}>Close</Button>
<div className="bg-white rounded-xl shadow-md p-4">
    
    <h2 className="text-primary font-semibold mb-2 text-lg uppercase tracking-normal">Filter by Category</h2>
    {categories == undefined || categories?.length ==0 ? <CircularProgress size="sm"></CircularProgress> :''}
    <CheckboxGroup onValueChange={(e)=>{setParentCategory(e)}} size="sm" value={parentCategory}>
    {categories && categories.filter(item=>item.type =="parent").map((i,d)=>{
return <><Checkbox value={i.slug} key={i.slug}>{i.title}</Checkbox>
<CheckboxGroup key={i.id} onValueChange={(e)=>{setSubCategory(e)}} color="secondary" value={subCategory} size="sm" className="ml-8">
    {categories && categories.filter(item=>item?.parent?.id == i.id).map((z,v)=>{
        return <Checkbox value={z.slug} key={z.slug}>{z.title}</Checkbox>
    })}
</CheckboxGroup>
</>
    })}</CheckboxGroup>
</div>
<Spacer y={2}></Spacer>

<div className="bg-white rounded-xl shadow-md p-4">
    <h2 className="text-primary font-semibold mb-2 text-lg uppercase tracking-normal">Filter by Duration</h2>
    <CheckboxGroup onValueChange={(e)=>{setTimeKey(e)}} size="sm" value={timeKey}>
    {timeFilter && timeFilter.map((i,d)=>{
return <><Checkbox value={i.value} key={i.value}>{i.title}</Checkbox>

</>
    })}</CheckboxGroup>
</div>
        </div>
        <Spacer className="hidden lg:block" x={4}></Spacer>
        <div className="flex-1">

<div className="flex flex-row flex-nowraps items-stretch justify-end mb-4">
    <div className="flex-1 flex flex-row items-stretch justify-start">
    <Button fullWidth onPress={()=>{setFilterActive(!filterActive)}} className="flex max-w-[150px] h-full lg:hidden bg-white shadow-md text-black border-1" size="sm" color="default" endContent={<svg className={' transition-all ' + (!filterActive ? 'rotate-180':'rotate-0')} width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" fill="currentColor"/></svg>}>Filters</Button></div>
    <Select placeholder="Select Sorting Filter" label="Sort By" size="sm" className="flex-shrink-0 w-[20ch]" onSelectionChange={(e)=>{setAscending(sorting[e.anchorKey]?.asc),setSortBy(sorting[e.anchorKey]?.value)}}>
        {sorting && sorting.map((i,d)=>{
            return <SelectItem key={d} value={i.value}>{i.title}</SelectItem>
        })}
    </Select>
</div>
            <div className="flex flex-col p-2 md:p-4 rounded-lg border-1 border-gray-200 bg-gray-50">

<h2 className="text-primary font-bold text-2xl">Courses</h2>
<Spacer y={2}></Spacer>
            {loading ? <CircularProgress></CircularProgress>:''}
{courses == undefined || courses?.length ==0 || filterCourses(courses)?.length == 0  ? 

<div className="flex flex-col items-center justify-center text-xs">No Course Found with selected filters 
<Spacer y={2}></Spacer>
    <Button size="sm" color="danger" onPress={()=>{setParentCategory(),setTimeKey(),setSubCategory()}} startContent={
        <svg width="16" className=" rotate-45" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" fill="currentColor"/></svg>
    } >Clear Filter</Button>
</div>
:''}
               {courses && filterCourses(courses)?.map((i,d)=>{
                return <div className="bg-white flex flex-col md:flex-row items-center justify-between rounded-xl p-2 shadow-sm">
                    <img className="aspect-video w-[100%] md:w-[250px] lg:w-[300px] rounded-xl object-cover" src={i.img}/>
                    <div className="flex flex-1 w-full lg:w-auto pl-0 md:pl-4 pt-2 md:pt-0 flex-col items-start justify-start">
                    <h2 className="font-bold  text-primary text-xl">{i.title}</h2>
                    <p className="text-sm">{i.overview}</p>
                    <Chip className="my-2" size="sm" color="primary" variant="flat">{i?.category?.parent?.title}</Chip>
                    <div className="flex flex-row items-center justify-start text-xs">
                   <p className="mr-1"> ({i?.ratings})</p>
                        {Array(5).fill().map((p,b)=>{
                            return <svg width="12" className="relative" height="12" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <mask id="xMask">
    
    <rect x="0" y="0" width={(parseFloat(i?.ratings) - Math.floor(parseFloat(i?.ratings)))*24 } height="200" fill="white" />
  </mask>
                                <path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z" fill={b + 1 < parseFloat(i?.ratings) ? "#F39C19":"#e2e2e2"}/>
                                {b + 1 > Math.floor(parseFloat(i?.ratings)) && b < Math.ceil(parseFloat(i?.ratings)) ? <path
                                mask="url(#xMask)"
                                d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z" fill={'#F39C19'}/>:''}
                            </svg>
                        })}
                        
                    </div>

                    {i.salePrice && i.salePrice < i.price ? (
            <div className="mt-1 flex flex-row items-center">
             
              <span className="text-xl gradtext font-bold">₹{i.salePrice}</span>
              <span className=" line-through text-gray-400 text-xs ml-1">
              ₹{i.price}
              </span>
            </div>
          ) : (
            <span className="text-lg gradtext font-bold">₹{i.price}</span>
          )}

                    </div>
                    <div className="flex flex-0 flex-row lg:flex-col items-center w-full md:w-auto md:items-end justify-start pr-0  md:pr-4">
                    <Button as={Link} href={`/courses/${i?.slug}`} fullWidth size="sm" color="secondary">Learn More</Button>
                    <Spacer y={1}></Spacer>
                   <Button as={Link} href={`https://app.nemiedu.com/checkout/${i?.slug}`} target="_blank" fullWidth size="sm" color="primary">Enroll Now</Button>
                   </div>
                    </div>
               })}
            </div>

            {courses && courses?.length > 10 ? <Pagination initialPage={pageNumber} total={Math.floor(courses?.length/countPerPage)}></Pagination>:''}
        </div>
    </div>
</Section>

    </DefaultLayout>
}