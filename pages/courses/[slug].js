import styles from './Courses.module.css'
import { supabase } from '../../utils/supabaseClient';
import DefaultLayout from '../../layout/DefaultLayout';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import st from '../../styles/Home.module.css'
import { toast } from 'react-hot-toast';
import { Chip, Spacer } from '@nextui-org/react';
function CourseSingle({data}){

const courseData = data;
async function ContactFormSubmiter(name,email,phone){
    
    
     const {data,error} =  await supabase
      .from('contact_requests')
      .insert(
        { name : name, email : email , phone : phone , message: `Enquiry Regarding for ${courseData.courseName}` },
      ).select()

if(error || data?.length ==0 ){
  toast.error('Unable to Submit')
}
else{
  toast.success('Submitted Successfully')
}



    }

    return(
        <DefaultLayout>
            
            <div className={styles.main_container}>
{ courseData != undefined && courseData.isActive? <>
           <div className={styles.section}>
               <div className={styles.top}>
                   <div className={styles.col1}>
                       <div className={styles.breadCrumbs}><a style={{color:"var(--brand-col1)"}} href="/">Home {">>"}&nbsp;</a><p> Courses {">>"} &nbsp; </p><p> {courseData.title}</p></div>
                       {courseData && courseData.img ? <img src={courseData.img} className={styles.main_image}/>: <div className={styles.main_image}>Image Unavailable</div>}</div>
                   <div className={styles.col2}>
                   <Chip color="secondary">{courseData.category.title}</Chip>
                   <h1 className={styles.courseName + " leading-none"}>{courseData.title}</h1>
                   <Spacer y={4}></Spacer>
                   <div className={styles.specs}>
                   {courseData.duration? <p>{courseData.duration}</p>: ''}
                   {courseData.courseValidity? <p>{courseData.courseValidity}</p>: ''}
                
                   {courseData && courseData.ratings ? <p className={styles.rating_holder}><img className={styles.star} src='/star.svg'/>{courseData.ratings}</p>: ''}
                   
                   </div>

                 {courseData && !courseData.category == "University" ?   <div className={styles.price_holder}>₹{courseData.salePrice && courseData.price > courseData.salePrice ? courseData.salePrice : courseData.price  }{courseData.salePrice && courseData.coursePrice > courseData.salePrice ? <p className={styles.original}>₹{courseData.coursePrice}</p>:''}</div>:''}
                {courseData && courseData.category == "University"?  <div className={styles.form_holder}><ContactForm special={true} loader={loader} handleSubmitForm={ContactFormSubmiter} heading={"Get in Touch with Us!!"}></ContactForm>{/* <a className={styles.enrollNow} onClick={e=>{handleContact}}>Enquire Now</a> */}</div> : <> <h2 className={styles.checkout_info}>For Smoothest Enrollment Experience, Click the <span className={styles.yellow}>Enroll Button</span> Now and start your journey with nEmi.</h2>
                 {courseData.isPreview? <Link href={`https://calendly.com/teamnemi/careercounselling`} legacyBehavior><a className={styles.enrollNow}>Register Now for this Program</a></Link>:<Link href={`https://app.nemiedu.com/checkout/${courseData.slug}`} legacyBehavior><a className={styles.enrollNow}>Enroll Now</a></Link>}  </>} 
                   </div>
               </div>
               <div className={styles.bottom}><img className={styles.over} src='/inndesign.svg'/></div>
        
        </div>
        <div className={styles.section}>  
        <div className={styles.wrapped}>
        <h1 className={styles.courseName}>Modules</h1>
        <div className={styles.colwrapper}>
        <div className={styles.col1}>
        <ul className={styles.modules} dangerouslySetInnerHTML={{ __html: courseData.modules }}>
        </ul></div>
        
        <div className={styles.col2}>
        {courseData && courseData.features ? <><h1 className={styles.smallhead}>Course Features</h1>
        <ul className={st.different}> 
        {courseData && courseData.features ? courseData.features.map((item,index)=>{

          return(<li>{item.text}</li>)
        }) : ''}</ul>
       </>: ''}
        <h1 className={styles.smallhead}>Course Description</h1>

        <p className={styles.overview}><span dangerouslySetInnerHTML={{ __html:courseData.overview}}></span></p>

        </div>
        </div>
        </div>    
        </div></>

: '' }
        </div>


        </DefaultLayout>
        )
}





export default CourseSingle;


export async function getServerSideProps(context){



  

   const {data,error} = await supabase
    .from('courses')
    .select('*,category(*)')
    .eq('slug',context.query.slug).eq('isActive',true)
if(error || data?.length ==0){
  return {notFound:true}
}

  return {props:{data:data[0]}}
}


