import styles from './Courses.module.css'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import DefaultLayout from '../../layout/DefaultLayout';
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
import Loader from '../../components/Loader';
import Link from 'next/link';

function CourseSingle({data}){




const router = useRouter()
  const [slug,setSlug] = useState('');
  const [courseData,setCourseData] = useState('');
  const [loading,setLoading] = useState(true);
async function findCourse(){

    await supabase
    .from('courses')
    .select('*')
    .eq('courseSlug',slug).then(response=>{setCourseData(response.data[0]),setLoading(false),console.log(response.data);})
}



useEffect(()=>{
    
setSlug(router.query.slug);
    
})

useEffect(()=>{
    if(slug && slug != undefined){
    findCourse();}

},[slug])





    return(
        <DefaultLayout><div className={styles.main_container}>
{!loading & courseData != undefined && courseData.isActive? <>
           <div className={styles.section}>
               <div className={styles.top}>
                   <div className={styles.col1}>
                       <div className={styles.breadCrumbs}><a style={{color:"var(--brand-col1)"}} href="/">Home {">>"}&nbsp;</a><p> Courses {">>"} &nbsp; </p><p> {courseData.courseName}</p></div>
                       {courseData && courseData.imageLink ? <img src={courseData.imageLink} className={styles.main_image}/>: <div className={styles.main_image}>Image Unavailable</div>}</div>
                   <div className={styles.col2}>
                   {courseData.category ?  <p className={styles.category}>{courseData.category}</p>: ''}
                   <h1 className={styles.courseName}>{courseData.courseName}</h1>
                   <div className={styles.specs}>
                   {courseData.duration? <p>{courseData.duration}</p>: ''}
                   {courseData.courseValidity? <p>{courseData.courseValidity}</p>: ''}
                
                   {courseData && courseData.ratings ? <p className={styles.rating_holder}><img className={styles.star} src='/star.svg'/>{courseData.ratings}</p>: ''}
                   
                   </div>

                   <div className={styles.price_holder}>₹{courseData.salePrice && courseData.coursePrice > courseData.salePrice ? courseData.salePrice : courseData.coursePrice  }{courseData.salePrice && courseData.coursePrice > courseData.salePrice ? <p className={styles.original}>₹{courseData.coursePrice}</p>:''}</div>
                   <h2 className={styles.checkout_info}>For Smoothest Enrollment Experience, Click the <span className={styles.yellow}>Enroll Button</span> Now and start your journey with nEmi.</h2>
                   <Link href={`https://app.nemiedu.com/checkout/${courseData.courseSlug}`}><a className={styles.enrollNow}>Enroll Now</a></Link>
                   </div>
               </div>
               <div className={styles.bottom}><img className={styles.over} src='/inndesign.svg'/></div>
        
        </div>
        <div className={styles.section}>  
        <div className={styles.wrapped}>
        <h1 className={styles.courseName}>Modules</h1>
        <div className={styles.colwrapper}>
        <div className={styles.col1}>
        
        {!loading ? 
        <ul className={styles.modules} dangerouslySetInnerHTML={{ __html: courseData.modules }}>
        
        
        
        
        
        </ul>:''}</div>
        
        <div className={styles.col2}>
        <h1 className={styles.smallhead}>Course Description</h1>
        <p className={styles.overview}><span dangerouslySetInnerHTML={{ __html:courseData.overview}}></span></p>
        <h1 className={styles.smallhead}>Course Keywords</h1>
        <div className={styles.specs}>

            {courseData && courseData.keywords ? courseData.keywords.split(",").map((item,index)=>{

                return(<p>{item}</p>)
            }) : ''}
        </div>
        </div>
        </div>
        </div>    
        </div></>

: courseData && !courseData.isActive ? <div className={styles.loadwrap}>Content Not Found</div> : <div className={styles.loadwrap}><Loader loader={loading}/>Loading</div> }
        </div>


        </DefaultLayout>
        )
}





export default CourseSingle;


