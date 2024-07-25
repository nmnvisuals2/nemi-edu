import {  useEffect, useState } from "react";
import {useRouter} from 'next/router'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { supabase } from "../utils/supabaseClient";
import Notifications from "../components/Notifications";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";
import styles from './DefaultLayout.module.css'
import CourseSelector from "../components/CourseSelector";
import Link from 'next/link'
import { toast } from "react-hot-toast";

function DefaultLayout(props){

    const [mobile,setMobile] = useState();

  const [loader,setLoader] = useState();
  const [scrolled,setScrolled] = useState(false);
  const [isModalOpen,setModalOpen] = useState(false);
  
  const phone = "7460002675";
  const [wa,setWa] = useState();
  const [active,setActive] = useState('');

  
  const [courseData,setCourseData] = useState();
  const [selector,setSelector] = useState();
  const [isAnimating, setIsAnimating] = useState(false);



  const handleRouteChangeStart = () => {
    setIsAnimating(true);
  };

  const handleRouteChangeComplete = () => {
   setTimeout(()=>{
    setIsAnimating(false);
   },1000)
  };

 useEffect(()=>{
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
 },[])
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

  function getPose(){
    
    
    window.addEventListener('scroll',()=>{
     
  
  if(window.scrollY > 200){
    setScrolled(true)
  }else{
    setScrolled(false)
  }
  
})}

async function getCourses(){

  await supabase
  .from('courses')
  .select('*')
  .eq('isActive',true)
  .then(res=>{

    setCourseData(res.data)
  })
}
  




  function ModalHandler(data){
    setModalOpen(data);
    }
   
        function ModalHandler4(data){
       setModalOpenFour(data)
        }
      
        
    async function ContactFormSubmit(name,email,phone,message){
    setLoader(true);
      await supabase
      .from('contact_requests')
      .insert([
        { name : name, email : email , phone : phone , message: message },
      ]).then(response=>{if(!response.error && response.status === 201){
        toast.success('Thanks , You will be contacted shortly','success')
        ModalHandler(false);
        setLoader(false);
      }})
    }
   
      function ModalHandler(data){
        setModalOpen(data);
        }

     
        const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
        async function submitter(data){
           setSubmitterLoad(true);
          if(validateEmail(data)){
            setLoader(true);
          await supabase
           .from('subscriptions')
           .insert([
             { email: data, subscribed: true },
           ]).then(response=>{
             if(!response.error && response.status === 201){
               toast.success('Thanks, Successfully Subscribed to Newsletters','success');
               setSubmitterLoad(false);
               setLoader(false);
             }else{
              toast.error('An Unknown Error Occured','error')
              setSubmitterLoad(false);
              setLoader(false);
             }
           })}else{
             

              toast.error('Email is not valid','error')
             
           }
         }

       
const router = useRouter();
  useEffect(()=>{
getPose();
    DoSet();
    
    getCourses();
    
    
  },[]);


  useEffect(()=>{
setModalOpen(props.contactPop)

  },[props.contactPop])




    return(<>

<Modal closeable={true} open={isModalOpen} handleModal={ModalHandler}>
      

      <ContactForm loader={loader} handleSubmitForm={ContactFormSubmit} heading={"Get in Touch with Us!!"}></ContactForm>
    </Modal>
    
<NavBar scrolled={scrolled} device={mobile} handleStudentLogin={props.handleStudentLogin} handleModal={ModalHandler4} handleContactPopup={ModalHandler}></NavBar>
{isAnimating ?  <div className={styles.loader}>
        <div className={styles.loading}><div className={styles.thumb}></div></div>
        Loading...</div>:''}
 
 {router.pathname == "/placements" ? '' : <>
 <Link href="https://instagram.com/nemieducation"  target={"_blank"}><img src="/ig.svg" className={styles.instagram}/></Link>




<div className={styles.wa}>
    
<div className={styles.waicon + " " + (active?styles.activeIcon:'')} onClick={()=>{active ? setActive(false) : setActive(true)}}>
    <img src="/WhatsApp.svg"/>
    {active? <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" fill="white"/></svg>:''}
</div>

{active? 
<div className={styles.wawin}>
    <input value={wa} onChange={(e)=>{setWa(e.target.value)}} placeholder="Send Blank or Enter your Message"></input>
    <Link href={`https://wa.me/91${phone}?text=${wa && wa.length > 2 ? encodeURIComponent(wa) : encodeURIComponent('Hi! Want to Enquire.')}`} target={"_blank"} ><button><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.815 12.197-7.532 1.256a.5.5 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.943l18-9a.75.75 0 0 0 0-1.342l-18-9c-.614-.307-1.283.304-1.035.943l2.598 6.957a.5.5 0 0 0 .386.319l7.532 1.255a.2.2 0 0 1 0 .394Z" fill="white"/></svg></button></Link>
</div>:''}
</div></>}

<>{props.children}</>
<Footer loader={loader} modal={e=>ModalHandler(true)} handleSubmit={submitter} handleModal={ModalHandler4} handleContactPopup={ModalHandler}></Footer></>)
}

export default DefaultLayout;