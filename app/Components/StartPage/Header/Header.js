'use client'

import React, { useState,useEffect } from 'react'
import './Header.css'
import Image from 'next/image';

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [stopScroll, setStopScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          const startScrollPosition = 0; 
          const stopScrollPosition = 900;

          if (window.scrollY >= startScrollPosition && window.scrollY < stopScrollPosition) {
              setIsFixed(true);
              setStopScroll(false);  
          } else if (window.scrollY >= stopScrollPosition) {
              setStopScroll(true);  
          } else {
              setIsFixed(false);
              setStopScroll(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   
    return (
    <div className={`start-header ${isFixed ? 'fixed' : ''} ${stopScroll ? 'stop' : ''}`}>
        <Image src="/start-page.png" alt="" className='start-page-help-img' />
        <div className='start-header-contents'>
            <div className='start-header-contents-1'>
                <span className='better'>Better</span>
                <span className='mortgage'>Mortgage</span>
            </div>
            <div style={{display:"flex", flexDirection:'row', alignItems:'center', gap:'20px'}}>
                <div className='call-icon'>
                <span class="material-symbols-outlined" id='call'>call</span>
                </div>
                <div className='call-text'>Need help? Call (123)1234567</div>
            </div>
        </div>
    </div>
  )
}

export default Header