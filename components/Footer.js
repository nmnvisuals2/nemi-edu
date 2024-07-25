import { useState } from 'react';
import styles from './Footer.module.css'
import Link from 'next/link';
function Footer(props){

const [email,setEmail] = useState()
  



const items = [
    {
        title:'NEMI Head Office',
        icon:<svg id="Capa_1" x="0px" y="0px" width="395.71px" height="395.71px" viewBox="0 0 395.71 395.71" fill="var(--brand-col1)">
        <g>
            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
        </g>
        
        </svg>,
        content:<span>5/22 Vikas Khand, Gomti Nagar, Lucknow-226010</span>,

    },
    {
        title:'Camp Office 1',
        icon:<svg id="Capa_1" x="0px" y="0px" width="395.71px" height="395.71px" viewBox="0 0 395.71 395.71" fill="var(--brand-col1)">
        <g>
            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
        </g>
        
        </svg>,
        content:<span>Dr. APJ Abdul Kalam Technical University Fourth Floor Innovation Hub,Lucknow ,UttarPradesh-226021</span>,

    },
    {
        title:'Camp Office 2',
        icon:<svg id="Capa_1" x="0px" y="0px" width="395.71px" height="395.71px" viewBox="0 0 395.71 395.71" fill="var(--brand-col1)">
        <g>
            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
        </g>
        
        </svg>,
        content:<span>4th Floor LRC, IIT Indore, Khandwa Road, Simrol, Indore, Madhya Pradesh 453553</span>,

    },
    {
        title:'Contact',
        icon:<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.772 2.439 1.076-.344c1.01-.322 2.087.199 2.52 1.217l.859 2.028c.374.883.167 1.922-.514 2.568L9.819 9.706c.116 1.076.478 2.135 1.084 3.177a8.678 8.678 0 0 0 2.271 2.595l2.275-.76c.863-.287 1.802.044 2.33.821l1.233 1.81c.615.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.977 1.114-3.052.778-2.539-.792-4.873-3.143-7.003-7.053-2.133-3.916-2.886-7.24-2.258-9.968.264-1.148 1.081-2.063 2.149-2.404Z" fill="var(--brand-col1)"/></svg>,
        content:<a href="tel:+917460002675">7460002675 </a>,

    },
    {
        title:'Email',
        icon:<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5-13.5Z" fill="var(--brand-col1)"/></svg> ,
        content:<a href="mailto:team@nemiedu.com">team@nemiedu.com</a>,

    }
]

    return(

        <footer className={styles.footer}>
<div className={' flex flex-row p-0 bg-gray-50'}>
{/* <img src='/ytb.svg' className={styles.ytb}/>
<img src='/bbb.svg' className={styles.bbb}/> */}
<div className='max-w-[1128px] mx-auto w-full py-8'>
    
    <div className={styles.btt + " hidden lg:flex"}><div className={styles.inner_btt}><img onClick={()=>{ window.scrollTo({top: 0, left: 0, behavior: 'smooth' });}} src='/bta.svg'/></div></div>

    <div className={styles.sec1}>
{/* <h2>Explore<span className={styles.bro}>.</span></h2> */}
                {/* <ul className={styles.navlist}>
                <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(1)}}>Diploma Courses</a></li>
                <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(0)}}>Certification Courses</a></li>
                    <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(2)}}>University Tie-Up Programs</a></li>
                    </ul>  */}                                                                                                                                                                     
    </div>
  
    <div className={styles.sec3}>

<ul className={styles.main_nav}>
{items && items.map((i,d)=>{
    return <li className='flex flex-row !items-center !justify-start'>{i.icon}<p className='text-xs'><strong>{i.title}</strong>:<br/>{i.content}</p></li>
})}

{/* <li> <a onClick={e=>props.handleModal(true)} >Roadmap</a></li> */}

<div className='flex flex-row items-center flex-wrap'>
<li><h6 className=' !flex-shrink-0'><Link href="/privacy-policy">• Privacy Policy</Link></h6>
<h6 className=' !flex-shrink-0'><Link href="/terms_and_conditions">• Terms & Conditions</Link></h6> 
<h6 className=' !flex-shrink-0'><Link href="/shipping-policy">• Shipping Policy</Link></h6>
<h6 className=' !flex-shrink-0'><Link href="/refund-cancellation">• Refund & Cancellation Policy</Link></h6>
</li></div>
                    
    
</ul>


    </div>
</div></div>
<div className={styles.credits + " !bg-gray-100 !border-t-gray-300"}>
    <div className=' max-w-[1128px] mx-auto flex flex-row w-full items-center justify-between'>
<div className={"flex flex-row w-full"}>
<img className='w-12 h-auto aspect-square object-contain mr-4' src="/moc.svg" />
    <img className='w-12 h-auto aspect-square object-contain mr-4' src="/msme.svg" />
   
    <img className='w-12 h-auto aspect-square object-contain mr-4' src="/Skill-India-Color.svg" style={{filter:"grayscale(1)"}} width={300}/>
    <img className='w-12 h-auto aspect-square object-contain mr-4' src="/drishti_logo.png" style={{filter:"grayscale(1)", mixBlendMode:"multiply"}} width={200}/>
    </div>
    <p className='text-sm w-full text-right mr-0'>2024 © nEmi Education | All Rights Reserved</p>
</div>
</div>
        </footer>
    )
}

export default Footer;