import { useState } from 'react';
import styles from './CourseSelector.module.css';

function CourseSelector(props){

const [activeBtn,setActiveBtn] = useState(0);
    return(<div className={styles.wrapper}>
<div className={styles.button_wrapper}>
    <div className={styles.selector + " " + (activeBtn == 0 ? styles.active: '')} onClick={e=>setActiveBtn(0)}>Courses</div>
    <div className={styles.selector + " " + (activeBtn == 1 ? styles.active: '')} onClick={e=>setActiveBtn(1)}>Recommendation Tool</div>
</div>

        <div className={styles.container}>
        Main</div>
    </div>)
}

export default CourseSelector;