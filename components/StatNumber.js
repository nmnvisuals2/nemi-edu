import { useEffect, useState } from 'react';
import styles from './StatNumber.module.css'
import { InView, useInView } from "react-intersection-observer";
function StatNumber(props){

const [counter,setCounter] = useState(0);
const { ref, inView } = useInView({
    threshold: 1
  });


function Count(){
    
    var et = 0;
    const  rr = setInterval(()=>{
        et += props.number/50;
setCounter(et);



if(et >= props.number){
    clearInterval(rr);
}
    },10);

    
    
}

useEffect(()=>{
Count();
 
},[inView]);

    return(<div className={styles.stat_container} ref={ref}>
        <h2 className={styles.heading}>{counter}{props.suffix}</h2>
        <p>{props.text}</p>
    </div>)
}
export default StatNumber;