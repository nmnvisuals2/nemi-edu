import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Avatar, Button,  CircularProgress,  Divider,  Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, ScrollShadow, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';
import FooterMock from './components/FooterMock';
import HeaderMock from './components/HeaderMock';
import _ from 'lodash';
import {  useCountdown } from "react-countdown-circle-timer";
import DraggableModal from './components/Modal';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useTimer } from 'react-timer-hook';




import { serversupabase, supabase } from '../../utils/supabaseClient';
import { CtoLocal } from '../../utils/DateUtil';
import { X } from 'lucide-react';


const QuestionCard = ({answered, question,onSelect,index }) => {
    
if(question == undefined){
  return <div>Question Undefined </div>

}
    return (
      <div className='font-sans w-full  flex-1 justify-start align-middle items-start flex flex-col text-left '>
        <div className=' rounded-xl w-full p-4 lg:p-8 relative'>
        <h2 className='font-medium text-md text-primary'>Question {index}</h2>    
        <Divider className='my-2'></Divider>
        <h2 className='font-bold text-2xl text-primary'>{question?.title} {process.env.NODE_ENV == "development" ? <>Question ID {question.id}</>:''}</h2>
        <Spacer y={4}></Spacer>
        <div className='w-full flex flex-col'>
        <ScrollShadow className='font-medium text-sm  qcontent overflow-y-auto max-h-[40vh] lg:max-h-[40vh]' dangerouslySetInnerHTML={{__html:question.question}}></ScrollShadow>
        <Spacer y={4}></Spacer>
        <Divider></Divider>
        <Spacer y={4}></Spacer>
      {question && question?.questionimage != undefined ? <img className='max-h-[30vh]' src={question?.questionimage}/>:''}
        <ul className='p-0'>
            {question?.type == "options" ? <>
            <RadioGroup label={question?.label || 'Select the correct option'}
            value={answered?.filter(item=>item.id==question.id)[0]?.value || ''}
            onValueChange={(e)=>{onSelect({id:question.id,value:e})}}
            > 
            {question.options.map((option, index) => (
            <Radio className='flex flex-row items-center justify-start' value={index+1} key={index} >
              
              {option?.popupimage != undefined ? <img src={option?.popupimage} className='w-auto h-[64px] object-contain'/> :<><p className='text-sm'>{option.title}</p> {process.env.NODE_ENV == "development" && option.isCorrect ? <div className='rounded-full w-1 h-1 bg-green-500'></div>:''}</>}
                
             
            </Radio>
          ))}
                </RadioGroup>
          
            
           
           </>:
          <>
          
         
          </>}
          {question?.type == "input" ? <>
          <Spacer y={4}></Spacer>
          <Input value={answered?.filter(item=>item.id==question.id)[0]?.value || ''} onChange={(e)=>{onSelect({id:question.id,value:e.target.value})}} placeholder='Enter your Answer Here' label="Answer"></Input>
          {process.env.NODE_ENV == "development" ?  <>Answer : {question.options.answer}</>:''}
          <Spacer y={4}></Spacer>
          </>
          :''}
        </ul></div></div>
      </div>
    );
  };

const MockTest = ({userDetails,allowed}) => {
 
  const [level, setLevel] = useState(0);
  const [currentQ,setCurrentQ] = useState(0)
  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  const [sideBarActive,setSidebarActive] = useState(!isMobile);
  const [answered,setAnswered] = useState()
  const [miscData,setMiscData] = useState() 
  const[sections,setSections] = useState();
  const [modules,setModules] = useState();
  const [currentSection,setCurrentSection] = useState(0);
const [insindex,setInsIndex] = useState(0);
const [calculatorActive,setCalculatorActive]= useState(false)
const [loading,setLoading] = useState(false)
const [submitModal,setSubmitModal] = useState(false);
const [gamestate,setGameState] = useState(0);
const [questions,setQuestions] = useState();
const [organized,setOrganized] = useState();
const [exists,setExists] = useState(undefined);
const [result,setResult] = useState()
const [testData,setTestData] = useState()
const [config,setConfig] = useState()


const scrollRef = useRef(null);

const handleScroll = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  }
};

function timeDifferenceInSeconds(futureTime) {
  const futureDate = new Date(futureTime);
  const currentDate = new Date();
  
  const differenceInMillis = futureDate - currentDate;
  const differenceInSeconds = Math.floor(differenceInMillis / 1000);
  
  return differenceInSeconds;
}
const t = useMemo(() => timeDifferenceInSeconds(testData?.start_time), [testData?.start_time]);
/* const {remainingTime} = useCountdown({duration:t,key:"fejak",isPlaying:true,colors:"#abc"}) */


const router = useRouter();
async function getQuestions(a) {
  const questionLimit = config?.config?.question_limit && parseInt(config?.config?.question_limit) > 0 
      ? parseInt(config?.config?.question_limit) 
      : 999;

  // Fetch questions with a filter on parent
  const {data, error} = await supabase
      .from('mock_questions')
      .select('*')
      .in('parent', a.map(i => i.module.id))
      .order('seq', { ascending: true });

  if (data) {
      // Randomize questions
      const shuffledQuestions = data.sort(() => 0.5 - Math.random());

      // Limit the number of questions based on the question limit
      const limitedQuestions = shuffledQuestions.slice(0, questionLimit);

      setQuestions(limitedQuestions);

      /* Uncomment if you want to handle the case when no questions are found
      if (limitedQuestions.length == 0) {
          router.push('/404');
      }
      */
  } else {
      // Handle error or redirect to login if needed
      router.push('/login');
  }
}


const addItem = (newItem) => {
  setAnswered((prevItems) => {
    // Check if the item already exists by ID
    const index = _.findIndex(prevItems, { id: newItem.id });

    if (index === -1) {
      // Item doesn't exist, add it
      return Array.isArray(prevItems) ? [...prevItems, newItem]:[ newItem];
    } else {
      // Item exists, update it
      const updatedItems = [...prevItems];
      updatedItems[index] = newItem;
      return updatedItems;
    }



  });
};
useEffect(()=>{
  if(sections && modules && questions){
    
    let questionIndex = 1;
    const r = sections.map(section => ({
      title: section.subject.title,
      child: modules.filter(b=>b.parent_sub == section.id).flatMap(z => 
        questions.filter(question => question.parent === z.module.id).sort((a, b) => a.seq - b.seq).map(lp => ({ id: lp.id, index: questionIndex++ }))
      )
    }));
    
    setOrganized(r)
  }
},[questions,sections,modules])

const addMiscItem = (newItem) => {
  setMiscData((prevItems) => {
    // Check if the item already exists by ID
    const index = _.findIndex(prevItems, { id: newItem.id });

    if (index === -1) {
      // Item doesn't exist, add it
      return Array.isArray(prevItems) ? [...prevItems, newItem]:[ newItem];
    } else {
      
      
      const updatedItems = [...prevItems];
      if(newItem.status == "pending"){
        return updatedItems;
      }
      updatedItems[index] = newItem;
      return updatedItems;
    }



  });
};

const timeDuration =  process.env.NODE_ENV === "development"
? 1500
:  config?.config?.switch_section
    ? config?.config?.timeout
    : sections?.[currentSection]?.time ?? 1800;


    const {
      seconds,
      minutes,
      hours,
      totalSeconds,
      restart,
      isRunning,
    } = useTimer({
      expiryTimestamp: new Date(),
      onExpire: () => handleComplete(),
      autoStart: false,
    });

useEffect(() => {
  if (gamestate === 1) {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeDuration);
    restart(time);
  }
}, [currentSection, gamestate, restart, timeDuration]);

const handleComplete = () => {
  if (currentSection === sections.length - 1) {
    setGameState(2)
    submitScore(answered, miscData);
  } else {
    
    setCurrentSection((prevSection) => prevSection + 1);
    
    setCurrentQ(questions.findIndex(item=>item.id == organized[currentSection+1].child[0].id));

    addMiscItem({id:organized[currentSection+1].child[0].id,status:"pending"})
    
  }
  
};


async function submitScore(a,b){

  if(a == undefined || b == undefined){
    toast.error('Please attemp the test before submit')
    return null
  }

  const r = toast.loading('Submitting Test');
  
  setLoading(true)
  const {data,error} = await supabase.from('ai_guide_submissions').insert({

status:'completed',
report:a,
data:b,
lead_id:userDetails?.uuid
  }).select();
  if(data && data.length != 0){
    toast.success('Submitted Answered')
    setLoading(false)
    setGameState(2)
    router.push(`/free-ai-guide-test/results/${userDetails?.uuid}`)
    toast.remove(r)
    return ;
}
if(error && error.code ==23505){
toast.error('You cannot submit this test again')
setLoading(false)
  toast.remove(r)
return;
}
else{  
  
  toast.success('Unable to Submit')
  setLoading(false)
  toast.remove(r)
  return ;
}
}



/* useEffect(()=>{
if(userDetails != undefined)
{
  getPlays()
}
},[userDetails]) */

useEffect(()=>{
 
   getTestData()
   
    
},[router])

async function getTestData(){

    const {data,error} =await supabase.from('mock_test').select('*').eq('type','ai-guide').single()
    if(data){
        setTestData(data)
        setConfig(data?.config)
        getSections(data.id)
    }
}

async function getSections(a){

  const {data,error} = await supabase.from('mock_groups').select('*,subject(*)').eq('test',a).order('seq',{ascending:true})
if(data){
  
  setSections(data)
 getModules(data)
}
else{
 
  /* router.push('/login') */
}
}


async function getModules(a){

  const {data,error} = await supabase.from('mock_groups').select('*,module(*)').in('parent_sub',a.map(i=>i.id))
if(data){
  
  setModules(data)
 getQuestions(data)
}
else{
 
  /* router.push('/login') */
}
}





  


function clearResponse(id){
  setAnswered(prevItems => _.reject(prevItems, { id }))
}

function openFullscreen() {
  if(process.env.NODE_ENV == "development"){
    return null
  }
  /* Get the documentElement (<html>) to display the page in fullscreen */
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function handleNext(){
  
  const p = _.last(organized).child;
  const t = _.last(p)
  if(t.id != questions[currentQ].id) { 
    const filt = organized[currentSection].child;
    const ind = filt.findIndex(item=>item.id == questions[currentQ].id)
    const next = organized[currentSection].child[ind + 1] ?? null;
    
    if(next != null){
      const questionIndex = questions.findIndex(item=>item.id == next.id)
    setCurrentQ(questionIndex) 
    /* setCurrentID(questions[currentQ+1].id), */
    addMiscItem({id:next.id,status:"pending"})
  
  
  }else{

    const isLast = _.isEqual(_.last(filt), _.find(filt, { id: questions[currentQ].id }));
  
    if(isLast && config?.config?.switch_section == false){
      toast.error('You have reached end of questions in this section , please change to previous question from menu or wait for next section')
      return null
    }
    (isLast ? (setCurrentSection(res=>res+1),setCurrentQ(questions.findIndex(item=>item.id == organized[currentSection+1].child[0].id)),
    addMiscItem({id:organized[currentSection+1].child[0].id,status:"pending"})):toast.error('invalid'))
  }

    
  
  }
  else{ 
    toast.error('You have reached end of questions, click on submit if you have finished your test') 
  }
}
/* const scrollButtonRef = useRef(null);

  const handleScroller = (direction) => {
    if (scrollButtonRef.current) {
      const scrollAmount = 100;
      const currentScroll = scrollButtonRef.current.scrollTop;
      const maxScroll = scrollButtonRef.current.scrollHeight - scrollButtonRef.current.clientHeight;

      if (direction === 'up' && currentScroll > 0) {
        scrollButtonRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      } else if (direction === 'down' && currentScroll < maxScroll) {
        scrollButtonRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
    }
  }; */
function handlePrev(){
  
  const p = _.first(organized).child;
  const t = _.first(p)
  if(t.id != questions[currentQ].id) { 
    const filt = organized[currentSection].child;
    const ind = filt.findIndex(item=>item.id == questions[currentQ].id)
    const prev = organized[currentSection].child[ind - 1] ?? null;
    
    if(prev != null){
      const questionIndex = questions.findIndex(item=>item.id == prev.id)
    setCurrentQ(questionIndex) ,
    
    addMiscItem({id:prev.id,status:"pending"})
  
  
  }else{

    const isFirst = _.isEqual(_.first(filt), _.find(filt, { id: questions[currentQ].id }));
    
    (isFirst ? (setCurrentSection(res=>res-1),setCurrentQ(questions.findIndex(item=>item.id == organized[currentSection-1].child[0].id))):toast.error('invalid'))
  }

    
  
  }
  else{ 
    toast.error('Cannot go beyond first question') 
  }
}
function convertSeconds(totalSeconds) {
  // Ensure the input is a positive integer
  totalSeconds = _.toInteger(totalSeconds);
  
  // Calculate hours, minutes and seconds
  const hours = _.floor(totalSeconds / 3600);
  const minutes = _.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Add zero padding
  const paddedHours = _.padStart(hours, 2, '0');
  const paddedMinutes = _.padStart(minutes, 2, '0');
  const paddedSeconds = _.padStart(seconds, 2, '0');

  return `${paddedHours} : ${paddedMinutes} : ${paddedSeconds}`
}

useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (gamestate == 1) {
        event.preventDefault();
        event.returnValue = 'Your Test is in Progress , Are you sure want to unload?'; // Display a custom message here if needed
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [gamestate]);

function isExpired(a){

  const current = new Date();
  const end = new Date(a);

  return current > end
}
 
function getStatus(a){

  if(answered?.some(item=>item.id == a.id) && miscData?.filter(item=>item.status == "review").some(item=>item.id == a.id)){
    return " aspect-square text-white w-12 flex flex-col items-center justify-center rounded-md"
  }

  if(answered?.some(item=>item.id == a.id)){
    return " aspect-square text-white w-12 flex flex-col items-center justify-center rounded-md"
  }
  if(miscData?.filter(item=>item.status == "review").some(item=>item.id == a.id)){
    return "aspect-square text-white w-12 flex flex-col items-center justify-center rounded-md"
  }
  if(miscData?.some(item=>item.id == a.id)){
    return " aspect-square text-white w-12 flex flex-col items-center justify-center rounded-md bg-transparent"
  }
  return " border-1 text-black border-gray-400 aspect-square w-12 flex flex-col items-center justify-center rounded-md from-white to-gray-200 bg-gradient-to-b"
}
function getStatusIcon(a){

  if(answered?.some(item=>item.id == a.id) && miscData?.filter(item=>item.status == "review").some(item=>item.id == a.id)){
    return <img className=' z-0 absolute left-0 top-0 w-full h-full object-contain' src='/amr.svg'/>
  }

  if(answered?.some(item=>item.id == a.id)){
    return <img className=' z-0 absolute left-0 top-0 w-full h-full object-contain' src='/sc.svg'/>
  }
  if(miscData?.filter(item=>item.status == "review")?.some(item=>item.id == a.id)){
    return <img className=' z-0 absolute left-0 top-0 w-full h-full object-contain' src='/mr.svg'/>
  }
  if(miscData?.some(item=>item.id == a.id)){
    return <img className=' -z-[10] absolute left-0 top-0 w-full h-full object-contain' src='/na.svg'/>
  }
  return ''
}




if(questions == undefined && questions?.length < 1  ){
  return <div className='flex flex-col relative  justify-center align-middle items-center text-center font-sans h-screen w-full'>Loading...</div>
}


if(allowed ==false){
    return <div className='w-full h-full fixed z-[9999] bg-white left-0 top-0 flex flex-col items-center justify-center'>

        <h2 className='flex flex-row items-center justify-center text-red-500'>
            <X></X>
            You cannot attempt this test again!</h2>
    </div>
}

  return (<div className='w-full relative font-sans h-screen p-0 justify-center align-middle items-center overflow-hidden max-h-[100vh] flex flex-col bg-gray-200'>
    
    {/* <div className='fixed flex flex-col left-0 top-0 w-full h-full z-50 bg-white md:hidden justify-center items-center text-xs text-center'>
      For Best Experience Please use any device with bigger screen.<br/> This test cannot be performed on mobile display.
      
    </div> */}
<Modal isOpen={submitModal} onClose={()=>{setSubmitModal(false)}}>
  <ModalContent>
    <ModalHeader>Are you sure you want to submit test?</ModalHeader>
    <ModalBody>
      You have answered {answered?.length ?? 0} questions out of total {questions?.length} questions
    </ModalBody>
    <ModalFooter className='flex flex-row justify-start'>
    <Button color='danger' size='sm' onPress={()=>{setSubmitModal(false)}}>Cancel</Button>
      <Button size='sm' color='default' className='from-primary border-1 border-white shadow-md shadow-primary-400 to-primary-600 bg-gradient-to-r text-white'  onPress={()=>{submitScore(answered,miscData),setSubmitModal(false)}}>Confirm</Button>
      
    </ModalFooter>
  </ModalContent>
</Modal>
    <DraggableModal handleModal={()=>setCalculatorActive(false)} closeable={false} open={calculatorActive}>
      {config?.config?.is_scientific ? <iframe
      src='https://ipmkanpur.tcyonline.com/onlinefiles/scientific_calculator/GATECalculator.htm#nogo'
      className='w-full h-full p-1 overflow-hidden' 
      ></iframe>:<iframe
      src='https://chamoda.com/react-calculator/'
      className='w-full mx-auto h-full rounded-2xl shadow-lg p-1 overflow-hidden' 
      ></iframe>}
    </DraggableModal>
    <div className='bg-white shadow-md w-full flex-nowrap flex-1 flex flex-col overflow-hidden'>
    
     <HeaderMock key={config?.title} calc={config?.config?.calculator_allowed ?? false} remainingTime={totalSeconds} openCalculator={()=>{setCalculatorActive(true)}} state={gamestate} userData={userDetails} title={config?.title} timeOut={config?.config?.timeout || 1800}></HeaderMock>
     <div className='flex-1 p-0 flex flex-row justify-start items-start flex-nowrap overflow-hidden'>
      <div className='flex flex-col items-start justify-start h-full flex-1 relative overflow-hidden'>

{gamestate ===1 ? 
  <div className=' flex-col w-full px-6 py-2 hidden md:flex'>
  <div>Sections</div>
  <Divider></Divider>
  <div className='w-full h-auto relative'>
  <ScrollShadow ref={scrollRef} orientation="horizontal"  className='flex w-full flex-row flex-shrink-0 flex-nowrap overflow-x-auto scrollbar-hide'>
  {organized && organized.map((i,d)=>{
    return <div onClick={()=>{config?.config?.switch_section ?? false ?  (setCurrentSection(d),setCurrentQ(questions.findIndex(item=>item.id == i.child[0].id))):toast.error('You cannot switch sections in this test')}} className={'text-sm mx-1 my-1 px-4 py-2 rounded-xl bg-gray-50 cursor-pointer hover:border-primary border-transparent border-1 shadow-md flex-shrink-0 '+ (currentSection == d?  'bg-primary text-white ':'')}>{i.title}</div>
  })}</ScrollShadow>
  <Button onPress={()=>{handleScroll()}} isIconOnly color='primary' size='sm' className='right-0 border-1 flex md:hidden border-white absolute top-1/2 -translate-y-1/2'>
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z" fill="#fff"/></svg>
  </Button>
  </div>
  </div> 
:''}

        <div className='flex flex-col flex-1 overflow-hidden w-full md:pb-0 pb-12' >

       
       

     {gamestate == 0 ? <div className='p-6'>
      {insindex == 0 ? <>
     <h2 className='font-bold text-xl text-primary'>Instructions</h2>
     <div className='text-xs font-sans overflow-y-auto max-h-[70vh]' dangerouslySetInnerHTML={{__html:config?.instructions}}></div></>:''}
     {insindex == 1 ? <>
        <h2 className='font-bold text-xl text-primary'>Instructions</h2>
      <div className='text-xs font-sans overflow-y-auto max-h-[70vh]' dangerouslySetInnerHTML={{__html:config?.instructions2}}></div>
     </>:""}
     </div>:''}     
     {gamestate == 1 ? <>
      
    
      
     
      
        <ScrollShadow className='w-full flex flex-col h-full justify-start align-start items-start overflow-y-auto'>
         
          
          
          

          <QuestionCard index={questions[currentQ]?.seq} onSelect={(e)=>addItem({...e,at:timeDuration - totalSeconds})} answered={answered}  key={'nemi'+currentQ}  question={questions[currentQ]}  />

        </ScrollShadow>
      

      
</>:''}

{gamestate == 2 ? <><div className='w-full h-full text-center flex flex-col justify-center align-middle items-center'>

<h2 className='text-2xl text-center text-primary px-6 w-full'>Your Responses have been submitted and now you are being redirected to Dashboard. Results will be available soon.</h2>

</div>
</>:''}


</div>


<div className=' bg-gradient-to-t opacity-40 md:opacity-100 from-primary to-primary-700 p-1 py-4 absolute right-0 top-1/2 -translate-y-1/2 rounded-l-xl cursor-pointer' onClick={()=>{setSidebarActive(!sideBarActive)}}>
<svg width="24" height="24" fill="none" className={ " transition-all "+ (sideBarActive ? 'rotate-180':'')} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" fill="#fff"/></svg>
</div>
{gamestate < 2? 
<FooterMock config={config?.config} isLoading={loading}  index={insindex} onInstruct={(e)=>{setInsIndex(e)}} onStart={()=>{setGameState(1),setCurrentQ(questions.findIndex(item=>item.id == organized[0]?.child[0]?.id)),addMiscItem({id:organized[0]?.child[0]?.id,status:"pending"}),openFullscreen()}} state={gamestate} onNext={()=>{handleNext()}} onPrev={()=>{handlePrev()}} onReview={()=>{addMiscItem({id:questions[currentQ].id,status:'review'}),toast.success('Marked for Review') }} onClear={()=>{clearResponse(questions[currentQ].id)}}
onSubmit={()=>{answered?.length > 0 ? setSubmitModal(true):toast.error('Please attempt at least 1 question to submit the test')}}
onSaveNext={()=>{}}></FooterMock>:''}

</div>
<div className={'flex h-full flex-col w-full max-w-0 bg-white shadow-[-2px_-2px_12px_-6px_#6663] transition-all z-[20] ease-in-out duration-100 translate-x-full fixed right-0 top-0  lg:relative  lg:translate-x-0 ' + (sideBarActive ? ' !max-w-[400px] !translate-x-0':'') }>

  <div className='bg-primary w-auto h-auto bottom-8 lg:hidden flex  absolute p-2 rounded-r-xl' onClick={()=>{setSidebarActive(false)}}
  >
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z" fill="#fff"/></svg>
  </div>
<div className={'w-full flex-col hidden ' + (sideBarActive ? ' !flex ':'')}>

{gamestate ==0 ? 
<div className='p-4'>
<div className='p-4 rounded-xl border-1 border-gray-200 flex flex-row'>
  <Avatar src={userDetails?.user_metadata?.profile_pic || ''}  className='w-32 h-32'></Avatar>
  <div className='flex flex-col p-2 px-4'>
    <h2 className='text-xl font-bold text-primary'>{userDetails?.name}</h2>
  </div>
  </div></div>
:''}

{gamestate == 1 ? <>
<div className='p-4 font-sans flex flex-row flex-wrap text-xs w-full'>
  <div className=' w-1/2 flex-row flex items-center justify-start p-1'>
  <div className='w-8 h-8 relative'><img className='w-full h-full object-contain z-0' src='/sc.svg'/>
    <div className='absolute left-0 top-0 w-full h-full flex flex-col z-10 justify-center items-center mt-[1px]'>
    <p className='text-white flex text-center'>{answered?.length || 0}</p></div>
    </div>
    <Spacer x={2} y={2}></Spacer>
    <p>Answered</p>
  </div>
  <div className=' w-1/2 flex-row flex items-center justify-start p-1'>
  <div className='w-8 h-8 relative'><img className='w-full h-full object-contain z-0' src='/na.svg'/>
    <div className='absolute left-0 top-0 w-full h-full flex flex-col z-10 justify-center items-center mt-[1px]'>
    <p className='text-white flex text-center'>{(miscData?.length || 0) - (answered?.length || 0)}</p></div>
    </div>
    <Spacer x={2} y={2}></Spacer>
    <p>Not Answered</p>
  </div>
  <div className=' w-1/2 flex-row flex items-center justify-start p-1'>
  <div className='w-8 h-8 relative'><div className='w-8 h-8 object-contain border-1 text-black border-gray-400 aspect-square flex flex-col items-center justify-center rounded-md from-white to-gray-200 bg-gradient-to-b' />
    <div className='absolute left-0 top-0 w-full h-full flex flex-col z-10 justify-center items-center mt-[1px]'>
    <p className='text-black flex text-center'>{questions?.length - (miscData?.length || 0)}</p></div>
    </div>
  
    <Spacer x={2} y={2}></Spacer>
    <p>Not Visited</p>
  </div>
  <div className=' w-1/2 flex-row flex items-center justify-start p-1'>
  <div className='w-8 h-8 relative'><img className='w-full h-full object-contain z-0' src='/mr.svg'/>
    <div className='absolute left-0 top-0 w-full h-full flex flex-col z-10 justify-center items-center mt-[1px]'>
    <p className='text-white flex text-center'>{miscData?.filter(item=>item.status =="review")?.length || 0}</p></div>
    </div>
    <Spacer x={2} y={2}></Spacer>
    <p>Marked for Review</p>
  </div>
  <div className=' w-full flex-row flex items-center justify-start p-1 relative'>
    <div className='w-8 h-8 relative'><img className='w-full h-full object-contain z-0' src='/amr.svg'/>
    <div className='absolute left-0 top-0 w-full h-full flex flex-col z-10 justify-center items-center mt-[1px]'>
    <p className='text-white flex text-center'>{miscData?.filter(item1 => answered?.map(item2 => item2.id).includes(item1.id))?.length||0}</p></div>
    </div>
    <Spacer x={2} y={2}></Spacer>
    <p>Answered & Marked for Review</p>
  </div>
</div>
<div className='bg-primary text-xs px-6 p-4 text-white'>
  {organized[currentSection]?.title}
</div>
<div className='p-4 bg-primary-50'>
  
{config?.config?.switch_questions == true ?<h2>Choose a Question</h2>:''}
<div className='flex flex-row relative items-center justify-start flex-wrap'>
  {organized && organized[currentSection]?.child.map((i,d)=>{
    return <div className='p-1 relative group' onClick={()=>{config?.config?.switch_questions ?? false ?  (setCurrentQ(questions.findIndex(item=>item.id == i.id)),addMiscItem({id:i.id,status:"pending"})) :toast.error('You cannot switch question in this test.') }}>
      <div className='absolute left-0 top-0 opacity-0 group-hover:opacity-100 w-full h-full transition-all group-hover:scale-95 scale-75 z-[1] border-1 border-secondary-400 rounded-md'></div>
      <div className={'p-1 z-10 cursor-pointer flex flex-col items-center justify-center relative font-sans ' + getStatus(i) }>
        <p className='z-10  mt-[4px]'>{d+1}</p>
    {getStatusIcon(i)}
    </div></div> 
  })}
</div></div></>:''}


</div>
</div>
</div>
</div>
      
    </div> 
   
  );
};


export default MockTest;

export async function getServerSideProps(context) {
    // Extract UUID from context
    const { uuid } = context.query;
  
    // Run both queries in parallel using Promise.all
    const [leadResult, submissionResult] = await Promise.all([
      serversupabase.from('leads').select('*').eq('uuid', uuid).single(),
      serversupabase.from('ai_guide_submissions').select('*').eq('lead_id', uuid).single()
    ]);
  
    const { data: leadData, error: leadError } = leadResult;
    const { data: submissionData, error: submissionError } = submissionResult;
  
    // Log any errors (optional)
    console.log(leadData, leadError, submissionData, submissionError);
  
    // Handle the case where there is an error or no lead data found
    if (leadError || !leadData) {
      return { notFound: true };
    }
  
    // Determine the allowed status based on the submission query
    const allowed = submissionData != undefined ? false : true;
  
    // Return props with lead data and allowed status
    return {
      props: {
        userDetails: leadData,
        allowed,
      },
    };
  }
  

