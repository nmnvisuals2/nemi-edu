import styles from './Courses.module.css'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import DefaultLayout from '../../layout/DefaultLayout';
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
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




const Razorpay = useRazorpay();

const handlePayment = useCallback(async() => {
    const order = await createOrder(params);

    const options = {
      key: "rzp_test_cCfgFh9m0sK1Oz",
      amount: "3000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);




    return(
        <DefaultLayout><div className={styles.main_container}>
        {!loading ? 
        <ul>
        
        <li>{courseData.id}</li>
        <li>{courseData.courseName}</li>
        <li dangerouslySetInnerHTML={{ __html: courseData.overview }}></li>
        <li>{courseData.description}</li>
        <li>{courseData.duration}</li>
        
        </ul>:''}
        
        <button onClick={handlePayment}>Make Payment</button>
        </div>


        </DefaultLayout>
        )
}





export default CourseSingle;


