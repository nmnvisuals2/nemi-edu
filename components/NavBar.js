import styles from './NavBar.module.css'
import Link from 'next/link'
import { useState } from 'react';



function NavBar(props){

const [active,setActive] = useState(false);
const [loaded,setLoaded] = useState(false);

function handleNav(){

    if(!active){
        setActive(true);
        setTimeout(()=>{setLoaded(true)},300);
    }else{
        setLoaded(false);
        setActive(false);
        
    }
    
}
    
    return(<nav className={styles.nav_wrapper}>
<div className={styles.nav_inner}>
<img src='/nemi-logo.svg' className={styles.logo + " " + (props.scrolled? styles.logo_active : '')} />
{props.device > 2 ? 
<div className={styles.links + " " + (props.scrolled? styles.active_links : '')}>
<Link href="/"><a>Home</a></Link> 
    <Link href="#courses"><a onClick={props.handleStudentLogin} >Courses</a></Link> 
    <Link href="#"><a onClick={props.handleStudentLogin} >Roadmap</a></Link> 
    <Link href="#about"><a >About</a></Link> 
    <a onClick={e=>{e.preventDefault(),props.handleContactPopup()}} >Contact</a>
    <a className={styles.student_login} onClick={props.handleStudentLogin}>Student Login</a>
    </div> : <div onClick={handleNav} className={styles.nav_btn  + " " + (active ? styles.nav_active : '')}><div className={styles.menu_wrapper}>
        
        
        {active && loaded == true ? <>
    <Link href="/"><a>Home</a></Link> 
    <Link href="#courses"><a onClick={props.handleStudentLogin} >Courses</a></Link> 
    <Link href="#"><a onClick={props.handleStudentLogin} >Roadmap</a></Link> 
    <Link href="#about"><a>About</a></Link> 
    <a onClick={e=>{e.preventDefault(),props.handleContactPopup()}} >Contact</a>
    <a className={styles.student_login} onClick={props.handleStudentLogin}>Student Login</a></>
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


    
    )

}
export default NavBar;