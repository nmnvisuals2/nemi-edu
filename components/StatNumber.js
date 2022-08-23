import { useEffect, useState } from 'react';
import styles from './StatNumber.module.css'

function StatNumber(props){

const [counter,setCounter] = useState(0);


function Count(){
    console.log(counter);
    var et = 0;
    const  rr = setInterval(()=>{
        et += props.number/50;
setCounter(et);
console.log(et);
    },30);

    if(et < 100){
        
    }else{
        clearInterval(rr);
        console.log('cleared');
    }
    
}

useEffect(()=>{

 
},[]);

    return(<div className={styles.stat_container}>
        <h2 className={styles.heading}>{props.number}{props.suffix}</h2>
        <p>{props.text}</p>
    </div>)
}
export default StatNumber;