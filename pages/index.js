import Head from 'next/head'
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
import DefaultLayout from '../layout/DefaultLayout'
import { Button, Card, Link, Spacer } from '@nextui-org/react'

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
const whos = [
  {
    title:'Upskill',
    action:()=>{},
    
  },
  {
    title:'Find Training',
    action:()=>{},
    
  },
  {
    title:'Get into Placement Drives',
    action:()=>{},
    
  },
  {
    title:'Find a coursemate or a coworker',
    action:()=>{},
    
  },
  {
    title:'Find the right course for you',
    action:()=>{},
    
  }
]

  const features = [<>Courses with<span className={styles.blue}>&nbsp;Job Assurance</span></>,<>Mentoring by<span className={styles.blue}>&nbsp;Military Veterans</span></>,<><span className={styles.blue}>AI Powered</span>&nbsp;Career Guidance</>,<><span className={styles.blue}>Blockchain</span>&nbsp;integrated Certification</>,<>Recognised by<span className={styles.blue}>&nbsp;Ministry of Commerce</span></>,<>Backed by<span className={styles.blue}>&nbsp;Dr. Abdul Kalam Technical University</span></>]

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

const usps=[
  'Upskill','Socialize','Network','Placements'
]

  useEffect(()=>{

DoSet();
getPos();


  },[])
 
  function handleOpener(){
     setIsOpen(false);
    setTimeout(()=>{setIsOpen(true)},50)
  
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
  
  <div className={'w-full h-screen flex flex-row justify-center items-center'}>


<div className='flex-1 text-left flex flex-col justify-start items-start'>
    <h2 className={styles.hero_heading + " relative !text-left !font-normal !leading-none"}>Welcome to the<br/><span className='relative'><div className={styles.verse + " inline-block"}>NemiVerse</div><div className="absolute top-4 -right-8 z-[1] w-8 h-8 text-black rounded-full border-4 border-primary text-sm flex flex-col items-center justify-center p-0"><p className='text-lg z-10 relative leading-none text-primary font-bold '>R</p></div></span></h2>
   {/*  <Switcher features={features}/> */}
   <div className='flex flex-col lg:flex-row text-sm lg:text-lg items-center justify-center my-2'>
    {usps && usps.map((i,d)=>{
      return <div className='mx-1'> • {i}</div>
    })}
   </div>
  <div className='w-full flex flex-row items-center justify-start my-2'>
    <Button as={Link} href='https://app.nemiedu.com/login' variant="flat" color='primary'>Join Now</Button>
    <Spacer x={2}></Spacer>
    <Button as={Link} href='https://app.nemiedu.com/login' variant="light" color='primary'>Sign In</Button>
  </div>
   </div>
   <div className='flex-1'>

    <img src='/hero_artwork.svg' className='w-full h-full object-contain'/>
   </div>

  </div>
  
</Section>
<Section background="#0754c011">
  <div className='flex flex-row font-sans min-h-[30vh] items-center py-12'>

<div className='flex-1 flex-col items-start justify-start'>
<h2 className='text-5xl font-medium text-primary'>Who's nemi for?</h2>
<Spacer y={4}></Spacer>
{whos && whos.map((i,d)=>{
  return <div className='px-4 group py-2 mb-2 flex flex-row items-center justify-between cursor-pointer hover:bg-blue-50 shadow-sm rounded-md bg-white'>{i.title}
  
  <svg className='group-hover:mr-2 transition-all' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" height="24" width="24" id="Chevron-Forward--Streamline-Rounded----Material-Symbols">
  <path fill="#000" d="M12.697916666666668 11.475945833333334L8.457291666666666 7.235320833333334C8.313541666666667 7.091570833333333 8.245643750000001 6.9238625 8.253645833333334 6.732195833333333C8.261647916666668 6.540529166666667 8.3375 6.372820833333333 8.48125 6.229070833333334C8.625 6.085320833333333 8.796685416666667 6.013445833333333 8.996354166666666 6.013445833333333C9.196022916666667 6.013445833333333 9.367708333333335 6.085320833333333 9.511458333333334 6.229070833333334L14.255208333333334 10.972820833333333C14.335085416666667 11.052697916666668 14.39095625 11.132527083333335 14.422916666666667 11.212404166666667C14.454877083333333 11.29228125 14.470833333333333 11.380112500000001 14.470833333333333 11.475945833333334C14.470833333333333 11.571779166666667 14.454877083333333 11.659610416666668 14.422916666666667 11.739487500000001C14.39095625 11.819364583333334 14.335085416666667 11.899193750000002 14.255208333333334 11.979070833333335L9.4875 16.74677916666667C9.34375 16.890529166666667 9.176041666666666 16.958427083333333 8.984375 16.950425C8.792708333333334 16.94242291666667 8.625 16.866570833333334 8.48125 16.722820833333333C8.3375 16.579070833333336 8.265625 16.407385416666667 8.265625 16.20771666666667C8.265625 16.008047916666666 8.3375 15.8363625 8.48125 15.692612500000001L12.697916666666668 11.475945833333334Z" stroke-width="1"></path>
</svg>
  </div>
})}
</div>
<div className='flex-1 flex-col items-start justify-start'>

</div>
  </div>
</Section>
<Section minus={false} id={"accredited"}  full={false} blue={true}>

 <div className={styles.rec}>
  {/* <div className={styles.accredit}>
<img src='/bbp.svg' className={styles.acc_bgb}/>
<img src='/tbp.svg' className={styles.acc_bgt}/>
  <div className={styles.acc}></div>
  <div className={styles.acc_content}>
    <h2>"Accredited" by Skill Development Council Canada</h2>
    <p>{accredited}</p>
    <a className={styles.acc_btn} onClick={(e)=>{e.preventDefault(),ModalHandler2(true)}}><button>Learn More</button></a>
  </div>
  </div> */}
  <div className={styles.recognized}>

<div className={styles.recognized_inner}>

  <h2>Recognised by</h2>
  <div className={styles.recognized_item}>
  <img src='/moc.svg'/>
  <img src='/upgov.png'/>
  </div>
</div>
<div className={styles.recognized_inner}>

  <h2>Backed by</h2>
  <div className={styles.recognized_item}>
<img src='/aktu.png'/>
<h3>Dr. A.P.J Abdul Kalam Technical University</h3>
  </div>
  <div className={styles.recognized_item}>
<img src='/drishti_logo.png'/>
<h3>IIT Indore DRISHTI CPS Foundation</h3>
  </div>
</div>

</div>

  </div> 
  
</Section>

{/* <section className={styles.custom} style={{top:topper}}><img className={styles.ballholder} style={{top:toppos,right:rightpos}} src="/ball.png"></img></section> */}

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
<Section id={"enroll"} background="var(--brand-col1)" full={false} blue={true}>
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



<Section id={"hiring_partners"} full={false} marginned={true}>
<h1 className={styles.team_heading}>Our <span className={styles.blue}>Placements</span></h1>
  <div className={'text-xs max-w-[800px] w-full mx-auto text-center my-4 text-gray-500'}><p>Some of the brands where our students secured placements.</p></div>
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
  <div className={'text-xs max-w-[800px] w-full mx-auto text-center my-4 text-gray-500'}><p>National News Channels where nEmi is featured. nEmi has been gaining media exposure for so long for its flawless work in the education industry. Despite being in a competitive market, nEmi managed to conquer with its research driven Education Technology which is helping students to get better opportunities from global brands.</p></div>
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
    {nottext && nottext.text.length > 3 ? <Notifications type={nottext.type} text={nottext.text}/>: ''}
    </>
  )
}
