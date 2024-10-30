"use client";

import React, {useState} from 'react'
import "./WhyWeAreBetter.css"

function WhyWeAreBetter() {

    const data = {
        button1 : {
            img: '\arian.jpg',
            review: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
            name : "Arian - Better Mortgage Customer"
        },
        button2 : {
            img : '\amanda.jpg',
            review  : "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
            name : "Amanda - Better Mortgage Customer"
        },
        button3 : {
            img: '\paul.jpg',
            review: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
            name : "Paul - Better Mortgage customer"
        }
    }

  const [displayedData, setDisplayedData] = useState(data.button1)
  const [activeButton, setActiveButton] = useState('button1');

  const handleClick = (buttonkey) =>{
    setDisplayedData(data[buttonkey])
    setActiveButton(buttonkey);
  }

  return (
    <div className='why-we-are-better'>
        <div className='reviews-container'>

            <div className='reviews-container-img' style={{backgroundImage: `url(${displayedData.img})`}}>
                <div className='reviews-contents'>
                    <p style={{fontSize:'22px'}}>"</p>
                <p className='review-text'>{displayedData.review}</p>
                <p className='review-name'>{displayedData.name}</p>
                </div>
            </div>

            <div className='review-btn-flex-2'>
            <button className={`reviews-btn ${activeButton === 'button1' ? 'active' : ''}`}  onClick={()=> handleClick("button1")}>Arian</button>
            <button className={`reviews-btn ${activeButton === 'button2' ? 'active' : ''}`}  onClick={()=> handleClick("button2")}>Amanda</button>
            <button className={`reviews-btn ${activeButton === 'button3' ? 'active' : ''}`}  onClick={()=> handleClick("button3")}>Paul</button>
            </div>
        </div>

        <div className='why-we-are-better-2'>
            <div className='why-we-are-better-text'>Find out why we're better</div>
            <button className='why-we-are-better-btn'>See all our stories</button>
            <div className='trustpilot-contents'>
                <img src="/truspilot.png" alt="" className='trustpilot-icon' />
                <span className='excellent'>Excellent</span>
                <span className='stars'>4.4 out of 5</span>
            </div>
        </div>
    </div>
  )
}

export default WhyWeAreBetter