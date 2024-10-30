import React, { useState } from 'react'
import './DropDown.css'
import Link from 'next/link';

function Dropdown({
    open,
    toggleDropdown, 
    title,
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
    link
}) {

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div className='dropdown'>
        <div style={{fontWeight:'500'}}>{title}</div>
        <div>
        { 
        open ? (
        <span class="material-symbols-outlined" style={{fontSize:'28px', cursor:'pointer'}} onClick={toggleDropdown}>keyboard_arrow_up</span>
            ) : (
        <span class="material-symbols-outlined" style={{fontSize:'28px', cursor:'pointer'}} onClick={toggleDropdown}>keyboard_arrow_down</span>
            )
        }
        </div>
    </div>
    {
        open && (
            <div className='dropdown-contents'>
                {option1 && <div className='option'>{option1}</div>}
            {option2 && <div className='option'>{option2}</div>}
            {option3 && <div className='option'>{option3}</div>}
            {option4 &&  <Link href={link}><div className='option'>{option4}</div></Link> }
            {option5 && <div className='option'>{option5}</div>}
            {option6 && <div className='option'>{option6}</div>}
            </div>
        )
    }
    </div>

  )
}

export default Dropdown