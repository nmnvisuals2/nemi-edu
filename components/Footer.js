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
                <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(0)}}>Certification Courses</a></li>
                    <li><a href="" onClick={(e)=>{e.preventDefault(),props.onListClick(2)}}>University Tie-Up Programs</a></li>
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
<li>
<svg id="Capa_1" x="0px" y="0px" width="395.71px" height="395.71px" viewBox="0 0 395.71 395.71" fill="var(--brand-col1)">
<g>
	<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
</g>

</svg>
    
    <address>5/22, Vikas Khand, Gomtinagar, Lucknow</address></li>
<li><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.772 2.439 1.076-.344c1.01-.322 2.087.199 2.52 1.217l.859 2.028c.374.883.167 1.922-.514 2.568L9.819 9.706c.116 1.076.478 2.135 1.084 3.177a8.678 8.678 0 0 0 2.271 2.595l2.275-.76c.863-.287 1.802.044 2.33.821l1.233 1.81c.615.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.977 1.114-3.052.778-2.539-.792-4.873-3.143-7.003-7.053-2.133-3.916-2.886-7.24-2.258-9.968.264-1.148 1.081-2.063 2.149-2.404Z" fill="var(--brand-col1)"/></svg><a href="tel:+917460002675">7460002675 </a></li>
{/* <li> <a onClick={e=>props.handleModal(true)} >Roadmap</a></li> */}
<li><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5-13.5Z" fill="var(--brand-col1)"/></svg> <a href="mailto:info@nemiedu.com">info@nemiedu.com</a> </li>
<li><h6><a href="/privacy-policy">• Privacy Policy</a></h6><h6><a href="/terms_and_conditions">• Terms & Conditions</a></h6> <h6><a href="/shipping-policy">• Shipping Policy</a></h6></li>
                    
    
</ul>


    </div>
</div>
<div className={styles.credits}>
<div className={styles.images}>
<img src="/moc.svg" />
    <img src="/msme.svg" />
   
    <img src="/Skill-India-Color.svg" style={{filter:"grayscale(1)"}} width={300}/>
    <img src="/drishti_logo.png" style={{filter:"grayscale(1)", mixBlendMode:"multiply"}} width={200}/>
    </div>
    <p>2022 © nEmi Education | All Rights Reserved</p>
</div>

        </footer>
    )
}

export default Footer;