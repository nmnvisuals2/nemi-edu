import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './CourseSelector.module.css';

import CustomSelect from './CustomSelect';
function CourseSelector(props){

const [activeBtn,setActiveBtn] = useState(0);
const [activeCourse,setActiveCourse] = useState(0);
const [categories,setCategories] = useState(["Certification Course","E-Diploma","University"])
const [predicted,setPredicted]= useState();
const [age,setAge]= useState();
const [mode,setMode]= useState();
const [qualification,setQualifications]= useState();
const [interested,setInterest]= useState();
const [predictedCourses,setPredictedCourses]= useState();
const [predictedSub,setPredictedSub]= useState();
const [error,setError] = useState();
const qualifications =[
    {title:"10th Pass",
    value:"10th Pass"},
    {title:"12th Pass",
    value:"12th Pass"},
    {title:"UnderGraduate",
    value:"UnderGraduate"},
    {title:"PostGraduate",
    value:"PostGraduate"},
    {title:"Diploma Holder",
    value:"Diploma Holder"},
    

];



const Interest = [
    {title:"Technology",
    value:"Technology"},
    {title:"Business & Management",
    value:"Business & Management"},
    {title:"Arts or Literature",
    value:"Arts or Literature"},
    {title:"Commerce or Finance",
    value:"Commerce or Finance"},
    {title:"Science",
    value:"Science"},
    {title:"Law",
    value:"Law"},
    {title:"Architecture",
    value:"Architecture"},

]
const modes = [
    {title:"Online Education",
    value:"Online Education"},
    {title:"Offline Education",
    value:"Offline Education"},
    
]
function ModeRet(){
  let r;
    if(mode == "Online Education"){

        return [13,0,15,10,1,5,6];
    }
    else{
        return [5,6];
    }



return r;
}


function setErrorr(dat){

setError(dat);
setTimeout(()=>{setError()},3000)
}
function Ager(){

    switch(true){
        case (age < 18) :
            return [0,15,10,1];
            break;
         case (age < 25 && age >= 18) :
            return [13,0,15,10,1,5,6];
            break;
            case (age < 30 &&age >= 25) :
            return [13,0,15,10,1,5,6];
            break;
            case (age < 40 && age >= 30) :
            return [13,0,15,10,1,5];
            break;
            case (age < 65 && age >= 40) :
            return [13,0,15,10,1,5];
            break;
            
    }
}

function InterestedCourse(){

    switch(true){
        case (interested == "Technology") :
            return [[13,0,10,5,6],["B.Tech"],["M.Tech"]];
            break;
            case (interested == "Arts or Literature") :
                return [[10,15,0,5,6],["BA","BSc"],["MA","MSc"]];
                break;
                case (interested == "Commerce or Finance") :
                    return [[0,15,10,1,5,6],["B.Com","BBA"],["M.Com","MBA"]];
                    break;
                    case (interested == "Law") :
                        return [[13,0,15,10,5,6],[]];
                        break;
                        case (interested == "Business & Management") :
                            return [[13,0,15,10,1,5,6],["BBA","BSc"],["MBA","MSc"]];
                            break;
                            case (interested == "Science") :
                            return [[0,15,10,5,6],["BSc","BA"],["MSc","MA"]];
                            break;
                            case (interested == "Architecture") :
                            return [[0,10,5,6],["BSc","B.Tech"],["MSc","M.Tech"]];
                            break;
        
            
    }
}

function Qualificated(){
    switch(true){
        case (qualification == "10th Pass") :
            return [0,13,15,1,10];
            break;
            case (qualification == "12th Pass") :
                return [0,13,15,1,10,5,6];
                break;
                case (qualification == "UnderGraduate") :
                return [0,13,15,1,10,5];
                break;
                case (qualification == "PostGraduate") :
                    return [0,13,15,1,10];
                    break;
                    case (qualification == "Diploma Holder") :
                    return [0,13,15,1,10,5,6];
                    break;
        
        }

}
function intersection() {
    var result = [];
    var lists;
  
    if(arguments.length === 1) {
      lists = arguments[0];
    } else {
      lists = arguments;
    }
  
    for(var i = 0; i < lists.length; i++) {
      var currentList = lists[i];
      for(var y = 0; y < currentList.length; y++) {
          var currentValue = currentList[y];
        if(result.indexOf(currentValue) === -1) {
          var existsInAll = true;
          for(var x = 0; x < lists.length; x++) {
            if(lists[x].indexOf(currentValue) === -1) {
              existsInAll = false;
              break;
            }
          }
          if(existsInAll) {
            result.push(currentValue);
          }
        }
      }
    }
    return result;
  }
function predictCourses(){

    if(age&&mode&&interested&&qualification){
        console.log('yes')
    
console.log(Ager(),InterestedCourse()[0],ModeRet(),Qualificated())
const r = intersection(Ager(),InterestedCourse()[0],ModeRet(),Qualificated());

const ee = r.map((item,index)=>{
return (props.courseData.find((e) => e.id == item));
});

setPredictedCourses(ee);
const eyy = r.map((item,index)=>{
    return (props.courseData.find((e) => e.id == 5 || 6));
    });
console.log(eyy.courseName)

setPredicted(true);

}else{
    setErrorr('Please Select All Fields')
}
}


useEffect(()=>{
setActiveCourse(props.selector)}
,[props.selector])

    return(<div className={styles.wrapper}>
<div className={styles.button_wrapper}>
    <div className={styles.selector + " " + (activeBtn == 0 ? styles.active: '')} onClick={e=>setActiveBtn(0)}>Courses</div>
    <div className={styles.selector + " " + (activeBtn == 1 ? styles.active: '')} onClick={e=>setActiveBtn(1)}>Recommendation Tool</div>
</div>

        <div className={styles.container + " " +(activeBtn == 1 ? styles.fullh :'')}>
        {activeBtn == 0?  <><div className={styles.toggle}>
           {categories? categories.map((r,i)=>{

return(<div className={styles.toggler_button + " " + (activeCourse == i ? styles.isActive : '')} onClick={e=>{setActiveCourse(i)}}>{r}</div>)

           }): ''}
        </div>


        <div className={styles.course_container}>

        {props.courseData ? props.courseData.map((item,index)=>{
if(item.category == categories[activeCourse] && (item.isActive || item.isPreview)){
return(<Link href={`/courses/${item.courseSlug}`}><div key={index} onClick={props.handleClose} className={styles.courseCard}><img className={styles.imageLink} src={item.imageLink}/>{item.courseName}</div></Link>)}
            }) : ''}
        </div></>:''}


        {activeBtn == 1? <div className={styles.input_wrapper}>
{!predicted ? 
<div className={styles.inputs}>
           <h2 className={styles.heade}>Know which courses are suitable for you.</h2>
            <CustomSelect single={true} z={99} objects={

           [
{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
           ].map((item,index)=>{

            return {title:index+16 + " Years Old",
        value:index+16 + " Years Old",}
           })

            } defaultText={'Select Your Age...'} setSelect={(data)=>{setAge(parseInt(data.substring(0,2)))}}/>
            <CustomSelect single={true} z={98} objects={Interest} defaultText={'Select Your Interest...'} setSelect={(data)=>{setInterest(data)}}/>
            <CustomSelect single={true} z={97} objects={qualifications} defaultText={'Select Your Qualification...'} setSelect={(data)=>{setQualifications(data)}}/>
            <CustomSelect single={true} z={96}t objects={modes} defaultText={'Select Your Education Mode...'} setSelect={(data)=>{setMode(data)}}/>
            <button className={styles.button_main} onClick={predictCourses}>Know Suitable Courses</button>
            {error? <p className={styles.err}>{error}</p>: ''}
            </div> : ''}

            <div className={styles.filtered + " " +(predicted? styles.activeFilter:'')}>

{predicted? <button className={styles.backto} onClick={()=>{setPredicted(false),setPredictedCourses(),setPredictedSub(),setMode(),setAge(),setQualifications(),setInterest()}}><svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.295 19.716a1 1 0 0 0 1.404-1.425l-5.37-5.29h13.67a1 1 0 1 0 0-2H6.336L11.7 5.714a1 1 0 0 0-1.404-1.424l-6.924 6.822a1.25 1.25 0 0 0 0 1.78l6.924 6.823Z" fill="#ffffff"/></svg>Get More Results</button>:''}
<div className={styles.predicwrap}>
{predictedCourses && predictedCourses.length>0? predictedCourses.map((item,index)=>{

return(<a href={`/courses/${item.courseSlug}`} ><div className={styles.predic}>
    
    <p>{item.courseName}</p></div></a>)


}): !predictedCourses && predictedCourses == null ?<div className={styles.cent}>Select All Fields and Submit to get Recommendations</div> :'Sorry ! No Course is recommended based on the inputs you have provided! You can still enroll manually' }</div>
                
            </div>
        </div>:''}
        
        </div>
    </div>)
}

export default CourseSelector;