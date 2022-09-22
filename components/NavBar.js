import styles from './NavBar.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import data from './courses.json';


function NavBar(props){

const [active,setActive] = useState(false);

const coursePopper = useRef(null);
const [loaded,setLoaded] = useState(false);
const [pos,setPos] = useState({ leftPos:'20px',
topPos:'100px'
});
const [visible,setVisible] = useState(false);
const [activeSubItem,setActiveSubItem] = useState(false);
const [activeItem,setActiveItem] = useState(

   );

const [isHovering,setIsHovering] = useState(false);

function handleNav(){

    if(!active){
        setActive(true);
        setTimeout(()=>{setLoaded(true)},300);
    }else{
        setLoaded(false);
        setActive(false);
        
    }
    
}

function Mouser(ret){

   
       setPos({ leftPos:ret ? ret.clientX - 60 : '',
       topPos:120
       });
    
}

useEffect(()=>{
    console.log(data);

    Mouser();

},[])
    
    return(<>
    
    <div className={styles.sub_item + " " + (visible ? styles.activeItem : "")} style={{left:pos.leftPos,top:pos.topPos}} onMouseEnter={e=>{setIsHovering(true)}} onMouseOver={e=>{setIsHovering(true)}} onMouseOut={e=>{setIsHovering(false),setTimeout(e=>{setVisible(false)},800)}}>
<ul>
{data && data.categories ? data.categories.map((item,index)=>{
return(<li onMouseEnter={e=>{setIsHovering(true)}} key={index} onMouseOver={e=>{setActiveItem(index),setIsHovering(true)}} className={styles.sub_sub_item + " "+(activeSubItem === index ?styles.active_item : '')}><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" fill="#000"/></svg>{item.title}</li>)

}) : ""}

</ul>

    </div>
    
    <nav className={styles.nav_wrapper}>
<div className={styles.nav_inner}>
<Link href="/"><img src='/nemi_registered.svg' className={styles.logo + " " + (props.scrolled? styles.logo_active : '')} /></Link>
{props.device > 2 ? 
<div className={styles.links + " " + (props.scrolled? styles.active_links : '')}>
<Link href="/"><a>Home</a></Link> 
    <a className={styles.sub_item_button + " " + (visible? styles.active_button : '')} onClick={e=>{setVisible(true),Mouser(e)}} onMouseOver={e=>{setVisible(true),Mouser(e)}} onMouseEnter={e=>{setVisible(true),Mouser(e)}} onMouseOut={e=>setTimeout(e=>{isHovering?setVisible(false): ''},900)}>Courses <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" fill="#000"/></svg></a>
    <a onClick={e=>props.handleModal(true)} >Roadmap</a> 
    <Link href="/#about"><a >About</a></Link> 
    <a onClick={e=>{e.preventDefault(),props.handleContactPopup(true)}} >Contact</a>
    <a className={styles.student_login} href="https://app.nemiedu.com/login">Student Login</a>
    </div> : <div onClick={handleNav} className={styles.nav_btn  + " " + (active ? styles.nav_active : '')}><div className={styles.menu_wrapper}>
        
        
        {active && loaded == true ? <>
    <Link href="/"><a>Home</a></Link> 
    <a className={styles.sub_item_button + " " + (visible? styles.active_button : '')} onClick={e=>{setVisible(true),Mouser(e)}}>Courses<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" fill="#000"/></svg></a> 
    <ul className={styles.toggler+ " " + (visible? styles.active_toggle : '')}>{data && data.categories ? data.categories.map((item,index)=>{
return(<><li className={styles.sub_sub_item + " "+(activeSubItem === index ?styles.active_item : '')} onMouseEnter={e=>{setIsHovering(true)}} key={index} onClick={e=>{setActiveSubItem(index)}}>{item.title} <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" fill="#000"/></svg></li>
 <ul className={styles.sub_sub_sub + " " + (activeSubItem === index ?styles.active_sub : '')}>
 {item && item.courses ? item.courses.map((lem,ind)=>{
    return(<li key={ind}><a href={lem.link}>{lem.title}</a></li>)
}) : ''}</ul>
</>
)

}) : ""}</ul>
   
    <a onClick={e=>props.handleModal(true)} >Roadmap</a>
    <Link href="/#about"><a>About</a></Link> 
    <a onClick={e=>{e.preventDefault(),props.handleContactPopup(true)}} >Contact</a>
    <a className={styles.student_login} href="https://app.nemiedu.com/login">Student Login</a></>
    :''}
        
        </div><svg className={styles.svg_one} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 32 32"
fill="#000"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"></path></svg> <svg className={styles.svg_two} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="26" height="26"
viewBox="0 0 26 26"
fill="#000"><path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"></path></svg></div>}
       </div>
    </nav>

    </>
    
    )

}
export default NavBar;