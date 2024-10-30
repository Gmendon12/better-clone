import React from 'react'
import './Help.css'
import Image from 'next/image';

function Help() {
  return (
    <div className='help'>
        <div className='help-question'>
            Hi, i'm John ! <br /> What can I help you with ?
        </div>
        <div className='question-box-flex'>
            <div className='question-box'>
                <Image src="/buy-home.png" alt="" className='question-box-icon' />
                <div>Buying a home</div>
                </div>
            <div className='question-box'>
            <Image src="/refinance.png" alt="" className='question-box-icon' />
            <div>Refinancing</div>
            </div>
            <div className='question-box'>
                <Image src="/cash-out.png" alt="" className='question-box-icon' />
            <div>Cash out refinance</div></div>
            <div className='question-box'>
            <Image src="/cash-out2.png" alt="" className='question-box-icon' />
            <div>Home Equity line or Credit</div>
            </div>
        </div>
        <div className='question-box-section-2'>
            <div className='question-box-section-2-flex'>
                <span className='section-2-text'>$100B</span>
                <span className='section-2-para'>home loans funded entirely online</span>
            </div>
            <div className='question-box-section-2-flex'>
                <span className='section-2-text'>400K</span>
                <span className='section-2-para'>Customers who chosea Better Mortgage</span>
            </div>
        </div>
        <div className='section-3'>
            <div>After a few questions, you'll unlock</div>
            <div className='section-3-contents'>
                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                <Image src="/cash-out.png" alt="" className='section-3-icon' />
                <span className='section-3-link'>Custom mortgage rates</span>
                </div>

                <div style={{display:'flex', flexDirection:'row',gap:'20px'}}>
                <Image src="/cash-out.png" alt="" className='section-3-icon' />
                <span className='section-3-link'>Exclusive rates</span>
                </div>
                
                <div style={{display:'flex', flexDirection:'row',gap:'20px'}}>
                <Image src="/cash-out.png" alt="" className='section-3-icon' />
                <span className='section-3-link'>personalised dashboard</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help