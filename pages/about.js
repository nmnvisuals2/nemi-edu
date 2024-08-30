import { Button, Spacer } from "@nextui-org/react";
import Section from "../components/Section";
import DefaultLayout from "../layout/DefaultLayout";
import styles from '../styles/Home.module.css'
import ProfileCard from "../components/ProfileCard";
import Link from "next/link";
export default function About(){

    return <DefaultLayout>
        <Spacer y={32}></Spacer>
        <Section  id={"about"} full={true} marginned={true}>

<div className={"w-full mx-auto"}><div className={"w-full"}>

  <h2 className="text-5xl font-semibold">About <span className={"gradtext"}>nemi</span></h2>
  <Spacer y={4}></Spacer>
  <p className="text-sm">
  Welcome to <strong>Nemi</strong>, a dynamic force in the world of <strong>skill technology</strong> and <strong>professional networking</strong>. We are on a mission to empower individuals across India, particularly in <strong>Tier 2, 3, and 4 cities</strong>, by providing a platform integrated with <strong>top notch technologies</strong> that goes beyond conventional learning. <strong>Nemi</strong> is where <strong>skills meet opportunities</strong>, <strong>connections turn into collaborations</strong>, and <strong>ambitions transform into achievements</strong>.
</p>
<Spacer y={4}></Spacer>
<p className="text-sm">
<strong>Nemi</strong>, a brand of <strong>Amskills Ecademy Pvt Ltd</strong>, is the first skill tech startup supported by premier institutions like <strong>Dr APJ Abdul Kalam University</strong> & <strong>IIT Indore Drishti CPS</strong>. Nemi offers a unique blend of upskilling, socializing, and employability enhancement with the integra. We understand that in today’s rapidly changing professional landscape, it’s not just what you know, but who you connect with and how you apply your skills that truly matters. Our innovative programs are designed to equip you with the tools, networks, and confidence to navigate and succeed in the professional world.

</p>
<Spacer y={4}></Spacer>
<p className="text-sm"><strong>Nemi</strong> is more than a platform—it's a vibrant community where learners become leaders, and every connection is a step closer to your goals. Whether you're looking to upskill, expand your professional network, or enhance your employability, <strong>Nemi</strong> provides the pathway to your next big opportunity.</p>
<Spacer y={4}></Spacer>
  
<h2 className="text-5xl font-semibold">Vision</h2>
<Spacer y={4}></Spacer>
<p className="text-sm">To create a <strong>connected and skilled community</strong> that empowers individuals to turn their aspirations into reality, transforming India’s professional landscape one city at a time.</p>
<Spacer y={4}></Spacer>
<h2 className="text-5xl font-semibold">Mission</h2>
<Spacer y={4}></Spacer>
<p  className="text-sm">Our mission is to revolutionize the way individuals learn, connect, and grow. By offering <strong>cutting-edge programs</strong> and fostering <strong>meaningful connections</strong>, we aim to empower the youth of India, especially in <strong>Tier 2, 3, and 4 cities</strong>, to unlock their full potential and achieve professional success.</p>
<Spacer y={16}></Spacer>
  

<div className="flex flex-col  lg:flex-row items-start justify-between">
  <div className="w-[400px]">
    <img src="/founder2.jpg" className="aspect-square w-full rounded-full bg-transparent"/>
  </div>
  <Spacer x={12} y={12}></Spacer>
  <div className="flex-1">
  <h2 className="text-5xl font-semibold gradtext pb-4">Founder's Message</h2>
  <p  className="text-sm">Dear Future Leaders,</p>
<br/>
<p className="text-sm">Welcome to <strong>Nemi</strong>, a place where your journey to success begins. In a world where the professional landscape is constantly evolving, having the right skills is crucial—but so is having the right connections. That’s why we created <strong>Nemi</strong>, a platform that not only helps you upskill but also connects you with like-minded professionals, mentors, and opportunities.</p>
<br/>
<p className="text-sm">At <strong>Nemi</strong>, we believe that everyone deserves the chance to shine, no matter where they come from. We are committed to empowering individuals in <strong>Tier 2, 3, and 4 cities of India</strong>, providing them with the tools and networks to compete on a global stage. Our programs are designed to be more than just courses—they are gateways to new opportunities, new connections, and a brighter future.</p>
<br/>
<p className="text-sm">Imagine a place where every interaction brings you closer to your dream job, every course makes you more confident, and every connection opens a new door. That’s what we aim to offer at <strong>Nemi</strong>. We’re here to support you, inspire you, and help you turn your aspirations into reality.</p>

<p className="text-sm">Join us on this exciting journey, and together, we will create a future where everyone has the opportunity to succeed.</p>


  </div>
</div>
<Spacer y={12}></Spacer>
<div className="w-full p-8 rounded-3xl from-primary to-secondary bg-gradient-to-r min-h-[120px] flex flex-col lg:flex-row items-center justify-center">
  <div className="flex flex-col mr-4 justify-center text-left items-start w-full lg:w-auto">
    <h2 className="text-3xl font-semibold text-white w-full text-left">Explore our Courses and start your journey</h2>
  </div>
  <Spacer y={4} className="flex lg:hidden"></Spacer>
<Button as={Link} href="/course" className="bg-white mr-auto lg:mr-0 rounded-full">Explore Now</Button>

</div>

</div>





</div>

</Section>
<Spacer y={32}></Spacer>
    </DefaultLayout>
}