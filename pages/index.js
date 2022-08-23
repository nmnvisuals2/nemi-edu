import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'


import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Notifications from '../components/Notifications'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'
import Marquee from "react-fast-marquee";
import ProfileCard from '../components/ProfileCard'
import LogoGrid from '../components/LogoGrid'
import StatNumber from '../components/StatNumber'
import Modal from '../components/Modal'
import ContactForm from '../components/ContactForm'
import IconGrid from '../components/IconGrid'
import { supabase } from '../utils/supabaseClient'
export default function Home() {


  const [mobile,setMobile] = useState();
  const [nottext,setNotText] = useState();
  const [overlay,setOverlay] = useState(false);
  const [toppos,setTopPos] = useState("50%");
  const [rightpos,setRightPos] = useState("-5vw");
  const [topper,setTopper] = useState('0px');
  const [scrolled,setScrolled] = useState(false);
  const [isModalOpen,setModalOpen] = useState(false);
  const [isModalTwoOpen,setModalTwoOpen] = useState(false);
  const [cs,setCS] = useState(true);
  const [pass,setPass] = useState(true);
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
function getPos(){
  var timer;
  var trigger;
  var start;
  var stop;
  var distance;
  var speed = 1;
  var duration = 2;
  var increment;
  var scroller;
  
  window.addEventListener('scroll',()=>{
   

if(window.scrollY > 200){
  setScrolled(true)
}else{
  setScrolled(false)
}

setTopper(window.scrollY);
   if(timer === null){
     scroller = 0;
     trigger = 0;
   start = window.scrollY;
   console.log(start);
   }

   if(timer !== null){
    clearTimeout(timer);
   }
   timer = setTimeout(()=>{
    
    
    timer = null;
    stop = window.scrollY;
    setTimeout(easeNow,50)
     



   }, 250);
     
      

  

      

   



  })

  function easeNow(){
    clearInterval()
    distance = stop - start;
increment = distance/duration;
scroller = start;
console.log(start);
if(trigger === 1 || window.scrollY !== stop){




 if(scroller >= stop){
   clearInterval();
 }

}
  }

 
}


async function submitter(data){
 await supabase
  .from('subscriptions')
  .insert([
    { email: data, subscribed: true },
  ]).then(response=>{
    if(!response.error && response.status === 201){
      setNotification('Thanks, Successfully Subscribed to Newsletters','success')
    }
  })
}


function handleStudentLogin(){

  setNotification("Coming Really Soon, Stay Tuned ","error");
 
}

function setNotification(text,type){

  setNotText({text:text,type:type});
  setTimeout(()=>{setNotText({text:""})},2000)

}


function setOverlayActive(boo){
  setOverlay(boo);
}


function ModalHandler(data){
setModalOpen(data);
}
function ModalHandler2(data){
  setModalTwoOpen(data);
  }
  function ModalHandler3(data){
   
    }
async function ContactFormSubmit(name,email,phone,message){

  await supabase
  .from('contact_requests')
  .insert([
    { name : name, email : email , phone : phone , message: message },
  ]).then(response=>{if(!response.error && response.status === 201){
    setNotification('Thanks , You will be contacted shortly','success')
    ModalHandler(false);
  }})
}

function handleAuth(){

  if(pass === "nemiedu123@#"){
    setCS(false);
    setNotification("Successfully Logged In","success");
  }else{
    setNotification('Wrong Password','error')
  }
}

  useEffect(()=>{

DoSet();
getPos();


  },[])


  const containerRef = useRef(null);
  return (<>
  <Modal closeable={false} open={cs} extra={true} handleModal={ModalHandler3}>
<div className={styles.cs}>
  <h2>nEmi is Coming Soon for public !! </h2>
  <p>Registered Beta Users can view website</p>
    <input type={"password"} placeholder={"enter password to view website"} onChange={e=>{setPass(e.target.value)}}></input>
    <button onClick={handleAuth}>Submit</button></div>
  </Modal>
    <NavBar scrolled={scrolled} device={mobile} handleStudentLogin={handleStudentLogin} handleContactPopup={e=>ModalHandler(true)}></NavBar>
    <Modal closeable={true} open={isModalOpen} handleModal={ModalHandler}>
      

      <ContactForm handleSubmitForm={ContactFormSubmit} heading={"Get in Touch with Us!!"}></ContactForm>
    </Modal>



    <Modal closeable={true} open={isModalTwoOpen} handleModal={ModalHandler2}>

<div className={styles.learn_more}>
  <h2>Skill Development Council Canada</h2>
  <p>Skill Development Council Canada was established to intervene and provide international certifications & qualifications to the global training community. </p>
</div>

    </Modal>
    <div className={styles.container}>
      <Head>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
        <title>Nemi Education</title>
        <meta name="description" content="#1 Education Platform" />
        <link rel="icon" href="/nemi-favicon.svg" />
      </Head>
   
      <main className={styles.main} data-scroll-container ref={containerRef}>
        <div className={styles.overlay + " " + (overlay? styles.activeoverlay : '')}></div>
<Section id={'hero'} full={true}>
  
  <div className={styles.hero}>

    <h2 className={styles.hero_heading}>India's first research based <br/><span>&nbsp; &nbsp;  Edutech company ™</span></h2>
  <p>Courses with<span className={styles.blue}>&nbsp;Job Assurance</span></p>
  <a className={styles.btn} href=" " onClick={(e)=>{e.preventDefault(),ModalHandler(true)}}><button>Dive In Now</button></a>



<div className={styles.markey}>
  <Marquee gradient={false}>
  &nbsp;Uniting Youth with Careers&nbsp;Uniting Youth with Careers &nbsp; Uniting Youth with Careers&nbsp;Uniting Youth with Careers &nbsp; Uniting Youth with Careers
</Marquee></div>

<div className={styles.chords}>
<div className={styles.line}></div>
<div className={styles.line}></div>
<div className={styles.line}></div>
</div>

  </div>
  
</Section>
<Section id={"about"} full={true} marginned={true}>
<div className={styles.about_wrapper}><div className={styles.about_image}></div><div className={styles.about_content}>

  <h2>About <span className={styles.blue}>nEmi</span></h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  <h2>Our <span className={styles.blue}>Journey</span></h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  <h2>What makes us <span className={styles.blue}>distinct?</span></h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
</div>

</Section>
<Section id={"accredited"}  full={false} blue={true}>
<img src='/bbp.svg' className={styles.acc_bgb}/>
<img src='/tbp.svg' className={styles.acc_bgt}/>
  <div className={styles.acc}></div>
  <div className={styles.acc_content}>
    <h2>"Accredited" by Skill Development Council Canada</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
    <a className={styles.acc_btn} onClick={(e)=>{e.preventDefault(),ModalHandler2(true)}}><button>Learn More</button></a>
  </div>
</Section>
<section className={styles.custom} style={{top:topper}}><img className={styles.ballholder} style={{top:toppos,right:rightpos}} src="/ball.png"></img></section>
<Section id={"courses"} full={true} marginned={true}>

<div className={styles.grid_four}>

<div className={styles.grid}><div className={styles.line_two}></div><h1>Range of <span className={styles.blue}>Courses</span></h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p></div>
<div className={styles.grid + " " + styles.blue} style={{backgroundImage:"url('/elisa-calvet-b-S3nUOqDmUvc-unsplash.jpg')"}}>
  
 
  <a href='#'> <div className={styles.inner_grid_content}>

<h2>
  Diploma Courses
</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div></a></div>
<div className={styles.grid + " " + styles.blue} style={{backgroundImage:"url('/kevin-bhagat-zNRITe8NPqY-unsplash.jpg')"}}><a href='#'>
<div className={styles.inner_grid_content}>

<h2>
  University Tie-Up Programs
</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
  
  </a></div>
  <div className={styles.line_two + " " + styles.two}></div>
<div className={styles.grid + " " + styles.blue} style={{backgroundImage:"url('/vasily-koloda-8CqDvPuo_kI-unsplash.jpg')"}}><a href='#'>
  
<div className={styles.inner_grid_content}>

<h2>
  Certification Courses
</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
  </a></div>

</div>


</Section>
<Section id={"stats"} full={false} marginned={true}>
<div className={styles.line6}></div>
<div className={styles.grid_icon}>
<IconGrid icon={'/career.svg'} content={"Career Coaching"}/>
<IconGrid icon={'/bc.svg'} content={"Blockchain based Certification"}/>
<IconGrid icon={'/international.svg'} content={"Internationally recognised Certification"}/>
<IconGrid icon={'/research.svg'} content={"Research based Courses"}/>
</div>
<div className={styles.line6}></div>
<div className={styles.columns + " " + styles.narrow}>

  <StatNumber number={5000} text={'Registered Users'} suffix={"+"}></StatNumber>
  <StatNumber number={4000} text={'Placement Partners'} suffix={"+"}></StatNumber>
  <StatNumber number={100} text={'Placements'} suffix={"%"}></StatNumber>
</div>

</Section>
<Section id={"enroll"} full={false} blue={true}>
<img src='/dots.svg' className={styles.dots} width="50" height="50"/>
<img src='/dots.svg' className={styles.dots} width="50" height="50"/>

<img src='/swirl.svg' className={styles.swirl_bg} />
<div className={styles.d_wrapper}>
<h3 className={styles.d_h3}>Enroll into</h3>
<h2 className={styles.d_h2}>Job/Internship Assurance based Courses</h2>
<div className={styles.button_wrapper}>
  <a className={styles.acc_btn} onClick={e=>{e.preventDefault(),setNotification("Application Form will be available soon","success")}}><button>Apply Now</button></a>
  <a onClick={e=>{e.preventDefault(),ModalHandler(true)}}><button>Get in Touch</button></a>
</div></div>
</Section>


<Section id={"team"} full={false} marginned={true}>
  <h1 className={styles.team_heading}>SuperHuman Team <br/>behind <span className={styles.blue}>nEmi</span></h1>
  <div className={styles.team_content}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
<div className={styles.columns}>

  <ProfileCard link={"#"} handleMouseOver={setOverlayActive} name={'Akshay Bajpayee'} role="Founder & CEO" image="/image1.jpg" badge="/badge.svg"></ProfileCard>
  <ProfileCard link={"#"} handleMouseOver={setOverlayActive} name={'Colonel(Retd.) Niraj Nayan Bajpayee'} role="Chief Mentor" image="/image5.jpg" badge="/badge2.svg"></ProfileCard>
  <ProfileCard link={"#"} handleMouseOver={setOverlayActive} name={'Diwakar Pratap Singh'} role="Executive Director" image="/image2.jpg" badge="/badge3.svg"></ProfileCard>
</div>

</Section>
<Section id={"hiring_partners"} full={false} marginned={true}>
<h1 className={styles.team_heading}>Our <span className={styles.blue}>Placements</span></h1>
  <div className={styles.team_content}><p>Some of our prominent hiring partners from pool of <span className={styles.yellow}>4000</span></p></div>
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

</Section>
<Section id={"media"} full={false} marginned={true}>

<div className={styles.media_container}>
<h1 className={styles.team_heading}>Media <span className={styles.blue}>Exposure</span></h1>
  <div className={styles.team_content}><p>National News Channels where nEmi is featured</p></div>
  <Marquee gradient={true}>
  <div className={styles.media_grid}><img src='/big-news-network.png'/><img src='/maharashtra_news.png'/></div>
  <div className={styles.media_grid}><img src='/default-logo.png'/><img src='/MP-Chronicle.png'/></div>
  <div className={styles.media_grid}><img src='/logo.png'/><img src='/INN_rVm3TwN.png'/></div>
  <div className={styles.media_grid}><img src='/ZEE5_logo.png'/><img src='/unnamed.jpg'/></div>
  <div className={styles.media_grid}><img src='/South_India_news.png'/><img src='/dailyhunt_logo.svg'/></div>
  <div className={styles.media_grid}><img src='/Haryana_Today.png'/><img src='/IEO.png'/></div>
  <div className={styles.media_grid}><img src='/Kashmir_Breaking_News.png'/><img src='/logo (1).png'/></div>
  <div className={styles.media_grid}><img src='/logo_800x149_transp-1.webp'/><img src='/lokmattimes-logo-mobile-v0.2.png'/></div>
  <div className={styles.media_grid}><img src='/logo.webp'/><img src='/JioNewsAppIcon.png'/></div>
  <div className={styles.media_grid}><img src='/ZEE5_logo.png'/><img src='/unnamed.jpg'/></div>
  <div className={styles.media_grid}><img src='/Haryana_Today.png'/><img src='/IEO.png'/></div>
</Marquee>
</div>

</Section>
      </main>



   
    </div>
    <Footer device={mobile} handleSubmit={submitter} handleStudentLogin={handleStudentLogin} handleContactPopup={e=>ModalHandler(true)}></Footer>
    
    {nottext && nottext.text.length > 2 ? <Notifications type={nottext.type} text={nottext.text}/>: ''}
    </>
  )
}
