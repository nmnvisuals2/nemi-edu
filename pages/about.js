import { Spacer } from "@nextui-org/react";
import Section from "../components/Section";
import DefaultLayout from "../layout/DefaultLayout";
import styles from '../styles/Home.module.css'
import ProfileCard from "../components/ProfileCard";
export default function About(){

    return <DefaultLayout>
        <Spacer y={16}></Spacer>
        <Section  id={"about"} full={true} marginned={true}>
<div className={styles.about_wrapper}><div className={styles.about_image}></div><div className={styles.about_content}>

  <h2>About <span className={styles.blue}>nEmi</span></h2>
  <p>
  <strong>Nemi</strong> a brand of <strong>Amskills Ecademy Pvt Ltd</strong> is
  recognized by{" "}
  <strong>
    Ministry of Commerce, Government of India, Uttar Pradesh Government,
  </strong>{" "}
  &nbsp;and backed by{" "}
  <strong>
    DR. A.P.J Abdul Kalam Technical University &amp; IIT INDORE DRISTHI CPS
    FOUNDATION, AMSKILL ECADEMY PVT. LTD (NEMI)
  </strong>{" "}
  is a leading Skill Tech Company, dedicated to empowering individuals with the
  knowledge and skills they need, to thrive in the ever- evolving professional
  environment. We understand that in today's fast-paced world, conventional
  education alone is not enough to stay ahead. The goals are to bridge the gaps
  between academic learning and real-world skills through our innovative
  programs and courses.
  <br />
  <br />
  <strong>Nemi</strong> is the first skill Technology startup funded by{" "}
  <strong>IIT Indore</strong> and is the only startup giving joint
  certifications with <strong>IIT Indore through Drishti CPS</strong>
</p>

  <h2>What makes us <span className={styles.blue}>different?</span></h2>
  
    <ul className={styles.different}>
    <li>Job Assurance in well known brands across the country</li>
      <li>Mentoring sessions by Military Veterans</li>
      <li>AI powered Career Guidance and Education Ecosystem</li>
      <li>Blockchain integrated Certification System</li>
      <li>Utilizing Modern Education Technology for Seamless Learning Experience</li>
      <li>Recognized by Ministry of Commerce, MSME , Startup India and many more renowned government organizations </li>
      <li>Research based Evaluation & Learning Pipeline</li>
      <li>Internationally recognised certification , Backed by Skill Development Council Canada</li>
      
    </ul>
  
</div>





</div>

</Section>
<Section id={"team"} full={false} marginned={true}>
  <h1 className={styles.team_heading}>SuperHuman Team <br/>behind <span className={styles.blue}>nEmi</span></h1>
  <div className={'text-xs max-w-[800px] w-full mx-auto text-center my-4 text-gray-500'}><p>nEmi is being operated by team of superhumans who have years of Experience in various fields.<br/>With an Innovative Mindset, nEmi team tries to achieve limitless solutions for modern edtech and bring a revolutionary change</p></div>
<div className={styles.columns + " " + styles.extraresp}>

  <ProfileCard link={"#"} name={'Akshay Bajpayee'} role="Founder & CEO" image="/team01.jpg" badge="/badge.svg"></ProfileCard>
  <ProfileCard link={"#"} name={'Akanksha Bajpayee'} role="Co-Founder" image="/co-founder.jpeg" badge="/badge3.svg"></ProfileCard>
  <ProfileCard link={"#"} name={'Colonel(Retd.) Niraj Nayan Bajpayee'} role="Chief Mentor" image="/team02.jpg" badge="/badge2.svg"></ProfileCard>
  {/* <ProfileCard link={"#"} handleMouseOver={setOverlayActive} name={'Diwakar Pratap Singh'} role="Executive Director" image="/image2.jpg" badge="/badge3.svg"></ProfileCard> */}
  
  <ProfileCard link={"#"} name={'Mr. Mahendra Dwivedi'} role="Subject & Personality Development Expert" image="/mahendra.jpeg" badge="/badge3.svg"></ProfileCard>
  <ProfileCard link={"#"} name={'Mr. Amit Mishra'} role="Personality Developement & Placement Expert" image="/ed.jpeg" badge="/badge3.svg"></ProfileCard>
</div>

</Section>
    </DefaultLayout>
}