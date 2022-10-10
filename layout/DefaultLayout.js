import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { supabase } from "../utils/supabaseClient";
import Notifications from "../components/Notifications";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";
import styles from './DefaultLayout.module.css'
import CourseSelector from "../components/CourseSelector";


function DefaultLayout(props){

    const [mobile,setMobile] = useState();
  const [nottext,setNotText] = useState();
  const [loader,setLoader] = useState();
  const [scrolled,setScrolled] = useState(false);
  const [isModalOpen,setModalOpen] = useState(false);
  const [roadmaps,setRoadMaps] = useState(false);
  const [activeCourse,setActiveCourse]= useState();
  const [submitterLoading,setSubmitterLoad] = useState(false);
  const [modalOpenFour,setModalOpenFour] = useState(false);
  const [modalOpenFive,setModalOpenFive] = useState(false);
  const [courseData,setCourseData] = useState();
  const [selector,setSelector] = useState();
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
    function ModalHandler2(data){
      setModalTwoOpen(data);
      }
      function ModalHandler3(data){
       
        }

        function ModalHandler4(data){
       setModalOpenFour(data)
        }
        function ModalHandler5(data){
          setModalOpenFive(data)
           }
        async function getRoadMaps(){
    
          await supabase
          .from('roadmap')
          .select('*')
          .order('serial',{ascending:true})
          .then(response=>{if(!response.error && response.status === 200){
           
            setRoadMaps(response.data);
          }})
        }  
    async function ContactFormSubmit(name,email,phone,message){
    setLoader(true);
      await supabase
      .from('contact_requests')
      .insert([
        { name : name, email : email , phone : phone , message: message },
      ]).then(response=>{if(!response.error && response.status === 201){
        setNotification('Thanks , You will be contacted shortly','success')
        ModalHandler(false);
        setLoader(false);
      }})
    }
    function setNotification(text,type){
         
        setNotText({text:text,type:type});
        setTimeout(()=>{setNotText({text:""})},2000)
      
      }
      function ModalHandler(data){
        setModalOpen(data);
        }

     /*    async function ContactFormSubmit(name,email,phone,message){

          await supabase
          .from('contact_requests')
          .insert([
            { name : name, email : email , phone : phone , message: message },
          ]).then(response=>{if(!response.error && response.status === 201){
            setNotification('Thanks , You will be contacted shortly','success')
            ModalHandler(false);
          }})
        } */
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
               setNotification('Thanks, Successfully Subscribed to Newsletters','success');
               setSubmitterLoad(false);
               setLoader(false);
             }else{
              setNotification('An Unknown Error Occured','error')
              setSubmitterLoad(false);
              setLoader(false);
             }
           })}else{
             

              setNotification('Email is not valid','error')
             
           }
         }

         function coursePopup(data){
           setActiveCourse(courses[data]);
         }

  useEffect(()=>{
getPose();
    DoSet();
    getRoadMaps();
    getCourses();
  },[]);


  useEffect(()=>{
setModalOpen(props.contactPop)

  },[props.contactPop])

function courseClickHandler(data){

setActiveCourse(data);
setModalOpenFive(true);
}
  function openModalFooter(data){
setActiveCourse(data);
setModalOpenFive(true);


  }
useEffect(()=>{

  setModalOpenFive(props.opener);
},[props.opener])
useEffect(()=>{
   setActiveCourse(props.activatedItem);
   
  console.log(props.activatedItem);
},[props.activatedItem])

    return(<>

<Modal closeable={true} open={modalOpenFive} handleModal={e=>{ModalHandler5(),setModalOpenFive(false)}}>


<CourseSelector courseData={courseData} handleClose={e=>setModalOpenFive(false)} selector={activeCourse}></CourseSelector>

</Modal>
<Modal closeable={true} open={modalOpenFour} handleModal={ModalHandler4}>
<h1 className={styles.head}>Easy Enrollment Process</h1>
{modalOpenFour ?<div className={styles.roadmap_scroller}>

{roadmaps ? roadmaps.map((item,index)=>{

  return(<div className={styles.roadmap_list} style={{animationDelay:`${index}00ms`}}><span className={styles.indicator + " " + (item.status == "done" ? styles.done : item.status === "progress" ? styles.progress : styles.upcoming)}></span><div className={styles.road_cont}><h1>{item.title}</h1><p>{item.description}</p></div></div>)
}) : ''}

</div> :''}

</Modal>
<Modal closeable={true} open={isModalOpen} handleModal={ModalHandler}>
      

      <ContactForm loader={loader} handleSubmitForm={ContactFormSubmit} heading={"Get in Touch with Us!!"}></ContactForm>
    </Modal>
    {nottext && nottext.text.length > 2 ? <Notifications type={nottext.type} text={nottext.text}/>: ''}
<NavBar courseClick={courseClickHandler} scrolled={scrolled} device={mobile} handleStudentLogin={props.handleStudentLogin} handleModal={ModalHandler4} handleContactPopup={ModalHandler}></NavBar><>{props.children}</>
<Footer loader={loader} onListClick={openModalFooter} device={mobile} modal={e=>ModalHandler(true)} handleSubmit={submitter} handleModal={ModalHandler4} handleCoursePopup={coursePopup} handleContactPopup={ModalHandler}></Footer></>)
}

export default DefaultLayout;