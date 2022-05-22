import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' name='contact'>
        <div className="quest">
            <h3 className="contactHead">
                Ready to get started?
            </h3>
            <p className="contactP">Sign up or contact us</p>
        </div>
        <div className="contactbtn">
            <button className="contactbtn1">Email</button>
            <button className="contactbtn2">Contact Us</button>
        </div>
    </div>
  )
}

export default Contact