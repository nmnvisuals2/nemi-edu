import styles from '../styles/404.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

function forofor() {


    const router = useRouter();
const [type,setType] = useState();
const [count,setCount] = useState(6);
const [isOpen,setIsOpen] = useState(false);
function counter(){
    var setter = 6;
    const re = setInterval(()=>{
        setCount(prevState=>prevState-1);
        setter -=1;
        
        if(setter <= 0){
            clearInterval(re);
            setIsOpen(true)
        }
        },1000)

       
}

    useEffect(()=>{
        if(router.asPath == "/courses" || router.asPath == "/course"){
setType(`There is no courses page, You can access them using NavBar. Although We are opening it for you in ${count} seconds`);

            
        }else{
            console.log('no');
            setType('Looks like you are lost but dont worry we are redirecting you to the Home 😀');
            setTimeout(()=>{router.push('/')},3000)
        }

       
      
    },[count])
useEffect(()=>{
    counter();
},[])
    return ( 
    
    <DefaultLayout opener={isOpen} Closer={e=>{setIsOpen(false)}}>
    <div className={styles.section}>{type}</div></DefaultLayout>)
    }


    export default forofor;