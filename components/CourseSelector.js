import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './CourseSelector.module.css';

function CourseSelector(props){

const [activeBtn,setActiveBtn] = useState(0);
const [activeCourse,setActiveCourse] = useState(0);
const [categories,setCategories] = useState(["Certification Course","E-Diploma","University"])




useEffect(()=>{
setActiveCourse(props.selector)}
,[props.selector])

    return(<div className={styles.wrapper}>
<div className={styles.button_wrapper}>
    <div className={styles.selector + " " + (activeBtn == 0 ? styles.active: '')} onClick={e=>setActiveBtn(0)}>Courses</div>
    <div className={styles.selector + " " + (activeBtn == 1 ? styles.active: '')} onClick={e=>setActiveBtn(1)}>Recommendation Tool</div>
</div>

        <div className={styles.container}>
        {activeBtn == 0?  <><div className={styles.toggle}>
           {categories? categories.map((r,i)=>{

return(<div className={styles.toggler_button + " " + (activeCourse == i ? styles.isActive : '')} onClick={e=>{setActiveCourse(i)}}>{r}</div>)

           }): ''}
        </div>


        <div className={styles.course_container}>

        {props.courseData ? props.courseData.map((item,index)=>{
if(item.category == categories[activeCourse]){
return(<Link href={`/courses/${item.courseSlug}`}><div onClick={props.handleClose} className={styles.courseCard}><img src={item.imageLink}/>{item.courseName}</div></Link>)}
            }) : ''}
        </div></>:''}


        {activeBtn == 1? <div className={styles.input_wrapper}>

<div className={styles.inputs}>
            <input type="text" placeholder={'Select Your Qualification'}></input>
            <input type="text" placeholder={'Enter Your Age'}></input>
            <input type="text" placeholder={'Select Your '}></input>
            <input type="text" placeholder={'Enter Your Eligibility'}></input>
            <input type="text" placeholder={'Enter Your Eligibility'}></input></div>

            <div className={styles.filtered}>


                
            </div>
        </div>:''}
        
        </div>
    </div>)
}

export default CourseSelector;