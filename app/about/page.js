import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './About.css'
import OurMission from '../Components/OurMission/OurMission'
import Footer from '../Components/Footer/Footer'
import Timeline from '../Components/Timeline/Timeline'

function About() {
  return (
    <div className='about-page'>
        <Navbar />
        <OurMission/>
        <Timeline/>
        <Footer/>
    </div>
  )
}

export default About