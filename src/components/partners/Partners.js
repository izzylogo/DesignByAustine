import React from 'react'
import './Partners.css'
import nike from '../../assets/nike.svg'
import tesla from '../../assets/tesla.svg'
import samsung from '../../assets/samsung.svg'
import paypal from '../../assets/paypal.svg'
import google from '../../assets/google.svg'
import applepay from '../../assets/applepay.svg'

const Partners = () => {
  return (
    <div className='patners'>
        <p>Trusted by the World’s Best Companies</p>
        {/* <img src={nike} alt="" /> */}
        <div className="patner-logo">
            <img src={nike} alt="nike" />
            <img src={tesla} alt="tesla" />
            <img src={samsung} alt="san" />
            <img src={paypal} alt="pay" />
            <img src={google} alt="goog" />
            <img src={applepay} alt="apple" />
        </div>
    </div>
  )
}

export default Partners