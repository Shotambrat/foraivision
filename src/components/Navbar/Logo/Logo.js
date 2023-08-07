import React from 'react'

import './Logo.css'

import SvgSrc from './lorem-lorem.svg'

export default function Logo() {
  return (
    <div className='mainlogo-box'>
        <img src={SvgSrc} alt="SVG_LOGO" width={200} className='mainlogo'/>
    </div>
  )
}
