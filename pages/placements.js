import Section from '../components/Section';
import DefaultLayout from '../layout/DefaultLayout';
import styles2 from './Placements.module.css'
import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';
import LogoGrid from '../components/LogoGrid';
import styles from '../styles/Home.module.css'
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import ModernNotifications from '../components/ModernNotification';
import CustomSelect from '../components/CustomSelect';
import { supabase } from '../utils/supabaseClient';
import Loader from '../components/Loader';

function Placements(){
    const [notificationText,setNotificationText] = useState();
    const [isActive,setIsActive] = useState();
    const [loader,setLoader] = useState(false);
    const [formData,setFormData] = useState();
    const [mobile,setMobile] = useState();
    function DoSet(){
        if(window.innerWidth < 768){
          setMobile(1)
          
            }
            else if(window.innerWidth < 968){
              setMobile(2)
              
              
                }
            else{
          
              setMobile(3)
            }
      }


async function SubmitContact(){

    if(formData && formData.email.length > 2 && formData.fullname.length > 2 && formData.phone.length > 2 && formData.qualifications.length > 2 && formData.city.length > 2){
    setLoader(true);
        const {data,error} = await supabase.from('contact_requests').insert([{
        name:formData.fullname,
        email:formData.email,
        phone:formData.phone,
        message:`City : ${formData.city} | Qualifications : ${formData.qualifications}`
    }])

    if(data){
        setLoader(false);
        setNotification('Submitted Successfully');
    }
else if(error){
    setLoader(false);
    setNotification('Something went wrong!');
}else{
    setNotification('Something went wrong!');
}

}else{
        setNotification('Please fill all the details');
    }
}

    useEffect(()=>{

        DoSet();
       
        
        
          },[])
          function setNotification(de){

            setNotificationText(de);
            setTimeout(()=>{setNotificationText()},2500);
        }
        
        const qualifications =[
            {title:"10th Pass",
            value:"10th Pass"},
            {title:"12th Pass",
            value:"12th Pass"},
            {title:"UnderGraduate",
            value:"UnderGraduate"},
            {title:"PostGraduate",
            value:"PostGraduate"},
            {title:"Diploma Holder",
            value:"Diploma Holder"},
            
        
        ];
const faqs =[
    {
        question:'What is Nemi Education? How will it help me?',
        answer:"Nemi Education is an initiative where we strive to train people and get them a job/internship in top brands. We help people take a step towards their success journey"
    },
    {
        question:'How long does it take to get a job through Nemi?',
        answer:"We try to get you placed within 90 days along with proper training and guidance. Our sole goal is to shape your career and get your a job that you deserve without hassle"
    },
    {
        question:'Can I pay after placement / once I get a job?',
        answer:"You have to pay registration fee first in order to get yourself a seat registered"
    },
    {
        question:'I am currently pursuing my graduation and want a full-time job.',
        answer:"We at Nemi aim to help you land a good job with the help of our professional counselling team."
    },
    {
        question:'Is there any Work from Home Opportunity if i get a job through Nemi?',
        answer:"Most of the jobs require your physical presence in the office but in some cases where computer work is required there might be chance of work being WFH"
    },
    {
        question:'Do you provide Technical Training?',
        answer:"Yes in our plan we provide full guidance and training before you aboard final job."
    },
    {
        question:'Will i get a job in top companies?',
        answer:"We try to get you as best job as we can but afterall you will have the key to promotion. You can achieve success as much as you work hard, we are here to help you take the first step towards your bright future."
    },
    
]

    return(


        <DefaultLayout>
            {loader? <div className={styles2.overlay}><Loader loader={loader}/></div>:''}
            <div className={styles2.fixed}>
                <div onClick={()=>{isActive ? setIsActive(false):setIsActive(true)}} className={styles2.phone + " " + (isActive ? styles2.active :'')}>
                    CALL NOW TO REGISTER<svg className={styles2.chev} width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 15.707a1 1 0 0 0 1.414 0L12 9.414l6.293 6.293a1 1 0 0 0 1.414-1.414l-7-7a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 0 1.414Z" fill="#ffffff"/></svg>
                    <div className={styles2.callbtn}>
                        <a onClick={()=>{setIsActive(false)}} href="tel:+917460002675">+917460002675</a>
                        <a onClick={()=>{setIsActive(false)}} href="tel:+915224625842">+915224625842</a>
                    </div>
                </div>
            </div>
{notificationText && notificationText.length > 2 ? <ModernNotifications text={notificationText} /> : ''}
<Section id={"hiring_partners"} full={false} marginned={true}>

<div className={styles2.maincont}>
<div className={styles2.col1}>
    
    <h1 className={styles2.mainhead}>Enroll into our Program with <span className={styles2.gra}>100% Job Assurance*</span></h1>
    <p>•Minimum of 5 Interviews Scheduled</p>
<h1 className={styles2.hiring}>Our <span className={styles2.blue}>Top Hiring Partners</span></h1>
<Marquee gradient={true} pauseOnClick={true} gradientWidth={mobile < 3 ? 50 : 200}>

<LogoGrid image1={'/1.jpg'} image2={'/2.jpg'} image3={'/3.jpg'} image4={'/4.jpg'}></LogoGrid>
<LogoGrid image1={'/5.jpg'} image2={'/6.jpg'} image3={'/7.jpg'} image4={'/8.jpg'}></LogoGrid>
<LogoGrid image1={'/9.jpg'} image2={'/10.jpg'} image3={'/11.jpg'} image4={'/12.jpg'}></LogoGrid>
<LogoGrid image1={'/13.jpg'} image2={'/14.jpg'} image3={'/15.jpg'} image4={'/16.jpg'}></LogoGrid>
<LogoGrid image1={'/17.jpg'} image2={'/18.jpg'} image3={'/19.jpg'} image4={'/20.jpg'}></LogoGrid>

<LogoGrid image1={'/21.jpg'} image2={'/22.jpg'} image3={'/23.jpg'} image4={'/24.jpg'}></LogoGrid>
<LogoGrid image1={'/25.jpg'} image2={'/26.jpg'} image3={'/27.jpg'} image4={'/28.jpg'}></LogoGrid>
<LogoGrid image1={'/29.jpg'} image2={'/30.jpg'} image3={'/31.jpg'} image4={'/32.jpg'}></LogoGrid>
<LogoGrid image1={'/33.jpg'} image2={'/34.jpg'} image3={'/35.jpg'} image4={'/36.jpg'}></LogoGrid>
<LogoGrid image1={'/37.jpg'} image2={'/38.jpg'} image3={'/39.jpg'} image4={'/40.jpg'}></LogoGrid>

<LogoGrid image1={'/41.jpg'} image2={'/42.jpg'} image3={'/43.jpg'} image4={'/44.jpg'}></LogoGrid>
<LogoGrid image1={'/45.jpg'} image2={'/46.jpg'} image3={'/47.jpg'} image4={'/48.jpg'}></LogoGrid>
<LogoGrid image1={'/49.jpg'} image2={'/57.jpg'} image3={'/51.jpg'} image4={'/52.jpg'}></LogoGrid>
<LogoGrid image1={'/53.jpg'} image2={'/54.jpg'} image3={'/55.jpg'} image4={'/56.jpg'}></LogoGrid>


</Marquee>
<h1 className={styles2.hiring}>Registration</h1>
<div className={styles2.register}>
    📝 Registration Charges : 
    <span> ₹3500 💰</span>
</div>
<h1 className={styles2.hiring}>Payment Options</h1>
<div className={styles2.cont}>
    <div className={styles2.item}>
    ₹35,000/- for Course
    </div>

    <div className={styles2.item}>
    ₹15,000/- + 08% of CTC
    </div>
</div>

</div>
<div className={styles2.col2}>
<h1 className={styles2.team_heading}>Register Now</h1>
<input name={"name"} className={styles2.input} placeholder={"Enter your Full Name"} type={"text"} value={formData && formData.fullname} onChange={(e)=>{setFormData(res=>({...res,fullname:e.target.value})) }}/>
<input name={"email"} className={styles2.input} placeholder={"Enter your Email Address"} type={"text"} value={formData && formData.email} onChange={(e)=>{setFormData(res=>({...res,email:e.target.value})) }}/>
<input name={"phone"} className={styles2.input} placeholder={"Enter your Phone Number"} type={"text"} value={formData && formData.phone} onChange={(e)=>{setFormData(res=>({...res,phone:e.target.value})) }}/>
<input name={"city"} className={styles2.input} placeholder={"Enter your City"} type={"text"} value={formData && formData.city} onChange={(e)=>{setFormData(res=>({...res,city:e.target.value})) }}/>
<CustomSelect full="true" defaultText="Select your Qualifications" noPadding={true} objects={qualifications} setSelect={(r)=>{setFormData(res=>({...res,qualifications:r}))}}/>
<a onClick={SubmitContact} className={styles2.submit}>SUBMIT</a>
{/* <ContactForm handleSubmitForm={(a,b,c,d)=>{console.log(a,b,c,d)}}/> */}
<div className={styles2.holder}>

{[{
    head:"Placement Record",
    sub:"95%"
},{head:"Placement Packages upto",
sub:"2.5-12 Lacs"},{head:"Hiring Partners",
sub:"4000+"},{head:"Highest Package",
sub:"12 Lacs"}].map((i,d)=>{
    return <div className={styles2.block}>{i.head}<h3>{i.sub}</h3></div>
})}

</div>
</div>
</div>

</Section>

<Section visible="true" id={"faqs"} full={false} marginned={true}>

    <h1 className={styles2.h}>Frequently Asked <br/><span className={styles2.b}>Questions</span></h1>
    <FAQ items={faqs}/>
</Section>
          <Section id={"hiring_partners"} full={false} marginned={true}>

<div className={styles2.container}>
    <div className={styles2.inner}>
        <div>
        <img src="https://cdn3d.iconscout.com/3d/free/thumb/book-4573596-3802605.png"/>
        <h2>Download Nemi Brochure for Free</h2></div>
        <a href='https://pdfhost.io/v/byk08C5LD_nemi_Brochure_final_v2'>Click Here to Download</a>
    </div>
</div>
  
  

</Section>

        </DefaultLayout>
    )
}

export default Placements;