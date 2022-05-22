import React from 'react'
import './Reason.css'
import mansit from '../../assets/ManSit6.svg'
import arrow from '../../assets/Vector 6.svg'
import arrow2 from '../../assets/Vector 5.svg'
import arrow3 from '../../assets/Vector 4.svg'
import arrow4 from '../../assets/Vector 1.svg'
import arrow5 from '../../assets/Vector 2.svg'
import arrow6 from '../../assets/Vector 3.svg'

const reason = () => {
  return (
    <div className='reason'>
        <h3>why you should Choose Us</h3>
        <p>Our team provides you with...</p>
        <div className='reasonBody'>
            <ul className='list'>
                <li>Our team provides you with...</li>
                <img src={arrow} alt="arrow1" id='arrow'/>
                <li>latest interactive UI designs</li>
                <img src={arrow2} alt="arrow2" id='arrow2'/>
                <li>UX Analysis </li>
                <img src={arrow3} alt="arrow3" id='arrow3'/>
            </ul>
            <div className='sitting'>
                <img src={mansit} alt="man" className='man'/>
            </div>
            <ul className='list' id='sec'>
                <li>Developers walkthrough</li>
                <img src={arrow4} alt="arrow4" id='arrow4'/>
                <li>Full case study</li>
                <img src={arrow5} alt="arrow5" id='arrow5'/>
                <li>Design to your satisfaction  </li>
                <img src={arrow6} alt="arrow6" id='arrow6'/>

            </ul>
        </div>
    </div>
  )
}

export default reason