import { useCallback, useEffect, useRef, useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import { serversupabase, supabase } from "../../../utils/supabaseClient";
import { Card, CardBody, CardFooter, Button, Image,CircularProgress } from "@nextui-org/react";
import Link from 'next/link'

import Realistic from "react-canvas-confetti/dist/presets/realistic";
import ScoreIQ from "../../../components/ScoreIQ";



export default function Result({data}) {
    const [courses, setCourses] = useState([])
    const [displayScore, setDisplayScore] = useState(0)
    
    const [conductor, setConductor] = useState();
    const [sections,setSections] = useState()
    const [modules,setModules] = useState();
    const [questions,setQuestions] = useState()
    const [moduleScores,setModuleScores] = useState()


    useEffect(()=>{
        if(data?.test_id){
            getSections(data?.test_id)
        }
    },[])

    const duration = 600; // 2 seconds for animation
    const onOnce = () => {
        conductor?.shoot();
      };
      const onRun = () => {
        conductor?.run({ speed: 1 });
      };
      const onPause = () => {
        conductor?.pause();
      };
      const onStop = () => {
        conductor?.stop();
      };
    
      const onInit = ({ conductor }) => {
        setConductor(conductor);
      };
    useEffect(() => {
        let start = 0
        const end = data?.score
        
        if (end === 0) {
            setDisplayScore(0)
            return
        }

        let timer
        
        const animate = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            setDisplayScore(Math.floor(progress * end))
            if (progress < 1) {
                timer = setTimeout(() => requestAnimationFrame(animate), 1000 / 60)
            } else {
              conductor?.shoot()
            }
        }

        requestAnimationFrame(animate)

        return () => clearTimeout(timer)
    }, [data?.score])

   
    async function getSections(a){

        const {data,error} = await supabase.from('mock_groups').select('*,subject(*)').eq('test',a).order('seq',{ascending:true})
      if(data){
        
        setSections(data)
       getModules(data)
      }
      else{
       
        /* router.push('/login') */
      }
      }

      
      
  async function getModules(a){
  
    const {data,error} = await supabase.from('mock_groups').select('*,module(*)').in('parent_sub',a.map(i=>i.id))
  if(data){
    
    setModules(data)
   getQuestions(data)
  }
  else{
   
    /* router.push('/login') */
  }
  }
  async function getQuestions(a){

    const {data,error} = await supabase.from('mock_questions').select('*').in('parent',a.map(i=>i.module.id)).order('seq',{ascending:true})
if(data){
    
    setQuestions(data)
  
    /* if(data.length == 0){
        router.push('/404')
    } */
}
else{
  
}
}
useEffect(() => {
  calculateScores();
}, [sections, modules, questions, data]);

const calculateScores = () => {
 
  const scores = sections?.map((section) => {
    // Filter modules for the current section
    const filteredModules = modules?.filter(module => module.parent_sub === section.id);

    // Process each module to calculate its score
    const moduleData = filteredModules?.map((module) => {
      // Filter questions for the current module
      const filteredQuestions = questions?.filter(question => question.parent === module.module.id);

      // Calculate the total score for the current module
      const totalScore = filteredQuestions?.reduce((sum, question) => {
        const reportItem = data?.report.find(report => report.id === question.id);
        if (!reportItem) return sum; // Skip if no matching report item

        const reportValue = reportItem.value - 1;
        const isCorrect = question.type === "options"
          ? question.options.findIndex(option => option.isCorrect) === reportValue
          : question.options.answer.trim() === reportItem.value.trim();

        return isCorrect ? sum + 1 : sum;
      }, 0);

      // Calculate the total possible score for the module (number of questions)
      const maxPossibleScore = filteredQuestions?.length || 0;

      // Calculate the percentage
      const percentageScore = maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * 100 : 0;

      return {
        moduleId: module.module.id,
        title: module.module.title,
        totalScore,
        maxPossibleScore,
        percentageScore,
      };
    });

    return moduleData
  });

  
  setModuleScores(scores && scores[0]);
  getCoursesRecommendations(scores && scores[0])
  
};
    



    async function getCoursesRecommendations(scores) {
        
      
      
        const {data, error} = await supabase.rpc('get_recommended_courses',{
          quantitative_score :scores?.find(item=>item.title == 'Quantitative Aptitude')?.totalScore,
          logical_score :scores?.find(item=>item.title == 'Logical Reasoning')?.totalScore,
          verbal_score :scores?.find(item=>item.title == 'Verbal Ability')?.totalScore,
          finance_score :scores?.find(item=>item.title == 'Finance')?.totalScore,
          analytics_score :scores?.find(item=>item.title == 'Analytics')?.totalScore,
          tech_score :scores?.find(item=>item.title == 'Tech')?.totalScore,
          marketing_score :scores?.find(item=>item.title == 'Marketing')?.totalScore,
          pharmacy_score :scores?.find(item=>item.title == 'Pharmacy')?.totalScore
        })
        if(data) {
            setCourses(data)
        }
    }

    
    const getColorByScore = (totalScore, maxPossibleScore) => {
        if (maxPossibleScore === 0) return "stroke-gray-400"; // Return a neutral color if no possible score
      
        const percentage = (totalScore / maxPossibleScore) * 100;
      
        if (percentage >= 80) {
          return "stroke-green-500"; // High score: Green
        } else if (percentage >= 50) {
          return "stroke-yellow-500"; // Medium score: Yellow
        } else {
          return "stroke-red-500"; // Low score: Red
        }
      };
    return (
        <DefaultLayout>
            <Realistic  key={"index"} className=" fixed left-0 top-0 w-full h-full bg-transparent pointer-events-none z-[9999]"  onInit={onInit} />
            <div className="container max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    {/* <h1 className="text-4xl font-bold mb-4">Your IQ Score</h1>
                    <div className="text-8xl font-extrabold text-blue-600" aria-live="polite">
                        {displayScore}
                    </div> */}

                    <ScoreIQ score={displayScore} totalScore={50}></ScoreIQ>

<div className="flex flex-row my-12 items-center justify-center">
                    {sections && sections.map((section) => {
  // Filter modules for the current section
  const filteredModules = modules && modules.filter(module => module.parent_sub === section.id);

  return (
    <div key={section.id} className="section-container flex flex-row items-center justify-center flex-wrap">
      

      {/* Map through filtered modules in the current section */}
      {filteredModules && filteredModules.map((module) => {
        // Filter questions for the current module
        const filteredQuestions = questions && questions.filter(question => question.parent === module.module.id);

        // Calculate the total score for the current module
        const totalScore = filteredQuestions?.reduce((sum, question) => {
          const reportItem = data?.report.find(report => report.id === question.id);
          if (!reportItem) return sum; // Skip if no matching report item

          const reportValue = reportItem.value - 1;
          const isCorrect = question.type === "options"
            ? question.options.findIndex(option => option.isCorrect) === reportValue
            : question.options.answer.trim() === reportItem.value.trim();

          return isCorrect ? sum + 1 : sum;
        }, 0);

        // Calculate the total possible score for the module (number of questions)
        const maxPossibleScore = filteredQuestions?.length || 0;

        // Calculate the percentage
        const percentageScore = maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * 100 : 0;

        return (
          <div key={module.module.id} className="module-container text-white flex-[20%] flex-grow-0 text-center flex flex-col justify-center items-center">
            {/* Circular Progress displaying the accumulated score for the module */}
            <CircularProgress
              label={module.module.title}
              strokeWidth={3}
              showValueLabel={true}
              color="red-500"
              classNames={{
                svg: "w-24 md:w-24 h-16 md:h-24 drop-shadow-md",
                indicator: getColorByScore(totalScore,maxPossibleScore),
                label: "text-xs text-black",
                value:'text-black text-sm'
              }}
              value={percentageScore}
            />

            {/* Render total score over max possible score for the module */}
            <div className="text-black">
              {totalScore} / {maxPossibleScore} 
            </div>
          </div>
        );
      })}
    </div>
  );
})}</div>


                    <p className="mt-2 text-xl text-gray-600">Great job! Here are some courses we recommend:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Card key={course.id} className="max-w-sm">
                            <Image 
                                src={course.img} 
                                alt={course.title}
                                className="aspect-video object-cover rounded-none"
                            />
                            <CardBody>
                                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                                <p className="text-gray-600 text-sm">Duration: {course.duration}</p>
                            </CardBody>
                            <CardFooter>
                                <Button as={Link} href={`/courses/${course.slug}`} color="primary" fullWidth>
                                    Enroll Now
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    )
}

export async function getServerSideProps(context) {
    const {data, error} = await serversupabase
        .from('ai_guide_submissions')
        .select('*')
        .eq('lead_id', context.query.uuid)
        .single()

    return { props: { data: data || null, error: !!error } }
}