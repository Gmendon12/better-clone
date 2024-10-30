"use client"

import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Link from 'next/link';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import Dropdown from './Dropdown';
import Image from 'next/image';

function Navbar() {

  const[hoveredItem, setHoveredItem] = useState(null);
  const[navbarBackground, setNavbarBackground] = useState(false)
  const[showComponent, setShowComponent] = useState(false)
  const[open, setOpen] = useState(false)
  const[dropDown, setDropDown] = useState({
    Buy : false,
    Refinance: false,
    HELOC : false,
    Rates: false,
    BetterPlus: false
  })


  const toggleDropDown = (section) =>{
    setDropDown(prev => ({
        ...prev,
        [section]: !prev[section]
    }))
}

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
};

  const handleMouseLeave = () => {
    setHoveredItem(null);
};

useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 1100) setNavbarBackground(true);
        else setNavbarBackground(false);

        if (scrollY > 2000) setShowComponent(true);
        else setShowComponent(false);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <div className={`navbar ${navbarBackground ? 'scrolled' : ''}`} >
    <div className='navbar-section-1'>
        <Link href='/'>   <div className='better-logo'>Better</div></Link>
        <div className='navbar-section-1-contents'>
            {['Buy', 'Refinance', 'HELOC', 'Rates', 'Better+'].map((item) => (
                <div
                    key={item}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                    className='navbar-item-container'
                >
                    <div className='navbar-item'>{item}</div>
                    {hoveredItem && (
            <div className='hover-element'>
             { hoveredItem === item && (
                <div className='hover-element'>
                    {
                        hoveredItem === "Buy" && (
                            <div className='hoveredItem-dropdown'>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Apply now</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Purchase rates</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Affordability calculator</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <Link href='/mortgage'><span>Mortgage calculator</span></Link> 
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Rent vs buy calculator</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Find an agent</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>VA loans</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Learning center</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                        </div> 
                        )
                    }
                    {
                        hoveredItem === 'Refinance' && (
                            <div className='hoveredItem-dropdown'>
                                <div className='hoveredItem-dropdown-item'>
                                <span>Apply now</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Refinance rates</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Cash out refinance calculator</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Learning center</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            </div>
                        )
                    }
                    {
                         hoveredItem === 'HELOC' && (
                            <div className='hoveredItem-dropdown'>
                                <div className='hoveredItem-dropdown-item'>
                                <span>Apply now</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                                </div>
                                <div className='hoveredItem-dropdown-item'>
                                <span>Calculate your cash</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Cash out refinance calculator</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Learning center</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            </div>
                        )
                    }
                     {
                         hoveredItem === 'Rates' && (
                            <div className='hoveredItem-dropdown'>
                                <div className='hoveredItem-dropdown-item'>
                                <span>Purchase mortgage rates</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                                </div>
                                <div className='hoveredItem-dropdown-item'>
                                <span>Refinance rates</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Refinance cash-out rates</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>HELOC rates</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Purchase rates</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            </div>
                        )
                    }
                     {
                         hoveredItem === 'Better+' && (
                            <div className='hoveredItem-dropdown'>
                                <div className='hoveredItem-dropdown-item'>
                                <span>Get insurance</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                                </div>
                                <div className='hoveredItem-dropdown-item'>
                                <span>Title and Closing</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Better Attorney Match</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <span>Learning Center</span>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <div>
                                    Better Agent match
                                    <span className='for-agents'>For Agents</span>
                                </div>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            <div className='hoveredItem-dropdown-item'>
                                <div>Better Duo
                                <span className='for-agents'>For Agents</span>
                                </div>
                                <Image src="/arrow-forward.png" className='arrow-forward' alt="" />
                            </div>
                            </div>
                        )
                    }
                </div>
             )}
            </div>
        )}
                </div>
            ))}
        </div>
    </div>
    <div className='navbar-section-2-contents'>
        <div className='navbar-call'
        onMouseEnter={()=> handleMouseEnter('call')}
        onMouseLeave = {handleMouseLeave}    
        >
        <span class="material-symbols-outlined" id='call-icon'>call</span>
        { hoveredItem === 'call' && (
            <div className='hover-element-call'>
                Contact us anytime on <u>1234-5678-9090</u>
            </div>
        )}
        </div>
        <div className='navbar-item' id='sign-in-navbar'>Sign in</div>
        <span class="material-symbols-outlined" id='menu-icon' onClick={toggleDrawer(true)}>menu</span>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} PaperProps={{
          sx: {
            width: '100vw',
            maxWidth: '100%',
            padding: '30px'
          },
        }}>
          <div className='drawer-container'>
        <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
            <div className='drawer-container-header'>
                <div className='drawer-logo'>Better</div>
                <span onClick={toggleDrawer(false)} class="material-symbols-outlined">close</span>
            </div>
            <div className='drawer-container-dropdown'>
                <Dropdown  
                open={dropDown.Buy} 
                toggleDropdown={()=>toggleDropDown("Buy")} 
                title="Buy"
                option1="Apply now"
                option2="Purchase rates"
                option3="Affordability calculator"
                option4='Mortgage calculator'
                option5="Rent vs buy calclator"
                option6='Find an agent'
                link = '/mortgage'
                />
            
                <Dropdown  
                open={dropDown.Refinance} 
                toggleDropdown={()=>toggleDropDown("Refinance")} 
                title="Refinance"
                option1="Refinance rates"
                option2="Apply Now"
                option3="Cash-out refinance calculator"
                option4='Learning Center'
                />

               <Dropdown  
                open={dropDown.HELOC} 
                toggleDropdown={()=>toggleDropDown("HELOC")} 
                title="HELOC"
                option1="Apply now"
                option2="Calculate your Cash"
                option3="HELOC vs. Cash-out Refinance"
                option4='Learning Center'
                /> 

                <Dropdown  
                open={dropDown.Rates} 
                toggleDropdown={()=>toggleDropDown("Rates")} 
                title="Rates"
                option1="Apply now"
                option2="Calculate your Cash"
                option3="HELOC vs. Cash-out Refinance"
                option4='Learning Center'
                />

                <Dropdown  
                open={dropDown.BetterPlus} 
                toggleDropdown={()=>toggleDropDown("BetterPlus")} 
                title="Better+"
                option1="Apply now"
                option2="Calculate your Cash"
                option3="HELOC vs. Cash-out Refinance"
                option4='Learning Center'
                /> 
                </div>
            </div>
            <button className='call-us-btn'>Call us anytime at (123)534567777</button>
            <div  className='drawer-btns'>
                <button className='drawer-get-started-btn'>Get started</button>
                <button className='drawer-sign-in-btn'>Sign in</button>
            </div>
         
          </div>
      </Drawer>
        {showComponent && (
            <Link href='/start'> <div className='get-started-btn'>Get started</div></Link>
         
      )}
    </div>
</div>
  )
}

export default Navbar