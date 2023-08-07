import React from 'react'

import './AboutMe.css'

import AvaSrc from './6386976.png'

export default function Aboutme() {
    return (
        <div className='ava-box'>
            <img src={AvaSrc} alt="SVG_LOGO" height={100} width={100} className='ava-img'/>
        </div>
    )
}
