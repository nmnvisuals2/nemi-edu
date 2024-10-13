import { useCallback, useEffect, useRef, useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import { serversupabase, supabase } from "../../../utils/supabaseClient";
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import Link from 'next/link'

import Realistic from "react-canvas-confetti/dist/presets/realistic";



export default function Result({data}) {
    const [courses, setCourses] = useState([])
    const [displayScore, setDisplayScore] = useState(0)
    
    const [conductor, setConductor] = useState();

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

   

    

    async function getCoursesRecommendations() {
        const {data, error} = await supabase.from('courses').select('*').limit(20);
        if(data) {
            setCourses(data)
        }
    }

    useEffect(() => {
        getCoursesRecommendations()
    }, [])

    return (
        <DefaultLayout>
            <Realistic  key={"index"} className=" fixed left-0 top-0 w-full h-full bg-transparent pointer-events-none z-[9999]"  onInit={onInit} />
            <div className="container max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Your IQ Score</h1>
                    <div className="text-8xl font-extrabold text-blue-600" aria-live="polite">
                        {displayScore}
                    </div>
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