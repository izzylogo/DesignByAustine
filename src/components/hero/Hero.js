import React from 'react'
import './Hero.css'

import image from '../../assets/image.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="intro">
            <h2>LET US HANDLE THE DESIGNS.</h2>
            <p>we are professional user interface designers who would help design & prototype  your application or website ideas.</p>
            <button className='btn1'>Hire Us</button>
            <button className='btn2'>Learn More.</button>
        </div>
        <img src={image} alt="image" className='image'/>
    </div>
  )
}

export default Hero