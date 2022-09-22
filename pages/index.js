import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'


import Notifications from '../components/Notifications'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'
import Marquee from "react-fast-marquee";
import ProfileCard from '../components/ProfileCard'
import LogoGrid from '../components/LogoGrid'
import StatNumber from '../components/StatNumber'
import Modal from '../components/Modal'

import IconGrid from '../components/IconGrid'
import { supabase } from '../utils/supabaseClient'
import Switcher from '../components/Switcher'
import DefaultLayout from '../layout/DefaultLayout'
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
  const [isOpen,setIsOpen] = useState(false);
  const [cs,setCS] = useState(true);
  const [pass,setPass] = useState(true);
  const [isContactOpen,setIsContactOpen] = useState(false);
  const [activeItem,setActiveItem] = useState({

    index:null,
    isOpen:false,
  });


  const features = [<>Courses with<span className={styles.blue}>&nbsp;Job Assurance</span></>,<>Mentored by<span className={styles.blue}>&nbsp;Military Veterans</span></>,<><span className={styles.blue}>AI Powered</span>&nbsp;Career Guidance</>,<><span className={styles.blue}>Blockchain</span>&nbsp;integrated Certification</>,<>Recognised by<span className={styles.blue}>&nbsp;Ministry of Commerce</span></>,<>Backed by<span className={styles.blue}>&nbsp;AKTU</span></>]

const accredited = "nEmi is backed by Skill Development Council Canada with Certification, Learning, Skill Development etc. which makes our certificates internationally recognized. This not only raises the value of education but also helps students to get better opportunities. nEmi courses follow guidelines provided by Skill Development Council to validate the quality control throughout the education pipeline.";

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
/*
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
     



   }, 250); */
     
      

  

      

   



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

function handleSetItem(data){
setActiveItem(data)
}


function ModalHandler(data){
setModalOpen(data);
}
function ModalHandler2(data){
  setModalTwoOpen(data);
  }
  function ModalHandler3(data){
   
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
 
  function handleOpener(){

    
  setIsOpen(true);
  }

  
  function ContactFormHandler(data){
    setIsContactOpen(false);
    setTimeout(e=>setIsContactOpen(data),20)
    
      }
function handleClose(data){

  setIsOpen(false)
}
  const containerRef = useRef(null);
  return (<>
  {/* <Modal closeable={false} open={cs} extra={true} handleModal={ModalHandler3}>
<div className={styles.cs}>
  <h2>nEmi is Coming Soon for public !! </h2>
  <p>Registered Beta Users can view website</p>
    <input type={"password"} placeholder={"enter password to view website"} onChange={e=>{setPass(e.target.value)}}></input>
    <button onClick={handleAuth}>Submit</button></div>
  </Modal> */}
  <DefaultLayout opener={isOpen} Closer={handleClose} activatedItem={activeItem} contactPop={isContactOpen}>
    {/* <NavBar scrolled={scrolled} device={mobile} handleStudentLogin={handleStudentLogin} handleContactPopup={e=>ModalHandler(true)}></NavBar> */}
    



    <Modal closeable={true} open={isModalTwoOpen} handleModal={ModalHandler2}>

<div className={styles.learn_more}>
  <h2>Skill Development Council Canada</h2>
  <p>Skill Development Council Canada was established to intervene and provide international certifications & qualifications to the global training community. </p>
</div>

    </Modal>
    <div className={styles.container}>
      <Head>
      
        <title>Nemi Education</title>
        
       
      </Head>
   
      <main className={styles.main} data-scroll-container ref={containerRef}>
        <div className={styles.overlay + " " + (overlay? styles.activeoverlay : '')}></div>
<Section id={'hero'} full={true}>
  
  <div className={styles.hero}>

    <h2 className={styles.hero_heading}>India's first research based <br/><span>&nbsp; &nbsp; Edtech company <circ>™</circ></span></h2>
    <Switcher features={features}/>
  
  <a className={styles.btn} href=" " onClick={(e)=>{e.preventDefault(),handleOpener()}}><button>Dive In Now</button></a>



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
  <p><b>nEmi</b> is a word that emerged from <y>Sanskrit language</y> which means <b>‘Chord’</b> in English. It was chosen by the founders itself keeping the vision of developing <y>educational harmony</y> in mind for which nEmi turned out to be the perfect word. Now nEmi is recognized by various <y>government organizations</y> as an emerging <b>Edtech company</b>. It is being mentored by <b>Military Veterans</b> and a lot of more experienced personalities. We at nEmi strive to utilize the best technologies in an educational manner for a better ecosystem of <y>learning & skill development.</y></p>
  <h2>How are we solving<span className={styles.blue}> Real World Edtech Problems?</span></h2>

  <p>We have thoroughly observed problems in the current Edtech Industry. The Edtech Industry is growing rapidly and is very beneficial for our country but it lacks a <b>research driven education model</b> with <b>Job Assurance</b> which we are going to solve with our innovative Modern Tech based learning platform bundled with <b>Job Assurance</b> and <b>Seamless Experience</b>.
<br/><br/>
On our platform we are trying to bring revolutionary features which will not only shape <b>Student’s Personality & Skills</b> but also help trainers or guides to interact with students. Involving <b>AI & Machine Learning</b> to develop an automated model for serving required knowledge to students.
</p>
  {/* <ul className={styles.journey}>
<li>Founded in <rv>December 2020</rv></li>
<li>Students started Enrolling in <rv>April 2021</rv></li>
<li>E-Diploma course batch started in <rv>June 2021</rv></li>
<li>More than 50% of them secured a job in <rv>November 2021</rv></li>
<li>Website & App deployed during <rv>2022 Q2 & Q3</rv> </li>
<li>More to come..... will be available on our <rv>Roadmap shortly</rv></li>


  </ul> */}
  <h2>What makes us <span className={styles.blue}>different?</span></h2>
  
    <ul className={styles.different}>
    <li>Job Assurance in well known brands across the country</li>
      <li>Mentoring sessions by Military Veterans</li>
      <li>AI powered Career Guidance and Education Ecosystem</li>
      <li>Blockchain integrated Certification System</li>
      <li>Utilizing Modern Education Technology for Seamless Learning Experience</li>
      <li>Recognized by Ministry of Commerce, MSME , Startup India and many more renowned government organizations </li>
      <li>Research based Evaluation & Learning Pipeline</li>
      <li>Internationally recognised certification , Backed by Skill Development Council Canada</li>
      
    </ul>
  
</div>
</div>

</Section>
<Section id={"accredited"}  full={false} blue={true}>
<img src='/bbp.svg' className={styles.acc_bgb}/>
<img src='/tbp.svg' className={styles.acc_bgt}/>
  <div className={styles.acc}></div>
  <div className={styles.acc_content}>
    <h2>"Accredited" by Skill Development Council Canada</h2>
    <p>{accredited}</p>
    <a className={styles.acc_btn} onClick={(e)=>{e.preventDefault(),ModalHandler2(true)}}><button>Learn More</button></a>
  </div>
</Section>
<section className={styles.custom} style={{top:topper}}><img className={styles.ballholder} style={{top:toppos,right:rightpos}} src="/ball.png"></img></section>
<Section id={"courses"} full={true} marginned={true}>

<div className={styles.grid_four}>

<div className={styles.grid}><div className={styles.line_two}></div><h1>Range of <span className={styles.blue}>Courses</span></h1><p>Our wide variety of courses are divided into categories to cater everyone with their choice of course category. We have Diploma courses , Certification courses and University Tie-Up Programs etc. at the moment and more special categories are likely to be added in upcoming months. <br/> Each course includes International & Blockchain based Certification , Full Assistance, Seamless Course Completion Experience, AI based Career Guidance and a lot  more.</p></div>
<div className={styles.grid + " " + styles.blue} onClick={e=>{handleSetItem(1),handleOpener()}} style={{backgroundImage:"url('/courses03.jpg')"}}>
  
 
  <a> <div className={styles.inner_grid_content}>

<h2>
  Diploma Courses
</h2><p>
Diploma Courses are very well known for their demand in the industry for getting placed along with a good package. It is suitable for students who are willing to gain a skill along with a Diploma. 

</p>
</div></a></div>
<div onClick={e=>{handleSetItem(3),handleOpener()}} className={styles.grid + " " + styles.blue} style={{backgroundImage:"url('/courses01.jpg')"}}><a >
<div className={styles.inner_grid_content}>

<h2>
  University Tie-Up Programs
</h2><p>
University Tip-Up Programs consist of Bachelors/Masters Degree Courses such as B.Tech/M.Tech , B.Com/M.Com etc. When you enroll using nEmi platform you get all the benefits which nEmi claims to provide and access to exclusive content/learning platform for better personality development.
</p>
</div>
  
  </a></div>
  <div className={styles.line_two + " " + styles.two}></div>
<div className={styles.grid + " " + styles.blue} onClick={e=>{handleSetItem(2),handleOpener()}} style={{backgroundImage:"url('/courses02.jpg')"}}><a >
  
<div className={styles.inner_grid_content}>

<h2>
  Certification Courses
</h2><p>
  
In Certification Courses students are provided with a wide variety of professional courses to choose from. Students receive a Blockchain Minted & Internationally recognised Certificate.
</p>
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
  <a className={styles.acc_btn} onClick={(e)=>{e.preventDefault(),handleOpener()}}><button>Apply Now</button></a>
  <a onClick={e=>{e.preventDefault(),ContactFormHandler(true)}}><button>Get in Touch</button></a>
</div></div>
</Section>


<Section id={"team"} full={false} marginned={true}>
  <h1 className={styles.team_heading}>SuperHuman Team <br/>behind <span className={styles.blue}>nEmi</span></h1>
  <div className={styles.team_content}><p>nEmi is being operated by team of superhumans who have years of Experience in various fields.<br/>With an Innovative Mindset, nEmi team tries to achieve limitless solutions for modern edtech and bring a revolutionary change</p></div>
<div className={styles.columns}>

  <ProfileCard link={"#"} handleMouseOver={setOverlayActive} name={'Akshay Bajpayee'} role="Founder & CEO" image="/team01.jpg" badge="/badge.svg"></ProfileCard>
  <ProfileCard link={"#"} handleMouseOver={setOverlayActive} name={'Colonel(Retd.) Niraj Nayan Bajpayee'} role="Chief Mentor" image="/team02.jpg" badge="/badge2.svg"></ProfileCard>
  <ProfileCard link={"#"} handleMouseOver={setOverlayActive} name={'Diwakar Pratap Singh'} role="Executive Director" image="/image2.jpg" badge="/badge3.svg"></ProfileCard>
</div>

</Section>
<Section id={"hiring_partners"} full={false} marginned={true}>
<h1 className={styles.team_heading}>Our <span className={styles.blue}>Placements</span></h1>
  <div className={styles.team_content}><p>Some of the brands where our students secured placements.</p></div>
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
  <div className={styles.team_content}><p>National News Channels where nEmi is featured. nEmi has been gaining media exposure for so long for its flawless work in the education industry. Despite being in a competitive market, nEmi managed to conquer with its research driven Education Technology which is helping students to get better opportunities from global brands.</p></div>
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
{/*     <Footer device={mobile} handleSubmit={submitter} handleStudentLogin={handleStudentLogin} handleContactPopup={e=>ModalHandler(true)}></Footer> */}
    </DefaultLayout>
    {nottext && nottext.text.length > 2 ? <Notifications type={nottext.type} text={nottext.text}/>: ''}
    </>
  )
}
