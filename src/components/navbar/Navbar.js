import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {HiOutlineX} from 'react-icons/hi'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll/modules'
import './Navbar.css'

const Navbar = () => {

    const [media, setMedia] = useState(true)
    const handleMedia = () => {
        setMedia(prevMedia => !prevMedia)
    }

    const changing = () => {
        if(window.screen.width < 710){
            handleMedia()
        }
    }


  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>AUGTE<span>X</span></p>
            </div>
            <ul className={media ? "menu" : "active"}>
                <li>
                    <Link onClick={changing} activeClass="active" to="home"  smooth={true}  duration={1200}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={changing} activeClass="active" to="service"  smooth={true}  duration={1200}>
                        Service
                    </Link>
                </li>
                <li>
                    <Link onClick={changing } activeClass="active" to="work"  smooth={true}  duration={1200}>
                        Works
                    </Link>
                </li>
                <li>
                    <Link onClick={changing} activeClass="active" to="review"  smooth={true}  duration={1200}>
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link onClick={changing} activeClass="active" to="contact"  smooth={true}  duration={1200}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
        <div onClick={handleMedia} className="hamburger">
            {media ? (<HiMenuAlt3 className='icon' />) : (<HiOutlineX className='icon' />)}
        </div>
    </div>
  )
}

export default Navbar