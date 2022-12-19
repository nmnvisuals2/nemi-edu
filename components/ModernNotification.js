import { useEffect, useState } from 'react';
import styles from './ModernNotification.module.css'

function ModernNotifications(props){

const [progress,setProgress] = useState();
useEffect(()=>{
let count = 100;
const r = setInterval(()=>{
    
if(count > 0){
    count -= 0.5;
    
setProgress(count);
}else{
        clearInterval(r);
        
    }

},10)

},[])


    return(<div className={styles.notification_holder}>
<div className={styles.text}>{props.text}</div>
<div className={styles.progress} style={{width:progress + "%"}}></div>
    </div>)
}

export default ModernNotifications;