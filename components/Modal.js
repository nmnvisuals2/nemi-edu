import { useEffect, useState } from 'react'
import { Plus } from './Icons'
import styles from './Modal.module.css'


export default function Modal(props){




  
    
return(<>
    {props.open?
    <div className={styles.modal_overlay + " " + (props.extra? styles.extra : '')} onClick={()=>{props.handleModal(!props.closeable)}}>
           <div className={styles.modal} onClick={e=>{e.stopPropagation()}}> {props.closeable? <a className={styles.close} onClick={()=>{props.handleModal(false)}}><Plus/></a>  : ''}{props.children}</div>
        </div>
    


    : ""} </>)
}


