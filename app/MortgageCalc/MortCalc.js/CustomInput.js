'use client'

import React, { useState, useEffect } from 'react';
import './CustomInput.css';

const CustomInput = ({ 
  label,  
  type = "text", 
  options = [],
  value, 
  onChange,
  width,
  borderRadius = "0px",
  secondaryLabel = null,
  secondaryValue = '',
  onSecondaryChange = null, 
  secondaryWidth = "50px",
  ...props }) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (value !== '') {
      setFocused(true);
    }
  }, [value]);

  return (
    <div className="input-container">
      { type === "text" ? (
          <input
          type="text"
          className="custom-input"
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== '')}
          onChange={onChange}
          value={value}
          placeholder=" "
          style={{
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            width: width
          }}
          {...props}
        />
      ) : (
        <select
          className="custom-input"
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(value !== '')}
          onChange={onChange}
          placeholder=" "
          style={{
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            width: width
          }}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

{secondaryLabel && (
        <div style={{position:'relative'}}>
          <input
          type="text"
          className="secondary-input"
          onChange={onSecondaryChange}
          value={secondaryValue}
          placeholder=" "
          style={{
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            width: secondaryWidth
          }}
        />
        <span className='percentage'>%</span>
        </div>
   
      )}
    
      <label className={`custom-label ${focused ? 'focused' : ''}`}>
        {label}
      </label>
      {secondaryLabel && (
        <label className={`custom-secondary-label ${focused ? 'focused' : ''}`}>
          {secondaryLabel}
        </label>
      )}
    </div>
  );
};

export default CustomInput;
