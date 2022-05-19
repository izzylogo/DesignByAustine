import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {HiOutlineX} from 'react-icons/hi'
import logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {

    const [media, setMedia] = useState(false)
    const handleMedia = () => {
        setMedia(prevMedia => !prevMedia)
    }


  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>AUGTE<span>X</span></p>
            </div>
            <ul className={media ? "menu" : "active"}>
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Hire Us</li>
            </ul>
        </div>
        <div onClick={handleMedia} className="hamburger">
            {media ? (<HiMenuAlt3 className='icon' />) : (<HiOutlineX className='icon' />)}
        </div>
    </div>
  )
}

export default Navbar