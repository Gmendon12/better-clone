import React from 'react'
import './Template.css'

function Template() {
  return (
    <div className='template'>

        <div className='rate-drop'>
            <div className='rate-drop-item'>
                <img src="/rate-drop.png" alt="" className='rate-drop-icon' />
            </div>
            <span className='rate-drop-text'>
            Rate drop alert
            </span>
        </div>

        <div className='template-text'>The rate drop you've <br />
         been waiting for</div>
 
        <div className='template-section-3'>
            <div className='start-approval'>
                <button className='approval-btn'>Start my approval</button>
                <div style={{display:'flex', flexDirection:'row', gap:'5px', alignItems:'center'}}>
                    <img src="/alarm.png" alt="" className='alarm-icon' />
                    <span className='min'>3 min</span>
                    <span className='vertical-line'>|</span>
                    <span className='no-credit'>No credit impact</span>
                </div>
            </div>
            <img src="\smartphone.png" alt="" className='smartphone-img' />
            <div className='reviews'>
                <div className='google-icon-rating'>
                    <img src="/google-icon.png" alt="" className='google-icon' />
                    <img src="/rating.png" alt="" className='rating' />
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