'use client'

import React, { useEffect, useState } from 'react'
import './MortCalc.css'
import CustomInput from './CustomInput';
import MonthlyBrk from '../MonthltBrk/MonthlyBrk';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

function MortCalc() {
 
const[homePrice, setHomePrice] = useState('500000')
const[downPayment, setDownPayment] = useState('30000')
const [downPaymentInterest, setDownPaymentInterest] = useState('0');
const[interestRate, setInterestRate] = useState('6')
const[loanLength, setLoanLength] = useState('30')
const [monthlyPayment, setMonthlyPayment] = useState(null)
const[open, setOpen] = useState(false)
const[showComponent, setShowComponent] = useState(false)

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
  const [principalRate, setPrincipalRate] = useState(300);

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

useEffect(() =>{
    const handleScroll = () =>{
        const scrollY = window.scrollY;
        if(scrollY > 400 && scrollY < 1800) {
            setShowComponent(true);
        }
        else setShowComponent(false)
    };
    window.addEventListener('scroll', handleScroll)

    return () =>{
        window.removeEventListener('scroll', handleScroll)
    }
},[])


const toggleDrawer = (open) => (event) =>{
    if(event.type === 'keydown' && (event.key === "Tab" || event.key === 'Shift')){
        return;
    }
    setOpen(open)
}

useEffect(()=>{
    calculateMortgage()
}, [homePrice, downPayment, downPaymentInterest, interestRate, loanLength])

const calculateMortgage = () =>{
    const P = Number(homePrice) - Number(downPayment);
    const r = Number(interestRate) / 100 / 12;
    const n = Number(loanLength) * 12

    const downPaymentInt = (Number(downPayment) * (Number(downPaymentInterest) / 100)) / n;

    if(P <= 0 || r <= 0 || n<=0){
        setMonthlyPayment(null);
        return;
    }

    const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r,n) - 1) + downPaymentInt;
    setMonthlyPayment(M.toFixed(2))
 
}

const handleNumericInput = (setter) => (e) => {
    const value = e.target.value;

    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
        setter(value);
    }
};

  return (
    <div className='mortgage-calculator-container'>
        {
            showComponent && (
                <div className='show-component'> 
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div>Home Price</div>
                        <a className='home-price-pop' href="#home-price-link">{homePrice}</a>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div>Monthly payment</div>
                        <a className='monthly-payment-pop' href="#home-price-link">${monthlyPayment}/mo </a>
                    </div>
                </div>
            )
        }
        <div className='mortgage-calculator-contents'>
            <div className='mortgage-calc-text' id='home-price-link'>Mortgage calculator</div>
            <div className='mortgage-calc-para'>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate yout total monthly payment</div>
            <div className='mortgage-calc-inputs'>
                <div className='mortgage-calc-input-1'>
                    <div className='mortgage-calc-input-1-flex'>
                         <div className='home-price-text'>Home price</div>
                         <div className='home-price-container'>
                         <span className='dollar-sign'>$</span>
                         <input 
                         type="text" 
                         className='home-price-input'
                         value={homePrice}
                         onChange={handleNumericInput(setHomePrice)}
                         />
                         </div>
                    </div>
                    <div className='mortgage-calc-input-1-flex'>
                        <div className='monthly-payment-text'>Monthly payment</div>
                        <div className='monthly-payment'>{monthlyPayment !== null ? `$${monthlyPayment}` : `/Mo`}</div>
                    </div>
                    <button className='get-pre-approved' >Get pre-approved</button>
                </div>

        <div className="slider-section">
            <input
              type="range"
              min="50000"
              max="3000000"
              step="1000"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="price-slider"
            />
            <div className="slider-values">
              <span>$50,000</span>
              <span>$1,000,000</span>
            </div>
          </div>

          <button className='get-approved-hide'>Get pre-approved</button>
          <button className='add-details' onClick={toggleDrawer(true)}>+ Add details</button>

          <Drawer 
          anchor='bottom' 
          open={open} 
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
                width: '100vw',
                maxWidth: '100%',
                padding: '30px',
                mt:"88px",
                height: '90%',
                zIndex:'50000'
              },
          }}
          >
            <div style={{position:'relative'}}>
            <span onClick={toggleDrawer(false)} class="material-symbols-outlined" id='close-drawer'>close</span>
                <div className='drawer-contents'>
                <CustomInput 
                        label='zip code'
                        width="100%"
                        borderRadius='10px'
                        />
                        {/* <div className='drawer-contents-1'> */}
                        <CustomInput 
                            label='Down-payment'
                            value={downPayment}
                            onChange= {handleNumericInput(setDownPayment)}
                            width="100%"
                            borderRadius='0px'
                            secondaryLabel={" "}
                            secondaryValue={downPaymentInterest}
                            onSecondaryChange={handleNumericInput(setDownPaymentInterest)}
                            secondaryWidth='100%'
                            />
                        <CustomInput 
                        label='Interest rate (%)' 
                        value={interestRate} 
                        onChange={handleNumericInput(setInterestRate)}
                        width="100%"
                        borderRadius='10px'
                        />
                        <CustomInput 
                        type="select"
                        label='Length of loan' 
                        value={loanLength}
                        width="100%"
                        borderRadius='10px'
                        onChange={(e)=> setLoanLength(e.target.value)}
                        options={[
                            { value: '15', label: '15 years' },
                            { value: '20', label: '20 years' },
                            { value: '30', label: '30 years' },
                        ]}
                        />

                        <button className='see-results' onClick={toggleDrawer(false)}>See Results</button>
                </div>
            </div>
          </Drawer>

        <div className='mortgage-calc-input-1'>
                    <div className='mortgage-calc-input-1-1'>
                        <CustomInput 
                        label='zip code'
                        width="20rem"
                        borderRadius='10px'
                        />
                        
                        <div className='down-payments-input'>
                            <CustomInput 
                            label='Down-payment'
                            value={downPayment}
                            onChange= {handleNumericInput(setDownPayment)}
                            width="15rem"
                            borderRadius='0px'
                            secondaryLabel={" "}
                            secondaryValue={downPaymentInterest}
                            onSecondaryChange={handleNumericInput(setDownPaymentInterest)}
                            secondaryWidth='5rem'
                            />
                        </div>
                    </div>
                    <div className='mortgage-calc-input-1-1'>
                        <CustomInput 
                        label='Interest rate (%)' 
                        value={interestRate} 
                        onChange={handleNumericInput(setInterestRate)}
                        width="20rem"
                        borderRadius='10px'
                        />
                        <CustomInput 
                        type="select"
                        label='Length of loan' 
                        value={loanLength}
                        width="20rem"
                        borderRadius='10px'
                        onChange={(e)=> setLoanLength(e.target.value)}
                        options={[
                            { value: '15', label: '15 years' },
                            { value: '20', label: '20 years' },
                            { value: '30', label: '30 years' },
                        ]}
                        />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div className='monthly-breakdown'>
        <div className='monthly-breakdown-1'>
            <span className='monthly-breakdown-text'>Monthly payment breakdown</span>
            <span className='monthly-pay'>${monthlyPayment}</span>
        </div>


        <div className='monthly-breakdown-2'>

            <div className='monthly-breakdown-2-2'>
                <div className='monthly-breakdown-2-2-1'>
                    <span className='pandi'></span>
                    <span>Principal & Interest</span>
                </div>

                <div className='pandi-2'>${principalRate}</div>
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

                                <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
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
    </div>
  )
}

export default MortCalc