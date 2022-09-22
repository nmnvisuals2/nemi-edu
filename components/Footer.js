import { useState } from 'react';
import styles from './Footer.module.css'
import Link from 'next/link';
function Footer(props){

const [email,setEmail] = useState()
  
    return(

        <footer className={styles.footer}>
<div className={styles.footer_nav}>
    {props.device && props.device > 2 ? 
    <div className={styles.btt}><div className={styles.inner_btt}><img onClick={()=>{ window.scrollTo({top: 0, left: 0, behavior: 'smooth' });}} src='/bta.svg'/></div></div>: ''}
<img src='/ytb.svg' className={styles.ytb}/>
<img src='/bbb.svg' className={styles.bbb}/>
    <div className={styles.sec1}>
<h2>Explore<span className={styles.bro}>.</span></h2>
                <ul className={styles.navlist}>
                <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(1)}}>Diploma Courses</a></li>
                <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(2)}}>Certification Courses</a></li>
                    <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(3)}}>University Tie-Up Programs</a></li>
                    </ul>                                                                                                                                                                      
    </div>
    <div className={styles.sec2}>
        
<h3>
Subscribe to our <br/>
<span className={styles.bro}>
 Newsletter.
</span>
</h3>
<input placeholder='Enter your E-mail
' name='email' type='email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} className={styles.email_input}/>
<button className={styles.submit} type="submit" onClick={()=>props.handleSubmit(email)}>SUBSCRIBE{props.loader ? <div className={styles.loader}><span className={styles.p1}></span><span className={styles.p2}></span></div>:''}</button>
    </div>
    <div className={styles.sec3}>

<ul className={styles.main_nav}>
<li><Link href="/"><a>Home</a></Link> </li>
<li>  <Link href="#courses"><a onClick={props.handleStudentLogin} >Courses</a></Link> </li>
<li> <a onClick={e=>props.handleModal(true)} >Roadmap</a></li>
<li> <Link href="/#about"><a >About</a></Link> </li>
<li> <a onClick={e=>{e.preventDefault(),props.handleContactPopup(true)}} >Contact</a></li>
                    
    
</ul>


    </div>
</div>
<div className={styles.credits}>
<div className={styles.images}>
<img src="/moc.svg" />
    <img src="/msme.svg" />
   
    <img src="/Skill-India-Color.svg" style={{filter:"grayscale(1)"}} width={300}/>
    </div>
    <p>2022 © nEmi Education | All Rights Reserved</p>
</div>

        </footer>
    )
}

export default Footer;