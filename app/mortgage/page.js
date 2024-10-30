import React from 'react'
import MortCalc from '../MortgageCalc/MortCalc.js/MortCalc'
import MonthlyBrk from '../MortgageCalc/MonthltBrk/MonthlyBrk'
import Footer from '../Components/Footer/Footer'
import Section3 from '../MortgageCalc/Section3/Section3'
import Navbar from '../Components/Navbar/Navbar'

function Mortgage() {
  return (
    <div style={{backgroundColor:'beige'}}>
        <Navbar/>
        <MortCalc/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default Mortgage