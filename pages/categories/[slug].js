import { motion } from "framer-motion";
import Section from "../../components/Section";
import DefaultLayout from "../../layout/DefaultLayout";
import { supabase } from "../../utils/supabaseClient";
import styles from './CoursesIndex.module.css'
import { Button, Divider, Image, Spacer } from "@nextui-org/react";
import BlogCard from "../../components/BlogCard";
import CourseCard from "../../components/CourseCard";
import Link from "next/link";
export default function Category({data}){

    return <DefaultLayout>
       
       <Section isParent={true} noAnimation fullWidth title={""}>
<div className='relative'>
  <div className='w-full min-h-[200px] lg:min-h-[20vw] max-h-[800px] relative overflow-hidden flex flex-col items-center justify-center from-primary-400 to-white bg-gradient-to-tl'>{/*  <img className='w-full h-full object-cover absolute left-0 top-0 z-0' src='/bgbanner.svg'/> */}
  {data[0]?.parent?.image ? 
  <img src={data[0].parent?.image} className="w-full h-full absolute left-0 top-0 object-cover mix-blend-luminosity opacity-20 z-0"/>:''}
  <motion.div
  key={data[0]?.parent?.title}
  initial={{ opacity: 0 , scale:1.1 }}
      animate={{ opacity: 1  , scale:1}}
      transition={{ duration: 0.7 , delay:0.2, type:"spring" , bounce:0.4 }} className='flex w-full max-w-[1340px] mx-auto z-10 text-center relative text-white justify-center items-center h-full'>
    <h2 className='text-2xl lg:text-6xl drop-shadow-lg font-bold !uppercase max-w-[1128px] mx-auto'>{'Categories' + " in " + data[0]?.parent?.title || 'Courses'}</h2>
  </motion.div>
  </div>
  <Spacer y={12}></Spacer>
<Section >
    <h1 className={styles.mainhead + " hf"}>{`Showing all Categories`}</h1>
    <p className={" !text-xs !text-primary mb-4"}>Number of Courses : {data?.length}</p>
<div className={styles.gridr}>
{data && data?.length > 0 ? data.map((item,index)=>{
  return(
    
<div className="flex-1 flex-[100%] md:flex-[50%] md:flex-[25%] p-2 ">
<Link href={`/category/${item.slug}`}>
    <div
     className="border-1 border-white hover:border-gray-100 flex flex-col justify-start overflow-hidden items-start transition-all w-full rounded-xl shadow-md"
    >
      
      {item?.image? <Image src={item?.image}  className="rounded-none aspect-video object-cover"/>:''}
      <div className="w-full p-2 lg:p-4 flex flex-col justify-start items-start">
      <h2 className="text-lg font-bold text-primary">{item.title}</h2>
      <Spacer y={2}></Spacer>
      <p className="text-xs text-gray-500 border-1 border-gray-300 rounded-full bg-gray-50 px-2">{item.parent.title}</p>
      <Spacer y={2}></Spacer>
      <Button size="sm" color="primary" className="from-primary-300 to-primary bg-gradient-to-l border-1 shadow-sm">Explore Courses</Button></div>
    </div>
    </Link>

  </div>
  )
}):'Posts are Unavailable'}
{data?.length > 0 ? '' : <p>There is no post in this category</p>}

</div>

<Spacer y={'50px'}> </Spacer>
<Divider></Divider>
<Section isParent fullWidth>
    <div className='w-ful max-w-[1480px] mx-auto py-6'>
        <h2 className='hf text-2xl font-bold text-primary'>Are we missing a course you were looking for?</h2>
        <p className='text-md'>Email us at : <a className='text-temporary text-primary' href='mailto:info@nemiedu.com'>info@nemiedu.com</a></p>
        <p className='text-md'>Call us at : <a className='text-temporary text-primary' href='tel:+917460002675'>+91 746 000 2675</a></p>
    </div>
</Section>
<Spacer y={32}></Spacer>
</Section>
<Spacer y={12}></Spacer>

</div></Section>
    </DefaultLayout>
}

export async function getServerSideProps(context){
    const {data,error} = await supabase
    .from('categories')
    .select('*,parent!inner(*)')
    .eq('parent.slug',context.query.slug)
    
    
   
if(error || data?.length ==0){
  return {notFound:true}
}
    return {props:{data:data}}
}