import { motion } from "framer-motion";
import Section from "../../components/Section";
import DefaultLayout from "../../layout/DefaultLayout";
import { supabase } from "../../utils/supabaseClient";
import styles from './CoursesIndex.module.css'
import { Divider, Spacer } from "@nextui-org/react";
import BlogCard from "../../components/BlogCard";
import CourseCard from "../../components/CourseCard";
export default function Category({data}){

    return <DefaultLayout>
       
       <Section fullWidth title={""}>
<div className='relative'>
  <div className='w-full min-h-[100px] lg:min-h-[20vw] max-h-[800px] relative overflow-hidden flex flex-col items-center justify-center bg-secondary'>{/*  <img className='w-full h-full object-cover absolute left-0 top-0 z-0' src='/bgbanner.svg'/> */}
  
  <motion.div initial={{ opacity: 0 , scale:2 }}
      animate={{ opacity: 1  , scale:1}}
      transition={{ duration: 0.8 , ease:"easeInOut" }} className='flex w-full max-w-[1340px] mx-auto z-10 text-center relative text-white justify-center items-center h-full'>
    <h2 className='text-2xl lg:text-6xl drop-shadow-lg font-bold !uppercase'>{'Courses' + " in " + data[0]?.category?.title || 'Courses'}</h2>
  </motion.div>
  </div>
  
<div className={styles.post_holder + " w-full z-10 !max-w-[1480px] mx-auto !pt-10 !px-4 lg:px-0 relative"}>
    <h1 className={styles.mainhead + " hf"}>{`Showing all Courses`}</h1>
    <p className={" !text-xs !text-primary mb-4"}>Number of Courses : {data?.length}</p>
<div className={styles.gridr}>
{data && data?.length > 0 ? data.filter((i,d)=>{
        if(i.isActive){return i}
      }).map((item,index)=>{
  return(
<>
    <CourseCard key={index} data={item}/>
   

  </>
  )
}):'Posts are Unavailable'}
{data?.length > 0 ? '' : <p>There is no post in this category</p>}

</div>

<Spacer y={'50px'}> </Spacer>
<Divider></Divider>
<Section fullWidth>
    <div className='w-ful max-w-[1480px] mx-auto py-6'>
        <h2 className='hf text-2xl font-bold text-primary'>Are we missing a course you were looking for?</h2>
        <p className='text-md'>Email us at : <a className='text-temporary text-primary' href='mailto:info@nemiedu.com'>info@nemiedu.com</a></p>
        <p className='text-md'>Call us at : <a className='text-temporary text-primary' href='tel:+917460002675'>+91 746 000 2675</a></p>
    </div>
</Section>
<Spacer y={32}></Spacer>
</div></div></Section>
    </DefaultLayout>
}

export async function getServerSideProps(context){
    const {data,error} = await supabase
    .from('courses')
    .select('*,category(*)')
    .eq('category.slug',context.query.slug)
    
    if (data[0]?.type == "parent") {
      return {
        redirect: {
          destination: `/categories/${data[0].slug}`, // Redirect to the login page
          permanent: false, // If false, it's a temporary redirect (307). If true, it's a permanent redirect (308).
        },
      };
    }
   
if(error || data?.length ==0){
  return {notFound:true}
}
    return {props:{data:data}}
}