"use client"

import React, {useState} from 'react'
import './GotQuestions.css'
import Image from 'next/image';

function GotQuestions() {
  
  const data = {
    button1 : {
        section1 : {
            text: "Buying your first home with Better",
            img : "/house.jpg"
        },
        section2 : {
            text: "One Day Mortgage",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img : ""
        },
        section3 : {
            text: "Better HELOC",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: "/better-heloc.jpg"
        },
        section4 : {
            text: "Insurance",
            img: "/insurance.jpg"
        }
    },
    button2 : {
        section1 : {
            text: "Mortgage calculator",
            img : "/house.jpg"
        },
        section2 : {
            text: "Affordability calculator",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img : ""
        },
        section3 : {
            text: "HELOC calculator",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: "/better-heloc.jpg"
        },
        section4 : {
            text: "Fixed-rate loan comparison calculator",
            img: ""
        }
    },
    button3 : {
        section1 : {
            text: "What is a good debt-to-income ratio for a home loan?",
            img : "/house.jpg"
        },
        section2 : {
            text: "Buying a house without realtor",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img : ""
        },
        section3 : {
            text: "Timeline for homebuying process",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: "better-heloc.jpg"
        },
        section4 : {
            text: "Conventional loan requirements",
            img: ""
        }
    }

  }
    
  const[displayedData, setDisplayedData] = useState(data.button1)
  const[activeButton, setActiveButton] = useState("button1");
  
  const handleClick = (buttonkey) =>{
    setDisplayedData(data[buttonkey])
    setActiveButton(buttonkey)
  }

  return (
    <div className='got-questions-container'>
        <div className='got-questions'>
        <div className='got-questions-text'>
            <div>Got questions?</div>
            <div>We've got answers</div>
        </div>
        <div>
        <div className='review-btn-flex-2'>
            <button className={`reviews-btn ${activeButton === 'button1' ? 'active' : ''}`}  onClick={()=> handleClick("button1")}>Our products</button>
            <button className={`reviews-btn ${activeButton === 'button2' ? 'active' : ''}`}  onClick={()=> handleClick("button2")}>Calculators</button>
            <button className={`reviews-btn ${activeButton === 'button3' ? 'active' : ''}`}  onClick={()=> handleClick("button3")}>Guides & FAQ's</button>
            </div>
        </div>
        </div>

        {displayedData && (
        <div id='displayed-data'>
            <div className='got-questions-content'>
            <div className='small'>
                <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
                <div className='first-box-text'>{displayedData.section1.text}</div>
                <div className='first-box-arrow'>
                    <span class="material-symbols-outlined" id='first-box-arrow-forward'>arrow_forward</span>
                </div>
                </div>
                <Image src="/house.jpg" alt="" className='first-box-img' />
            </div>

            <div className='large'>
                <div className='large-contents'>
                    <div className='second-box-text'>{displayedData.section2.text}</div>
                    <div className='second-box-para'>{displayedData.section2.para}</div>
                    <div className='first-box-arrow'>
                    <span class="material-symbols-outlined" id='second-box-arrow-forward'>arrow_forward</span>
                    </div>
                </div>
                <div className='mortgage-img'></div>
            </div>
            </div>

            <div className='got-questions-content-2'>
           
            <div className='large'>
            <div className='better-heloc-img'></div>
            <div className='large-contents'>
                    <div className='second-box-text'>{displayedData.section3.text}</div>
                    <div className='second-box-para'>{displayedData.section3.para}</div>
                    <div className='first-box-arrow'>
                    <span class="material-symbols-outlined" id='second-box-arrow-forward'>arrow_forward</span>
                    </div>
                </div>

            </div>  
            <div className='small'>
            <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
            <div className='first-box-text'>{displayedData.section4.text}</div>
                <div className='first-box-arrow'>
                    <span class="material-symbols-outlined" id='first-box-arrow-forward'>arrow_forward</span>
                </div>
            </div>
          
                <Image src="/insurance.jpg" alt="" className='first-box-img' />
            </div>
            </div>
        </div>
      )}

     
    </div>
  )
}

export default GotQuestions