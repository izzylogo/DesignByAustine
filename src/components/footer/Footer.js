import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    

  return (
    <div className='footer'>
        <div className="footerBeg">
            <div className="fLogo">
                <img src={logo} alt="logo" />
                <h2 >AUGTE<span>X</span></h2>
            </div>
            <p>2010 - {year}</p>
            <p>Privacy-Terms</p>
        </div>
        <div className="footerGrid">
            <div className="footerAbout">
                <h4 className="footerInfo">About</h4>
                <p>service</p>
                <p>FAQ</p>
                <p>Branding</p>
            </div>
            <div className="footerAbout">
                <h4 className="footerInfo">Service</h4>
                <p>UI/UX</p>
                <p>WEB 3 Designer</p>
                <p>Branding</p>
            </div>
            <div className="footerAbout">
                <h4 className="footerInfo">Company</h4>
                <p>Team</p>
                <p>License</p>
                <p>Sponsors</p>
            </div>
        </div>
    </div>
  )
}

export default Footer