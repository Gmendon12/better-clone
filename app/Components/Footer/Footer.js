import React from 'react'
import './Footer.css'
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <div className='footer-container'>
        <div style={{display:'flex', flexDirection:'column', gap:'30px'}}>
        <div className='footer-logo'>Better</div>

<div className='footer-section-1'>
    <div className='footer-section-1-1'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div>
        <div className='footer-logo-small'>Better <span className='footer-link'>Mortgage</span> </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div>
        <div className='footer-logo-small'>Better <span className='footer-link'>Real Estate</span> </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div>
        <div className='footer-logo-small'>Better <span className='footer-link'>Cover</span> </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div>
        <div className='footer-logo-small'>Better <span className='footer-link'>Inspect</span> </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div>
        <div className='footer-logo-small'>Better <span className='footer-link'>Settlement Services</span> </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    </div>

<div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
    <div> <strong>Resources</strong></div>
    <div className='footer-contents'>
        <span className='footer-links'>Home affordability calculator</span>
        <Link href='/mortgage'><span>Mortgage calculator</span></Link>
        <span>Free mortgage calculator</span>
        <span>Mortgage calculator with taxes</span>
        <span>Mortgage calculator with PMI</span>
        <span>Rent vs buy calculator</span>
        <span>HELOC payment calculator</span>
        <span>Heloc vs cash-out refinance calculator</span>
        <span>Buy a home</span>
        <span>Sell a home</span>
        <span>Get home inspection</span>
    </div>
</div>

<div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
    <div><strong>Company</strong></div>
    <div className='footer-contents'>
        <Link href='/about'><span>About us</span></Link>
        <span>Careers</span>
        <span>Media</span>
        <span>Partner With Us</span>
        <span>Learning center</span>
        <span>FAQs</span>
        <span>Investor Relations</span>
    </div>
</div>

<div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
    <div> <strong>Contact Us</strong></div>
    <div className='footer-contents'>
        <span>xyz@better.com</span>
        <span>1234-5678-9876</span>
        <span>FAQ</span>
        <span>Glossary</span>
        <span><strong>Legal</strong></span>
        <span>NMLS Consumer Access</span>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>Disclosures & Licensing</span>
        <span>Affiliated Business</span>
        <span>Browser Disclaimer</span>
    </div>
</div>


</div>
        </div>

<div className='footer-section-2'>
        <div className='social-media-icons'>
          <Image src="/facebook.png" alt="" className='media-icons' />
          <Image src="/instagram.png" alt="" className='media-icons' />
          <Image src="/linkedIn.png" alt="" className='media-icons' />
        </div>
        <div className='footer-section-2-para'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <u>deserunt mollit anim id est laborum</u> </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <u>deserunt mollit anim id est laborum</u></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <u>deserunt mollit anim id est laborum</u></p>
        </div>
            
</div>

<hr />
       <div className='footer-section-3'>
        <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
    </div>
  )
}

export default Footer