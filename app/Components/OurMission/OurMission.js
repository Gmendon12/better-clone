import React from 'react'
import './OurMission.css'
import Image from 'next/image';

function OurMission() {
  return (
    <div className='our-mission-container'>
        <div className='our-mission'>
            <div className='our-mission-text'>Our mission</div>
            <div className='our-mission-para'>We&apos;re  making homeownership simpler, faster - and most importantly, more accessible for all Americans</div>
        </div>

        <div className='our-mission-section-2'>
            <div className='our-mission-section-2-1'>
                <div className='our-mission-section-2-text'>The status quo is broken</div>
                <div className='our-mission-section-2-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className='our-mission-section-2-btn'>Read Vishal&apos;s  story</div>
            </div>

            <iframe
           className='video'
            src="/video.mp4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='how-we-are-changing'>
            <div className='how-we-are-changing-text'>How we&apos;re  changing things </div>
            <br />
            <br />
            <div className='how-we-are-changing-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
            <br />
            <div className='how-we-are-changing-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </div>

        <div className='backed-up'>
            <div className='backed-up-text'>Backed Up</div>
            <div className='backed-up-contents'>
                <Image src="/company1.png" alt="" className='backed-up-img' />
                <Image src="/company2.png" alt="" className='backed-up-img'/>
                <Image src="/company3.png" alt="" className='backed-up-img'/>
                <Image src="/company1.png" alt="" className='backed-up-img' />
                <Image src="/company4.png" alt="" className='backed-up-img'/>
                <Image src="/company1.png" alt="" className='backed-up-img' />
                <Image src="/company2.png" alt="" className='backed-up-img'/>
            </div>
            
        </div>
    </div>
  )
}

export default OurMission