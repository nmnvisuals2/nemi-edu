

import React, { useState } from 'react'
import { Button, Input, Select, SelectItem, Card, CardBody, CardHeader,Spacer } from "@nextui-org/react"

import Image from 'next/image'
import { supabase } from '../utils/supabaseClient'
import DefaultLayout from '../layout/DefaultLayout'
import Section from '../components/Section'
import {router} from 'next/router'
import { uuid} from 'uuidv4';
import { toast } from 'react-hot-toast'
export default function IQScoreCalculatorPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    school: '',
  })
  const [showIQCalculator, setShowIQCalculator] = useState(false)
  const [iqScore, setIQScore] = useState(null)
  const uuidThis = uuid()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit Working');
    
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert({
          name: formData?.name,
          phone: formData?.phone,
          email: formData?.email,
          message: `School/University : ${formData?.school}`,
          uuid: uuidThis
        });
  
      if (error) throw error;
  
      toast.success('Successfully signed up for assessment ');
      setTimeout(() => {
        router.push(`/free-ai-guide-test/${uuidThis}`);
      }, 500); 
      
      
      
     
  
    } catch (error) {
      console.error('Error submitting lead:', error.message);
    }
  };
  

  const calculateIQ = (e) => {
    e.preventDefault()
    // This is a mock IQ calculation. In a real scenario, you'd have a more complex algorithm.
    const mockScore = Math.floor(Math.random() * (140 - 80 + 1)) + 80
    setIQScore(mockScore)
  }

  return ( <DefaultLayout>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section>
      <div className="relative from-primary to-primary-300 bg-gradient-to-r h-[20vh] mt-24 rounded-xl">
      {/*   <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="IQ Test Hero Image"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        /> */}
        <div className="absolute container mx-auto inset-0  flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold  text-white pb-2 text-center">
            Get your FREE IQ Score and AI Based Course Suggestions
          </h1>
        </div>
      </div></Section>
      <Section>
      {/* Main Content */}
      <div className="container  mx-auto px-2 md:px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 gradtext">Unlock Your Potential</h2>
            <p className="text-sm sm:text-lg text-gray-600">
              Discover your IQ score and receive personalized AI-based course suggestions tailored to your unique abilities and interests. Our advanced algorithm analyzes your cognitive strengths and provides valuable insights to help you make informed decisions about your educational journey.
            </p>
            <ul className="list-disc text-sm sm:text-md list-inside text-gray-600 space-y-2">
              <li>Get an accurate assessment of your IQ</li>
              <li>Receive AI-powered course recommendations</li>
              <li>Explore career paths aligned with your strengths</li>
              <li>Gain insights into your learning style</li>
            </ul>
          </div>

          {/* Right side form */}
          <Card className="p-6">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-center w-full">Start Your Free Assessment</h3>
            </CardHeader>
            <CardBody>
              {!showIQCalculator ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="tel"
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                 
                  <Input
                    type="text"
                    label="School/College"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    required
                  />
                  <Button type="submit" color="primary" className="w-full">
                    Get Your Free IQ Score
                  </Button>
                </form>
                
              ) : (
                <div>
                  <h4 className="text-xl font-semibold mb-4">Calculate Your IQ Score</h4>
                  <form onSubmit={calculateIQ} className="space-y-4">
                    <Input
                      type="number"
                      label="Age"
                      placeholder="Enter your age"
                    />
                    <Select 
                      label="Education Level" 
                      placeholder="Select education level"
                    >
                      <SelectItem key="high_school" value="high_school">High School</SelectItem>
                      <SelectItem key="college" value="college">College</SelectItem>
                      <SelectItem key="graduate" value="graduate">Graduate</SelectItem>
                    </Select>
                    <Button type="submit" color="primary" className="w-full">
                      Calculate IQ Score
                    </Button>
                  </form>
                  {iqScore && (
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-semibold">Your estimated IQ Score:</h3>
                      <p className="text-3xl font-bold text-blue-600">{iqScore}</p>
                    </div>
                  )}
                </div>
              )}
              <div className='flex mt-4 text-sm flex-row items-center justify-center'>
                <p>Powered by  </p>
                <Spacer x={2}></Spacer>
                <img src='/openai.png' width={80} height={90}/>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Additional content below */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why Take Our IQ Test?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card shadow='sm'>
              <CardBody className='p-6'>
                <h3 className="text-xl gradtext font-semibold mb-2">Accurate Results</h3>
                <p>Our IQ test is designed by experts to provide you with the most accurate assessment of your cognitive abilities.</p>
              </CardBody>
            </Card>
            <Card shadow='sm'>
              <CardBody className='p-6'>
                <h3 className="text-xl gradtext font-semibold mb-2">Personalized Insights</h3>
                <p>Gain valuable insights into your strengths and areas for improvement, helping you make informed decisions about your education and career.</p>
              </CardBody>
            </Card>
            <Card shadow='sm'>
              <CardBody className='p-6'>
                <h3 className="text-xl gradtext font-semibold mb-2">AI-Powered Recommendations</h3>
                <p>Receive tailored course suggestions based on your IQ score and interests, powered by advanced AI algorithms.</p>
              </CardBody>
            </Card>
          </div>
          <p className="text-center text-gray-600 border-1 p-4 rounded-xl mt-8">
            Take the first step towards unlocking your full potential.<br/> <strong>Get your free IQ score and AI-based course suggestions today!</strong>
          </p>
        </div>
      </div>
      </Section>
    </div></DefaultLayout>
  )
}