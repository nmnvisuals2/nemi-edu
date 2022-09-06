import styles from './Courses.module.css'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
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








    return(<div>
        
        {!loading ? 
        <ul>
        
        <li>{courseData.id}</li>
        <li>{courseData.courseName}</li>
        <li dangerouslySetInnerHTML={{ __html: courseData.overview }}></li>
        <li>{courseData.description}</li>
        <li>{courseData.duration}</li>
        
        </ul>:''}</div>)
}





export default CourseSingle;


