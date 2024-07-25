import Link from 'next/link';
import { useState } from 'react';
import styles from './CourseCard.module.css'
import { Divider } from '@nextui-org/react';
function CourseCard(props){

const data = props.data;


function getTimeDate(a){

    const b = new Date(a);
return [b.toLocaleDateString("en",{weekday:"long",day:"numeric",month:"short",year:"numeric"}),b.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})]

}

    return <>
    {data ? 
    
    <div className={styles.maincard + " relative"} key={props.key}>
        {/* <div className='absolute bg-red-500 text-white text-xs px-4 rounded-full top-2 right-2 z-10'>SALE 30%</div> */}
<Link href={`/courses/${data.slug}`}><img src={data.img}/></Link>
<div className={styles.cardcontent}>

    <Link href={`/courses/${data.slug}`}><h2 className='hf font-medium'>{data.title}</h2></Link>
    <p>{data.intro}</p>

    <div className={"flex flex-row justify-start items-center"}>
        <p className={"!text-2xl !font-bold text-primary"}>₹{data.price}</p>
<p className={"line-through !text-sm text-gray-500 !ml-2"}>₹{parseInt(data.price) + 30/100*parseInt(data.price)}</p></div>
<p className='!text-xs !my-2 text-gray-700'>{data?.intro}</p>
<Divider></Divider>
<div className='flex flex-row justify-between'>
    <Link href={`/courses/${data.slug}`} className='w-full'><button className={styles.readmore + " text-white hover:brightness-90 transition-all shadow-sm shadow-secondary"}>Learn More
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#fff"/></svg></button></Link>

    <Link href={`https://app.nemiedu.com/checkout/${data.slug}`} className='w-full'><button className={styles.readmore + " text-white !bg-primary hover:brightness-90  transition-all shadow-sm shadow-primary"}>Enroll Now
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#fff"/></svg></button></Link>
    </div>

<div className={styles.datetime}>

    <span>Published : {getTimeDate(data.created_at)[0]}</span>
    {/* <span><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.25 13.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5ZM12 2C6.478 2 2 6.478 2 12s4.478 10 10 10 10-4.478 10-10S17.522 2 12 2Z" fill="#222F3D"/></svg>{getTimeDate(data.created_at)[1]}</span> */}
</div>
</div>
    </div>:''}
    
    </>
}

export default CourseCard;