import React from 'react'
import './Home.css'
import Navbar from './Components/Navbar/Navbar';
import Template from './Components/Template/Template';
import WhyWeAreBetter from './Components/WhyWeAreBetter/WhyWeAreBetter';
import GotQuestions from './Components/GotQuestions/GotQuestions';
import Footer from './Components/Footer/Footer';

export default function Home() {
  return (
    <div className='body'>
      <Navbar/>
      <Template/>
      <WhyWeAreBetter/>
      <GotQuestions/>
      <hr />
      <Footer/>
    </div>
  );
}
