import styles from './Courses.module.css'
import { supabase } from '../../utils/supabaseClient';
import DefaultLayout from '../../layout/DefaultLayout';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import st from '../../styles/Home.module.css'
import { toast } from 'react-hot-toast';
import { Avatar, AvatarGroup, Button, Calendar, Chip, Input, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import {today, getLocalTimeZone,isWeekend} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import FeatureRenderer from '../../components/Featrues';

function CourseSingle({data}){

const c = data;
const [loading,setLoading] = useState(false)
const [formData,setFormData] = useState()
const[isSubmitted,setSubmitted] = useState(false)
const isMobile = useMediaQuery({query:"(max-width: 968px)"})
const isTablet = useMediaQuery({query:"(max-width: 1024px)"})

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

    const router = useRouter()

    const handleDownload = async (fileUrl) => {
     
      setLoading(true);
      
      try {
        // Make a request to the Next.js API route
        const response = await fetch(`/api/download?url=${encodeURIComponent(fileUrl)}`);
  
        if (!response.ok) {
          throw new Error('Failed to fetch the file');
        }
  
        // Extract the filename from the Content-Disposition header
        const disposition = response.headers.get('content-disposition');
        let filename = 'downloaded_file';
  
        if (disposition && disposition.includes('filename=')) {
          filename = disposition
            .split('filename=')[1]
            .split(';')[0]
            .replace(/['"]/g, '');  // Extract filename and remove quotes
        } else {
          // Fallback to extracting from URL
          filename = fileUrl.split('/').pop();
        }
  
        // Create a blob from the response data
        const blob = await response.blob();
  
        // Create a URL for the blob and initiate a download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;  // Use the extracted filename
        document.body.appendChild(a);
        a.click();
        a.remove();
        
        // Revoke the object URL after download
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Download failed:', error);
      } finally {
        setLoading(false);
      }
    };
    function formatNumberToIndianSystem(number) {
      const numStr = number.toString().split('.');
      let lastThree = numStr[0].slice(-3);
      const otherNumbers = numStr[0].slice(0, -3);
      if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
      }
      const formattedNumber =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    
      return numStr.length > 1 ? formattedNumber + '.' + numStr[1] : formattedNumber;
    }
    let {locale} = useLocale();

async function submitForm(a){

  const {error} = await supabase.from('leads').insert({...a,course_id:c.id,type:'FREE Consultation',source:c?.title})

  if(!error){
    setSubmitted(true)
    toast.success('Submitted Successfully')
  }
  if(error){
    toast.error('Unable to Submit , Please try again later.')
  }
}
    return(
        <DefaultLayout>

<NextSeo
      title={c?.metatitle ?? c?.title}
      description={c?.metadescription ?? c?.description}
      canonical={process.env.NEXT_PUBLIC_DOMAIN + '/courses/' + c?.slug}
      openGraph={{
        url: process.env.NEXT_PUBLIC_DOMAIN + '/courses/' + c?.slug,
        title: c?.metatitle ?? c.title,
        description: c?.metadescription ?? c?.description,
        images: [
          {
            url: c?.img,
            width: 800,
            height: 600,
            alt: c?.title,
            type: 'image/webp',
          },
          
        
        ],
        siteName: 'NEMI EDU',
      }}
      twitter={{
        handle: '@nemiedu',
        site: '@nemiedu',
        cardType: 'summary_large_image',
      }}
    />
          
            <Spacer y={isMobile? 6:12}></Spacer>
            <div className={"flex flex-col  items-center justify-center px-4 lg:px-0  max-w-[1128px] mx-auto"}>

<div className=' max-h-[70vh] aspect-video w-full relative rounded-[10px] sm:rounded-[30px] overflow-hidden flex flex-col items-start justify-end flex-1'>
<motion.img
initial={{scale:1.05,opacity:0}}
exit={{scale:1.05,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:0.6,type:"tween",ease:"easeInOut"}}
src={c.img} className='w-full absolute left-0 bottom-0  h-full object-cover'/>
<div className='w-full h-[70%] from-[#000] to-transparent bg-gradient-to-t z-[1] absolute left-0 bottom-0'></div>
<div className='z-[2] relative p-4 md:p-8 left-0 bottom-0 flex flex-row items-end justify-between w-full'>
<div className='hidden sm:flex flex-col justify-start items-start flex-1'>
  <div className='relative overflow-hidden'>
<motion.h2
initial={{y:50,opacity:0}}
exit={{y:-50,opacity:0}}
animate={{y:0,opacity:1}}
key={"heading"}
transition={{bounce:0.4,duration:0.4,type:"spring"}}
className='font-medium flex-1 text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-white w-full text-left'>{c.title}</motion.h2></div>
<p className='text-gray-300 hidden lg:block text-xs'>{c.description}</p>
</div>
<Spacer x={8}></Spacer>
<div className='flex-0 flex flex-col items-start md:items-end justify-center'>
<Button endContent={<svg className='ml-2' width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#000"/></svg>} as={Link} href={`https://app.nemiedu.com/checkout/${c.slug}`} target="_blank" 
className='bg-white rounded-full text-xs md:text-sm px-4 md:px-8 py-4 md:py-6 uppercase font-medium' >Enroll Now</Button>
<div className='flex flex-row items-center justify-center text-xs text-white pt-2'>

                         {c.ratings} Star{c.ratings > 1 ? 's':''}<Spacer x={1}></Spacer>
{Array(5).fill().map((p,b)=>{
                            return <svg width="12" className="relative" height="12" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <mask id="xMask">
    
    <rect x="0" y="0" width={(parseFloat(c?.ratings) - Math.floor(parseFloat(c?.ratings)))*24 } height="200" fill="white" />
  </mask>
                                <path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z" fill={b + 1 <= Math.floor(parseFloat(c?.ratings)) ? "#F39C19":"#e2e2e2"}/>
                                {b + 1 > Math.floor(parseFloat(c?.ratings)) && b < Math.ceil(parseFloat(c?.ratings)) ? <path
                                mask="url(#xMask)"
                                d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z" fill={'#F39C19'}/>:''}
                            </svg>
                        })}
                        </div>
</div>
</div>
</div>
<Spacer y={6}></Spacer>
<div className='flex flex-row flex-wrap font-medium text-sm items-center justify-start w-full'>
  Home {">"} <Link className='mx-2 text-primary hover:text-secondary' href={'/course/'}>Courses</Link> {">"} <Link className='mx-2 text-primary hover:text-secondary' href={`/course/?pc=${c?.category?.parent?.slug}`}>{c?.category?.parent?.title}</Link>  {">"}  <Link className='mx-2 text-primary hover:text-secondary' href={`/course/?sc=${c?.category?.slug}`}>{c?.category?.title}</Link>
</div>
<Spacer y={6}></Spacer>
<div className='sm:hidden flex flex-col justify-start items-start w-full'>
<h2 className=' flex-1 text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-black gradtext font-semibold w-full text-left'>{c.title}</h2>
<p className='text-black text-sm mt-3'>{c.description}</p>
</div>
<Spacer y={6}></Spacer>
<FeatureRenderer features={c?.features ?? []}></FeatureRenderer>
<Spacer y={6}></Spacer>
<div className='flex flex-col-reverse md:flex-row items-start justify-between w-full mb-4'>

  <div className='flex-1 w-full md:w-auto'>
    {c?.course_content && c?.course_content?.length > 0 ? <>
    <h2 className='gradtext text-3xl font-semibold'>Course Content</h2>
    <Spacer y={4}></Spacer>
    <div className='w-full relative flex flex-col items-start justify-start overflow-hidden rounded-xl'>
   {c?.course_content?.length > 2?    <div className='absolute left-0 bottom-0 from-[#000a] to-transparent bg-gradient-to-t w-full h-[40%] z-[1]  backdrop-blur-[2px] flex flex-col items-center justify-center'>
<Button size='lg' endContent={<svg className='group-hover:ml-2 transition-all' width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823Z" fill="currentColor"/></svg>} className='rounded-full bg-gradient-to-r from-primary to-primary-400 text-white border-1 border-white shadow-primary-300 shadow-md group'>Enroll Now</Button>

      </div>:''}
      {c?.course_content && c?.course_content?.map((i,d)=>{
        return <div className='text-sm w-full bg-white flex flex-row items-center justify-start shadow-sm rounded-md border-1 border-gray-50 mb-2 px-4 py-3'>
          <div className='flex flex-row items-center justify-start'>
          <svg width="20" height="20" className='mr-2' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z" fill="currentColor"/></svg>
          <h2>{i.title}</h2>
          </div>
          <div className='flex flex-row items-center justify-end flex-1'>
            <Button as={Link} isDisabled={d > 0} target="_blank" href={`https://app.nemiedu.com/checkout/${c?.slug}`} size='sm' color='secondary' className='text-black' endContent={<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.001a4 4 0 0 1 3.771 2.666 1 1 0 0 1-1.84.774l-.045-.107a2 2 0 0 0-3.88.517L10.002 6v1.999h7.749a2.25 2.25 0 0 1 2.245 2.097l.005.154v9.496a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25A2.25 2.25 0 0 1 4.005 19.9L4 19.746V10.25a2.25 2.25 0 0 1 2.096-2.245L6.25 8l1.751-.001v-2A3.999 3.999 0 0 1 12 2.002Zm0 11.498a1.499 1.499 0 1 0 0 2.998 1.499 1.499 0 0 0 0-2.998Z" fill="currentColor"/></svg>}>Unlock</Button>
          </div>
          </div>
      })}
    </div></>:''}
    <Spacer y={4}></Spacer>
<h2 className='font-sans text-3xl gradtext w-full font-bold'>Book a FREE Consultation</h2>


<Spacer y={4}></Spacer>
<div className='w-full rounded-xl from-primary to-primary-400 relative bg-gradient-to-r overflow-hidden p-4 px-4 flex flex-col lg:flex-row items-start justify-between'>
  <motion.div
  initial={{y:'100%',opacity:0}}
  exit={{y:'-100%',opacity:0}}
  animate={{y:isSubmitted? 0:'100%',opacity:isSubmitted ? 1 : 0}}
  transition={{type:"tween",ease:[.65,0,0,.99],duration:0.8}}
  className={' absolute left-0 top-0 w-full h-full bg-gray-50 z-[999] flex flex-col text-center justify-center items-center ' + (isSubmitted ?  '':' pointer-events-none')}>
  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-1.25 9.94 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073 1.97 1.97 4.47-4.47-4.47 4.47Z" fill="#2ECC70"/></svg>
    <h2 className='text-xl gradtext font-medium'>Thank you !! Your Request has been submitted</h2>
    <p className='text-sm'>Our team will get back to you shortly.</p>
  </motion.div>
    <Calendar /* defaultValue={today(getLocalTimeZone())} */
     className='flex-shrink-0'
    isDateUnavailable={(e)=>{return isWeekend(e, locale)}}
      minValue={today(getLocalTimeZone())}
      
      value={formData?.date} 
      onChange={(e)=>{setFormData(res=>({...res,message:e.toString()}))}}></Calendar>
      <Spacer x={4}></Spacer>
      <div className='w-full flex flex-col items-start justify-start'>
        <Input value={formData?.name} labelPlacement="inside" placeholder='Enter your Full Name' className='mb-2' classNames={{inputWrapper:"bg-white shadow-sm"}} label="Full Name" type='text' onChange={(e)=>{setFormData(res=>({...res,name:e.target.value}))}}></Input>
        <Input value={formData?.phone} labelPlacement="inside" placeholder='Enter your Phone Number' className='mb-2' classNames={{inputWrapper:"bg-white shadow-sm"}} label="Phone Number" type='number' maxLength={10} validate={(e)=>{return e?.length < 11}} onChange={(e)=>{setFormData(res=>({...res,phone:e.target.value}))}}></Input>
        <Input value={formData?.email} labelPlacement="inside" placeholder='Enter your Email Address' className='mb-2' classNames={{inputWrapper:"bg-white shadow-sm"}} label="Email Address" type='email'  onChange={(e)=>{setFormData(res=>({...res,email:e.target.value}))}}></Input>
        <Input value={formData?.city} labelPlacement="inside" placeholder='Enter your City' className='mb-2' classNames={{inputWrapper:"bg-white shadow-sm"}} label="City" type='text'  onChange={(e)=>{setFormData(res=>({...res,city:e.target.value}))}}></Input>
        <Button color='secondary' className='text-black' onPress={()=>{submitForm(formData)}}>Book Free Consultation</Button>
        
      </div>
      </div>
  </div>
  <Spacer x={6} y={6}></Spacer>
  <div className='max-w-[unset] md:max-w-[400px] w-full md:w-auto'>
    <div className='w-full rounded-xl p-4 bg-white shadow-[4px_4px_22px_-6px_#ddd]'>

   <div className='flex flex-row items-center px-4 py-4 text-center justify-start rounded-xl shadow-[4px_4px_22px_-6px_#ddd] my-2 text-4xl'>{c.salePrice && c.salePrice < c.price ? (
            <div className="mt-1 flex flex-row w-full justify-center items-center">
             
              <span className="text-3xl gradtext font-bold">₹{formatNumberToIndianSystem(c.salePrice)}</span>
              <span className=" line-through text-gray-400 text-xs ml-1">
              ₹{formatNumberToIndianSystem(c.price)}
              </span>
            </div>
          ) : (
            <span className="text-3xl gradtext font-bold">₹{formatNumberToIndianSystem(c.salePrice)}</span>
          )}</div> 

      <div className='shadow-[4px_4px_22px_-2px_#ddd] flex flex-row items-center rounded-xl p-2 text-md'>
      <svg className='mr-3' width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5ZM21 8.5v3.522A6.5 6.5 0 0 0 12.022 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5h18Z" fill="currentColor"/><path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5.5 0h2a.5.5 0 1 1 0 1H17a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v2.5Z" fill="currentColor"/></svg>
        Duration : {c?.duration} days</div>

    </div>
<Spacer y={4}></Spacer>
    {c?.brochure ? 
<Button isLoading={loading} onPress={()=>{handleDownload(c?.brochure)}} fullWidth className='py-6 px-12 rounded-lg from-lime-500 to-lime-600 text-white bg-gradient-to-r' endContent={<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#ffffff"/></svg>}>Download Free Brochure </Button>:''}

<AvatarGroup className='my-4 mx-auto' isBordered renderCount={(count) => (
        <p className="text-small text-wrap flex-1 text-gray-800 font-normal ml-4">1000+ placements</p>
      )} size="lg" >
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im1.jpg" />
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im2.jpg" />
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im3.jpg" />
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im4.jpg" />
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im5.jpg" />
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im1.jpg" />
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im1.jpg" />
      <Avatar classNames={{base:(isMobile ? "w-8 h-8" : isTablet ? "w-8 h-8" : "w-12 h-12")}} src="/im1.jpg" />
    </AvatarGroup>   
    
  </div>
</div>


<Spacer y={4}></Spacer>
        </div>


        </DefaultLayout>
        )
}





export default CourseSingle;


export async function getServerSideProps(context){



  

   const {data,error} = await supabase
    .from('courses')
    .select('*,category(*,parent(*)),course_content(*)')
    .eq('slug',context.query.slug).eq('isActive',true).order('seq',{ascending:true,referencedTable:"course_content"})
if(error || data?.length ==0){
  return {notFound:true}
}

  return {props:{data:data[0]}}
}


