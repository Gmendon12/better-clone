'use client'

import React, { useState, useEffect } from 'react'
import './Monthlybrk.css'

function MonthlyBrk({monthly}) {

 const[showDropdown, setShowDropdown] = useState(false)
 const[utilties, setUtilities] = useState({
    water: 25,
    gas: 25,
    internet: 50
 })

 const [propertyTaxes, setPropertyTaxes] = useState(0);
  const [homeInsurance, setHomeInsurance] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);
  const [pmi, setPmi] = useState(0);
  const [totalMonthly, setTotalMonthly] = useState("300");

 const toggleDropdown = () =>{
    setShowDropdown((prev) => !prev)
 }

 const handleUtilityChange = (e, utility) =>{
    setUtilities((prev) =>({
        ...prev,
        [utility]: Number(e.target.value) || 0,
    }))
 }

 const totalUtilities = Object.values(utilties).reduce((acc,curr) => acc + curr,0)

 useEffect(() => {
    const total =
      Number(monthly) +
      Number(propertyTaxes) +
      Number(homeInsurance) +
      Number(hoaFees) +
      totalUtilities +
      Number(pmi);
      
    setTotalMonthly(total);
  }, [monthly, propertyTaxes, homeInsurance, hoaFees, totalUtilities, pmi]);

  return (
    <div className='monthly-breakdown'>
        <div className='monthly-breakdown-1'>
            <span className='monthly-breakdown-text'>Monthly payment breakdown</span>
            <span className='monthly-pay'>${monthly}</span>
        </div>


        <div className='monthly-breakdown-2'>

            <div className='monthly-breakdown-2-2'>
                <div className='monthly-breakdown-2-2-1'>
                    <span className='pandi'></span>
                    <span>Principal & Interest</span>
                </div>

                <div className='pandi-2'>${totalMonthly}</div>
            </div>

            <div className='monthly-breakdown-2-2'>
                <div className='monthly-breakdown-2-2-1'>
                    <span className='pt'></span>
                    <span>Property taxes</span>
                </div>

                <div>
                    <input 
                    className='monthly-breakdown-input' 
                    type='number'
                    value={propertyTaxes}
                    onChange={(e) => setPropertyTaxes(Number(e.target.value) || 0)}
                    />
                </div>
            </div>

            <div className='monthly-breakdown-2-2'>
                <div className='monthly-breakdown-2-2-1'>
                    <span className='homeinsur'></span>
                    <span>Homeowners insurance</span>
                </div>

                <div>
                    <input 
                    className='monthly-breakdown-input' 
                    type='number'
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value) || 0)}
                    />
                </div>
            </div>

            <div className='monthly-breakdown-2-2'>
                <div className='monthly-breakdown-2-2-1'>
                    <span className='hoa'></span>
                    <span>HOA fees</span>
                </div>

                <div>
                    <input 
                    className='monthly-breakdown-input' 
                    type='number'
                    value={hoaFees}
                    onChange={(e) => setHoaFees(Number(e.target.value) || 0)}
                    />
                </div>
            </div>

        <div className='monthly-breakdown-2-2'>
                <div className='monthly-breakdown-2-2-1'>
                    <span className='utilities'></span>
                    <span>Utilities</span>
                </div>
                <div className='utilities-2'>
                <span className='total-utilities'>${totalUtilities.toFixed(2)}</span>
                { 
                    showDropdown ? (
                        <span class="material-symbols-outlined" style={{fontSize:'28px', cursor:'pointer'}} onClick={toggleDropdown}>keyboard_arrow_up</span>
                    ) : (
                        <span class="material-symbols-outlined" style={{fontSize:'28px', cursor:'pointer'}} onClick={toggleDropdown}>keyboard_arrow_down</span>
                    )
                }
                </div>
            </div>
            { showDropdown && (
                        <div className={`utilities-dropdown ${showDropdown ? 'open' : ''}`}>
                             <div className='monthly-breakdown-2-2'>
                             <div className='monthly-breakdown-2-2-1'>    
                               <span>Water/Sewer</span>
                               </div>

                                 <div>
                                  <input className='monthly-breakdown-input' type='number' value={utilties.water} onChange={(e) => handleUtilityChange(e, 'water')} />
                                   </div>
                                </div>

                                <div className='monthly-breakdown-2-2'>
                             <div className='monthly-breakdown-2-2-1'>
                               <span>Gas</span>
                               </div>

                                 <div>
                                  <input className='monthly-breakdown-input' type='number' value={utilties.gas} onChange={(e) => handleUtilityChange(e, 'gas')} />
                                   </div>
                                </div>

                                <div className='monthly-breakdown-2-2'>
                             <div className='monthly-breakdown-2-2-1'>
                               <span>Internet</span>
                               </div>

                                 <div>
                                  <input className='monthly-breakdown-input' type='number' value={utilties.internet} onChange={(e) => handleUtilityChange(e, 'internet')} />
                                   </div>
                                </div>

                                <div>
                                    <input type="checkbox" />
                                    <div>Include utlities in payment</div>
                                </div>
                                </div>
                    )}

            <div className='monthly-breakdown-2-2'>
                <div className='monthly-breakdown-2-2-1'>
                    <span className='pmi'></span>
                    <span>PMI</span>
                </div>

                <div>
                    <input 
                    className='monthly-breakdown-input' 
                    type='number'
                    value={pmi}
              onChange={(e) => setPmi(Number(e.target.value) || 0)}
                    />
                </div>
            </div>

           <button className='copy-estimate'>Copy estimate link</button>
        </div>
    </div>
  )
}

export default MonthlyBrk