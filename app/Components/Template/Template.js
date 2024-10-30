import React from 'react'
import './Template.css'
import Image from 'next/image';

function Template() {
  return (
    <div className='template'>

        <div className='rate-drop'>
            <div className='rate-drop-item'>
                <Image src="/rate-drop.png" alt="" className='rate-drop-icon' />
            </div>
            <span className='rate-drop-text'>
            Rate drop alert
            </span>
        </div>

        <div className='template-text'>The rate drop you&apos;ve <br />
         been waiting for</div>
 
        <div className='template-section-3'>
            <div className='start-approval'>
                <button className='approval-btn'>Start my approval</button>
                <div style={{display:'flex', flexDirection:'row', gap:'5px', alignItems:'center'}}>
                    <Image src="/alarm.png" alt="" className='alarm-icon' />
                    <span className='min'>3 min</span>
                    <span className='vertical-line'>|</span>
                    <span className='no-credit'>No credit impact</span>
                </div>
            </div>
            <Image src="\smartphone.png" alt="" className='smartphone-img' />
            <div className='reviews'>
                <div className='google-icon-rating'>
                    <Image src="/google-icon.png" alt="" className='google-icon' />
                    <Image src="/rating.png" alt="" className='rating' />
                </div>
                <div style={{display:'flex', flexDirection:'row', gap:'5px', alignItems:'end'}}>
                    <span>4.6 Stars</span>
                    <span>|</span>
                    <span>3177 Google reviews</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Template