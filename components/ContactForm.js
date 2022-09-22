import { useState } from 'react';
import styles from './ContactForm.module.css'

function ContactForm(props){

    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    return(<div className={styles.form_holder}>
<h2>{props.heading}</h2>
        <input type="text" name='name' placeholder="Enter your Full Name" onChange={(e)=>setFullName(e.target.value)}></input>
        <input type="email" name='email' placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="text" name='phone' placeholder="Enter your Phone Number" onChange={(e)=>setPhone(e.target.value)}></input>
        <textarea name='name' placeholder="Write a message...." onChange={(e)=>setMessage(e.target.value)}></textarea>
        <a onClick={(e)=>{e.preventDefault(),props.handleSubmitForm(fullName,email,phone,message)}}>SUBMIT</a>
        {props.loader ? <div className={styles.loader}><span className={styles.p1}></span><span className={styles.p2}></span></div>:''}
        
    </div>)
}

export default ContactForm;