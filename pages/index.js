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
import { Avatar, AvatarGroup, Button, Card, Divider, Link, Spacer } from '@nextui-org/react'
import { useNMNContext } from '../components/NMNContext'
import useMousePosition from '../components/CursorPosition'
import { useMediaQuery } from 'react-responsive'
import {motion,AnimatePresence} from 'framer-motion'
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
  const [showAll,setShowAll] = useState(false)
  const [isContactOpen,setIsContactOpen] = useState(false);
  const [activeWho,setActiveWho] = useState(0)
  const [activeItem,setActiveItem] = useState({

    index:null,
    isOpen:false,
  });
  const {x,y} = useMousePosition()
const isMobile = useMediaQuery({query:"(max-width: 968px)"})
const isTablet = useMediaQuery({query:"(max-width: 1024px)"})
const whos = [
  {
    title:'Upskill',
    action:()=>{},
    image:'https://assets.entrepreneur.com/content/3x2/2000/20190326201928-GettyImages-633710081-edit.jpeg?format=pjeg&auto=webp&crop=4:3'
    
  },
  {
    title:'Find Training',
    action:()=>{},
    image:'https://homeguruworld.com/wp-content/uploads/2021/05/Banner-1-e1632383732604.jpg'
    
  },
  {
    title:'Get into Placement Drives',
    action:()=>{},
    image:'https://img2.exportersindia.com/product_images/bc-full/2020/11/8201135/job-placement-1606160301-5639102.jpg'
    
  },
  {
    title:'Find a coursemate or a coworker',
    action:()=>{},
    image:'https://www.betterup.com/hubfs/Colleagues-Chatting.jpg'
    
  },
  {
    title:'Find the right course for you',
    action:()=>{},
    image:'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'
    
  }
]

const {categories} = useNMNContext()

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

const backed = [
  {
    title:'Dr. A.P.J Abdul Kalam Technical University',
    image:'/aktu.png'
  },
  {
    title:'IIT Indore DRISHTI CPS Foundation',
    image:'/drishti_logo.png'
  }
]
const recognitions = [
  {
    title:'Ministry of Commerce & Industry',
    image:'/moc.svg'
  },
  {
    title:'Uttar Pradesh Government',
    image:'/upgov.png'
  }
  
]
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
  
  <div className={'w-full h-auto md:h-screen flex flex-col-reverse md:flex-row justify-center items-center'}>


<div className='flex-1 lg:w-auto w-full text-left flex flex-col my-12 md:my-12 justify-start items-start'>
    <h2 className={styles.hero_heading + " relative  !text-left !font-normal !leading-none"}>Welcome to the<br/><span className='relative'><div className={styles.verse + " inline-block"}>NemiVerse</div><div className="absolute top-2 md:top-2 -right-8  md:-right-8 z-[1] w-6 md:w-8 h-6 md:h-8 text-black rounded-full border-2 md:border-4 border-primary text-sm flex flex-col items-center justify-center p-0"><p className='text-xs md:text-lg z-10 relative leading-none text-primary font-bold '>R</p></div></span></h2>
   {/*  <Switcher features={features}/> */}
   <div className='flex lg:flex-row flex-wrap text-sm md:text-sm lg:text-lg items-start justify-start my-2'>
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
   <div className='flex-0 lg:flex-1 mt-[110px] lg:mt-0'>

    <img src='/hero_artwork.svg' className='w-full h-full object-contain'/>
   </div>

  </div>
  
</Section>
<Section background="#fff">
  <div className='flex flex-col-reverse lg:flex-row font-sans min-h-[unset] lg:min-h-[30vh] items-center py-0 lg:py-12'>

<div className='lg:flex-1 w-full lg:w-auto flex-0 flex-col items-start justify-start'>
<h2 className='sm:text-3xl text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-thin text-primary'>Who's nemi for?</h2>

<div className='flex flex-col my-0 mt-4 lg:mt-0 lg:!my-12'>
{whos && whos.map((i,d)=>{
  return <div className={'px-4 group py-4 !font-sans mb-2 flex flex-row items-center transition-all justify-between cursor-pointer hover:bg-blue-50 shadow-md rounded-md bg-white ' + (d == activeWho ? "!bg-primary text-white":"")} onClick={()=>{setActiveWho(d)}}>{i.title}
  
  <svg className='group-hover:mr-2 transition-all' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" height="24" width="24" id="Chevron-Forward--Streamline-Rounded----Material-Symbols">
  <path fill="currentColor" d="M12.697916666666668 11.475945833333334L8.457291666666666 7.235320833333334C8.313541666666667 7.091570833333333 8.245643750000001 6.9238625 8.253645833333334 6.732195833333333C8.261647916666668 6.540529166666667 8.3375 6.372820833333333 8.48125 6.229070833333334C8.625 6.085320833333333 8.796685416666667 6.013445833333333 8.996354166666666 6.013445833333333C9.196022916666667 6.013445833333333 9.367708333333335 6.085320833333333 9.511458333333334 6.229070833333334L14.255208333333334 10.972820833333333C14.335085416666667 11.052697916666668 14.39095625 11.132527083333335 14.422916666666667 11.212404166666667C14.454877083333333 11.29228125 14.470833333333333 11.380112500000001 14.470833333333333 11.475945833333334C14.470833333333333 11.571779166666667 14.454877083333333 11.659610416666668 14.422916666666667 11.739487500000001C14.39095625 11.819364583333334 14.335085416666667 11.899193750000002 14.255208333333334 11.979070833333335L9.4875 16.74677916666667C9.34375 16.890529166666667 9.176041666666666 16.958427083333333 8.984375 16.950425C8.792708333333334 16.94242291666667 8.625 16.866570833333334 8.48125 16.722820833333333C8.3375 16.579070833333336 8.265625 16.407385416666667 8.265625 16.20771666666667C8.265625 16.008047916666666 8.3375 15.8363625 8.48125 15.692612500000001L12.697916666666668 11.475945833333334Z" stroke-width="1"></path>
</svg>
  </div>
})}</div>
</div>
<Spacer x={12}></Spacer>
<div className='flex-1 mx-auto max-w-[80%] lg:max-w-full flex-col items-start justify-start overflow-hidden'>
  <AnimatePresence mode="wait">
<motion.div
initial={{scale:0.95,opacity:0,rotate:-5,filter:'blur(10px)'}}
animate={{scale:1,opacity:1,rotate:0,filter:'blur(0px)'}}
exit={{scale:0.95,opacity:0,rotate:5,filter:'blur(10px)'}}
transition={{duration:0.25,bounce:0.2,type:"spring"}}
className='w-full aspect-square rounded-full h-auto overflow-hidden'
key={activeWho}

>
  <img src={whos[activeWho].image??'https://media.istockphoto.com/id/1354776457/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=w3OW0wX3LyiFRuDHo9A32Q0IUMtD4yjXEvQlqyYk9O4='} className='w-full h-full object-cover object-center'/>
  </motion.div></AnimatePresence>
</div>
  </div>
</Section>

<Section background="#fafafa">

<div className='w-full flex flex-col lg:flex-row items-center justify-between min-h-[unset] lg:min-h-[340px] py-12 lg:py-0'>
  <div className='w-full lg:w-auto flex-0 lg:flex-1 mb-4 lg:mb-0'>
    <h2 className='text-blue-900 font-light  text-3xl md:text-4xl lg:text-5xl xl:text-6xl '>Find a coursemate or coworker</h2>
  </div>
  <div className='flex-1 w-full lg:w-auto flex flex-col justify-start lg:justify-center items-start lg:items-center'>
  <AvatarGroup isBordered renderCount={(count) => (
        <p className="text-small text-gray-400 font-medium ms-2">100k+ others</p>
      )} size="lg" >
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a042581f4e29026024d" />
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a04258a2462d826712d" />
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a042581f4e29026704d" />
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a04258114e29026302d" />
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a04258114e29026702d" />
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a04258114e29026708c" />
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a04258114e29026708c" />
      <Avatar classNames={{base:(isMobile ? "w-12 h-12" : isTablet ? "w-16 h-16" : "w-24 h-24")}} src="https://i.pravatar.cc/250?u=a04258114e29026708c" />
    </AvatarGroup>   
  </div>
  
</div>

</Section>

<Divider></Divider>

<Section background="#fafafa">

<div className='w-full flex flex-col lg:flex-row items-center justify-between min-h-[unset] py-12 lg:py-0 lg:min-h-[340px]'>
  <div className='w-full flex-0 lg:flex-1 mb-4 lg:mb-0'>
    <h2 className='text-yellow-700 font-light  text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Find the right course for you</h2>
  </div>
  <div className='flex-1 flex flex-col'>
    <div className='flex flex-row items-center justify-start flex-wrap'>
    {categories && categories.slice(0,(showAll ? categories.length : 10)).map((i,d)=>{
      return <Button as={Link} href={`/category/${i.slug}`} variant="bordered" 
      className='rounded-full m-1 hover:bg-neutral-200 hover:text-black px-2 lg:px-8 py-3 lg:py-6 text-xs lg:text-sm'
      
      >{i.title}</Button>
    })}</div>
    {categories?.length > 10 ?
<Button onPress={()=>{setShowAll(!showAll)}} variant="bordered" className='rounded-full m-1 mr-auto hover:bg-gray-200' endContent={<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" fill="#222F3D"/></svg>}>Show More</Button>:''}
  </div>
  
</div>

</Section>
<Divider></Divider>
<Section background="#fafafa">

<div className='w-full flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 min-h-[unset] lg:min-h-[340px]'>
  <div className='flex-1'>
    <h2 className='text-blue-900 font-light  text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Recognitions</h2>
  </div>
  <Spacer className='flex lg:hidden' y={4}></Spacer>
  <div className='flex-1 flex flex-col'>
  <div className='flex flex-row items-center justify-start flex-wrap'>
    {recognitions && recognitions.map((i,d)=>{
      return <div className='flex flex-col text-center justify-center font-normal flex-1 first:mr-4  items-center  bg-white shadow-sm rounded-xl aspect-video px-8 py-4'>
        
<img className='h-[80px] object-contain' src={i.image}/>
<h3 className='text-xs my-2 text-gray-700'>{i.title}</h3>
 
 
      </div>
    })}
    </div>
  </div>
  
</div>

</Section>

<Section background="#fafafa">

<div className='w-full flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 min-h-[unset] lg:min-h-[340px]'>
  <div className='flex-1'>
    <h2 className='text-yellow-700 font-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Backed by</h2>
    <Spacer className='flex lg:hidden' y={4}></Spacer>
  </div>
  <div className='flex-1 flex flex-col'>
    <div className='flex flex-row items-stretch justify-start flex-wrap'>
    {backed && backed.map((i,d)=>{
      return <div className='flex flex-col text-center justify-center font-normal flex-1 first:mr-4  items-center  bg-white shadow-sm rounded-xl aspect-video px-8 py-4'>
        
<img className='h-[80px] object-contain' src={i.image}/>
<h3 className='text-xs my-2 text-gray-700'>{i.title}</h3>
 
 
      </div>
    })}
    </div>
   
  </div>
  
</div>

</Section>


<Divider></Divider>

<div className=''></div>
<Section fullWidth background="#fff">

<div className='w-full group flex flex-col items-center justify-between min-h-[unset] lg:min-h-[340px]'>
  <div className='group-hover:opacity-100 pointer-events-none hidden group-hover:flex  transition-opacity fixed w-auto rounded-full z-10 h-8 ' style={{left:(x-12)+"px",top:(y-12)+"px"}}>
  <div className='relative w-full h-full flex flex-col justify-center items-center transition-all text-white bg-primary shadow-md py-2 px-8 rounded-full z-[1]'>
<p>NEMI @ IIT Indore </p>
  </div>
{/* <div className='absolute left-0 top-0 w-full h-full bg-primary-100 animate-ping rounded-full -z-[1]'></div> */}

  </div>
    <h2 className='text-yellow-700 my-12 max-w-[1200px] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center'>nemi is the exclusive skilling partner of IIT Indore through its skilling wing Drishti CPS</h2>
 
 <img src='/iitindore.png' className=' left-0 bottom-0 w-full object-contain h-auto grayscale'/>
  
</div>

</Section>

<Divider></Divider>


<Section background="#fff" visible={false}>

<div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between min-h-[unset] lg:min-h-[50vh] my-12'>
  <div className='flex-1'>
  <Spacer className='flex lg:hidden' y={4}></Spacer>
    <h2 className='text-black font-normal text-3xl md:text-4xl lg:text-5xl xl:text-5xl'>Let the right people know your skills & you're open to work</h2>
    <Spacer y={4}></Spacer>
    <Button variant="shadow" size='lg' as={Link} href='https://app.nemiedu.com' color='primary' className='rounded-full'>Start Learning</Button>
  </div>
  <div className='flex-1 flex flex-col lg:text-sm justify-start items-start'>
    <div className='relative w-auto'>

    <div className='bg-primary rounded-full  shadow-md absolute -left-12 top-1/4 text-sm text-white hidden lg:flex flex-row items-center px-4 py-2'>
<svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  
<path d="M9.83585 2.03398C9.94837 2.07226 10.0583 2.11779 10.1649 2.17028L11.4477 2.80183C11.7958 2.97323 12.2038 2.97323 12.5519 2.80183L13.8347 2.17028C15.1972 1.49942 16.8457 2.06018 17.5165 3.42276L17.59 3.58509L17.6528 3.75183L18.1133 5.10543C18.2383 5.4728 18.5268 5.7613 18.8941 5.88627L20.2477 6.34673C21.6856 6.83585 22.4547 8.39799 21.9656 9.83585C21.9273 9.94837 21.8818 10.0583 21.8293 10.1649L21.1977 11.4477C21.0263 11.7958 21.0263 12.2038 21.1977 12.5519L21.8293 13.8347C22.5002 15.1972 21.9394 16.8457 20.5768 17.5165C20.4702 17.569 20.3603 17.6146 20.2477 17.6528L18.8941 18.1133C18.5268 18.2383 18.2383 18.5268 18.1133 18.8941L17.6528 20.2477C17.1637 21.6856 15.6016 22.4547 14.1637 21.9656C14.0512 21.9273 13.9413 21.8818 13.8347 21.8293L12.5519 21.1977C12.2038 21.0263 11.7958 21.0263 11.4477 21.1977L10.1649 21.8293C8.80233 22.5002 7.15389 21.9394 6.48303 20.5768C6.43053 20.4702 6.385 20.3603 6.34673 20.2477L5.88627 18.8941C5.7613 18.5268 5.4728 18.2383 5.10543 18.1133L3.75183 17.6528C2.31396 17.1637 1.54486 15.6016 2.03398 14.1637C2.07226 14.0512 2.11779 13.9413 2.17028 13.8347L2.80183 12.5519C2.97323 12.2038 2.97323 11.7958 2.80183 11.4477L2.17028 10.1649C1.49942 8.80233 2.06018 7.15389 3.42276 6.48303C3.52939 6.43053 3.63931 6.385 3.75183 6.34673L5.10543 5.88627C5.4728 5.7613 5.7613 5.4728 5.88627 5.10543L6.34673 3.75183C6.83585 2.31396 8.39799 1.54486 9.83585 2.03398ZM7.76681 4.2349L7.30635 5.5885C7.03142 6.39672 6.39672 7.03142 5.5885 7.30635L4.2349 7.76681C4.18376 7.78421 4.1338 7.80491 4.08533 7.82877C3.46597 8.1337 3.21108 8.88299 3.51602 9.50235L4.14757 10.7851C4.52465 11.551 4.52465 12.4486 4.14757 13.2145L3.51602 14.4972C3.49216 14.5457 3.47146 14.5957 3.45406 14.6468C3.23173 15.3004 3.58133 16.0104 4.2349 16.2328L5.5885 16.6932C6.39672 16.9682 7.03142 17.6029 7.30635 18.4111L7.76681 19.7647C7.78421 19.8158 7.80491 19.8658 7.82877 19.9142C8.1337 20.5336 8.88299 20.7885 9.50235 20.4836L10.7851 19.852C11.551 19.4749 12.4486 19.4749 13.2145 19.852L14.4972 20.4836C14.5457 20.5074 14.5957 20.5281 14.6468 20.5455C15.3004 20.7678 16.0104 20.4182 16.2328 19.7647L16.6932 18.4111C16.9682 17.6029 17.6029 16.9682 18.4111 16.6932L19.7647 16.2328C19.8158 16.2154 19.8658 16.1947 19.9142 16.1708C20.5336 15.8659 20.7885 15.1166 20.4836 14.4972L19.852 13.2145C19.4749 12.4486 19.4749 11.551 19.852 10.7851L20.4836 9.50235C20.5074 9.45389 20.5281 9.40392 20.5455 9.35278C20.7678 8.6992 20.4182 7.98914 19.7647 7.76681L18.4111 7.30635C17.6029 7.03142 16.9682 6.39672 16.6932 5.5885L16.2328 4.2349L16.2042 4.15911L16.1708 4.08533L16.1086 3.97352C15.7727 3.4363 15.0779 3.23014 14.4972 3.51602L13.2145 4.14757C12.4486 4.52465 11.551 4.52465 10.7851 4.14757L9.50235 3.51602C9.45389 3.49216 9.40392 3.47146 9.35278 3.45406C8.6992 3.23173 7.98914 3.58133 7.76681 4.2349ZM10.0502 14.3887L15.4695 8.96946C15.7624 8.67657 16.2372 8.67657 16.5301 8.96946C16.7964 9.23573 16.8206 9.65239 16.6027 9.946L16.5301 10.0301L10.5301 16.0301C10.2443 16.316 9.78995 16.3203 9.49875 16.058L9.42362 15.9799L6.92362 12.9799C6.65845 12.6617 6.70144 12.1888 7.01965 11.9236C7.30893 11.6826 7.72607 11.6962 7.99876 11.9397L8.07595 12.0197L10.0502 14.3887L15.4695 8.96946L10.0502 14.3887Z" fill="currentColor"/>
</svg>

  NEMI Score 100+</div>


<div className='bg-white hidden rounded-full shadow-md absolute -right-1/4 top-1/2 text-sm text-gray-500 lg:flex flex-row items-center px-4 py-2'>
<svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  
<path d="M9.83585 2.03398C9.94837 2.07226 10.0583 2.11779 10.1649 2.17028L11.4477 2.80183C11.7958 2.97323 12.2038 2.97323 12.5519 2.80183L13.8347 2.17028C15.1972 1.49942 16.8457 2.06018 17.5165 3.42276L17.59 3.58509L17.6528 3.75183L18.1133 5.10543C18.2383 5.4728 18.5268 5.7613 18.8941 5.88627L20.2477 6.34673C21.6856 6.83585 22.4547 8.39799 21.9656 9.83585C21.9273 9.94837 21.8818 10.0583 21.8293 10.1649L21.1977 11.4477C21.0263 11.7958 21.0263 12.2038 21.1977 12.5519L21.8293 13.8347C22.5002 15.1972 21.9394 16.8457 20.5768 17.5165C20.4702 17.569 20.3603 17.6146 20.2477 17.6528L18.8941 18.1133C18.5268 18.2383 18.2383 18.5268 18.1133 18.8941L17.6528 20.2477C17.1637 21.6856 15.6016 22.4547 14.1637 21.9656C14.0512 21.9273 13.9413 21.8818 13.8347 21.8293L12.5519 21.1977C12.2038 21.0263 11.7958 21.0263 11.4477 21.1977L10.1649 21.8293C8.80233 22.5002 7.15389 21.9394 6.48303 20.5768C6.43053 20.4702 6.385 20.3603 6.34673 20.2477L5.88627 18.8941C5.7613 18.5268 5.4728 18.2383 5.10543 18.1133L3.75183 17.6528C2.31396 17.1637 1.54486 15.6016 2.03398 14.1637C2.07226 14.0512 2.11779 13.9413 2.17028 13.8347L2.80183 12.5519C2.97323 12.2038 2.97323 11.7958 2.80183 11.4477L2.17028 10.1649C1.49942 8.80233 2.06018 7.15389 3.42276 6.48303C3.52939 6.43053 3.63931 6.385 3.75183 6.34673L5.10543 5.88627C5.4728 5.7613 5.7613 5.4728 5.88627 5.10543L6.34673 3.75183C6.83585 2.31396 8.39799 1.54486 9.83585 2.03398ZM7.76681 4.2349L7.30635 5.5885C7.03142 6.39672 6.39672 7.03142 5.5885 7.30635L4.2349 7.76681C4.18376 7.78421 4.1338 7.80491 4.08533 7.82877C3.46597 8.1337 3.21108 8.88299 3.51602 9.50235L4.14757 10.7851C4.52465 11.551 4.52465 12.4486 4.14757 13.2145L3.51602 14.4972C3.49216 14.5457 3.47146 14.5957 3.45406 14.6468C3.23173 15.3004 3.58133 16.0104 4.2349 16.2328L5.5885 16.6932C6.39672 16.9682 7.03142 17.6029 7.30635 18.4111L7.76681 19.7647C7.78421 19.8158 7.80491 19.8658 7.82877 19.9142C8.1337 20.5336 8.88299 20.7885 9.50235 20.4836L10.7851 19.852C11.551 19.4749 12.4486 19.4749 13.2145 19.852L14.4972 20.4836C14.5457 20.5074 14.5957 20.5281 14.6468 20.5455C15.3004 20.7678 16.0104 20.4182 16.2328 19.7647L16.6932 18.4111C16.9682 17.6029 17.6029 16.9682 18.4111 16.6932L19.7647 16.2328C19.8158 16.2154 19.8658 16.1947 19.9142 16.1708C20.5336 15.8659 20.7885 15.1166 20.4836 14.4972L19.852 13.2145C19.4749 12.4486 19.4749 11.551 19.852 10.7851L20.4836 9.50235C20.5074 9.45389 20.5281 9.40392 20.5455 9.35278C20.7678 8.6992 20.4182 7.98914 19.7647 7.76681L18.4111 7.30635C17.6029 7.03142 16.9682 6.39672 16.6932 5.5885L16.2328 4.2349L16.2042 4.15911L16.1708 4.08533L16.1086 3.97352C15.7727 3.4363 15.0779 3.23014 14.4972 3.51602L13.2145 4.14757C12.4486 4.52465 11.551 4.52465 10.7851 4.14757L9.50235 3.51602C9.45389 3.49216 9.40392 3.47146 9.35278 3.45406C8.6992 3.23173 7.98914 3.58133 7.76681 4.2349ZM10.0502 14.3887L15.4695 8.96946C15.7624 8.67657 16.2372 8.67657 16.5301 8.96946C16.7964 9.23573 16.8206 9.65239 16.6027 9.946L16.5301 10.0301L10.5301 16.0301C10.2443 16.316 9.78995 16.3203 9.49875 16.058L9.42362 15.9799L6.92362 12.9799C6.65845 12.6617 6.70144 12.1888 7.01965 11.9236C7.30893 11.6826 7.72607 11.6962 7.99876 11.9397L8.07595 12.0197L10.0502 14.3887L15.4695 8.96946L10.0502 14.3887Z" fill="currentColor"/>
</svg>

  Pharmacy Specialist</div>
   <div className='w-48 lg:w-48 xl:w-96 h-48 lg:h-48 xl:h-96 bg-white shadow-md border-1 rounded-full overflow-hidden'>
    <div className='absolute left-1/2 -translate-x-1/2 bottom-4 lg:bottom-12 bg-secondary text-center text-black py-2 w-full lg:w-auto rounded-full text-xs lg:text-sm  px-8 '>
      I AM OPEN TO WORK
    </div>
   <img src='/mainp.png' className="w-full object-cover object-top h-full"/>
   </div></div>
   
  </div>
  
</div>

</Section>
<Section background="#fff" visible="false">

<div className='w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[50vh] my-12'>
  
<div className='flex-1 flex flex-col items-center justify-center relative'>
  <img className='z-[1] -translate-x-[50px]' src='https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2023/06/09133120/Why-study-Pharmacy-Future-Prospects-Opportunities.png'/>
   <div className='bg-secondary right-[150px] opacity-20 w-full h-full absolute top-0'>
    <div className='absolute -left-full w-full h-full bg-secondary opacity-100'></div>
   </div>
   
  </div>
  <div className='flex-1 flex flex-col items-start justify-center px-4'>
    <h2 className='font-light text-black text-3xl md:text-4xl lg:text-5xl xl:text-5xl '>A Pioneer in <strong className='text-primary'>Pharmacy Training & Certifications</strong></h2>
    <Spacer y={4}> </Spacer>
    <Button href={'/category/pharmacy'} as={Link} size='lg' variant="bordered" color='primary' className='hover:bg-primary hover:text-white'>Explore Pharmacy Courses</Button>

  </div>
  
  
</div>

</Section>

{/* 
<Section id={"enroll"} background="var(--brand-col1)" full={false} blue={true}>
  <Spacer y={12}></Spacer>
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
<Spacer y={12}></Spacer>
</Section> */}

<Section background="#fafafa">

<div className='w-full flex flex-col lg:flex-row items-center justify-between min-h-[unset] lg:min-h-[540px]'>
  <div className='flex-1 pr-0 lg:pr-16'>
    <h2 className='text-yellow-700 font-light my-8 lg:my-0 text-4xl md:text-3xl lg:text-4xl  xl:text-5xl'>Join your <strong className='text-black'>coursemates, classmates & friends</strong> on NemiVerse </h2>
  </div>
  <div className='flex-1 flex flex-row items-center justify-center'>
 <div className='flex-1 mr-2 rounded-xl overflow-hidden hover:-translate-y-4 transition-all'>
  <img className='h-full w-full' src='/t1.jpg'/></div>
  <div className='flex-1 mr-2 rounded-xl overflow-hidden hover:-translate-y-4 transition-all'> <img className='h-full w-full' src='/t2.jpg'/></div>
  <div className='flex-1 mr-2 rounded-xl overflow-hidden hover:-translate-y-4 transition-all'> <img className='h-full w-full' src='/t3.jpg'/> </div>
  
  </div>
  
</div>

</Section>

<Section id={"hiring_partners"} full={false} marginned={true}>

  <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1200px] mx-auto my-12 lg:my-[150px] w-full overflow-hidden'>
    <div className='w-full lg:w-auto flex-1'>
    <h1 className={'font-normal text-left text-5xl text-black'}>Our <span className={" text-primary"}>Placements</span></h1>
  <div className={'text-xs max-w-[800px] w-full mx-auto text-left my-0 lg:my-4 text-gray-500'}><p>Some of the brands where our students secured placements.</p></div>      
    </div>
<div className='flex-1 w-full lg:w-[60%]'>
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

    
  </Marquee></div>
  </div>
</Section>
<Divider></Divider>
<Section id={"media"} full={false} marginned={true}>

<div className={"flex flex-col lg:flex-row items-center justify-center my-12 lg:my-[150px]"}>
<div className='flex-1 text-left'>
<h1 className={'font-normal text-left text-5xl text-black'}>Media <span className={" text-primary"}>Exposure</span></h1>
  <div className={'text-xs max-w-[800px] w-full mx-auto text-left my-4 text-gray-500'}><p>National news channel featuring Nemi for its path breaking work in skill development and job creation sector. As a unique platform, Nemi offers students the opportunity to empower, to socialize, acquire essential skills, network with industry professionals, connect with peers, build valuable skills and stand out in the competitive job market.
</p></div>
</div>
<div className='flex-1 w-full my-6 lg:my-0 lg:w-[50%]'>
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
</Marquee></div>
</div>

</Section>
<Divider></Divider>
<Section id={"media"} full={false} marginned={true}>

<div className={"flex flex-col  items-center justify-center my-12 lg:my-[80px]"}>
<div className='flex-1 text-center'>
<h1 className={'font-normal text-center w-full text-5xl text-black'}>Our Events and <br/><span className={" text-primary"}>captivating moments.</span></h1>
  <div className={'text-xs max-w-[800px] w-full mx-auto text-left my-4 text-gray-500'}><p>
</p></div>
</div>
<div className='flex-1 w-full my-6 lg:my-0 lg:w-[50%]'>
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
</Marquee></div>
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
