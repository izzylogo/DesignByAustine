import React from 'react'
import './ClientRev.css'
import person1 from '../../assets/person1.svg'

const ClientRev = () => {
  return (
    <div className='reviews'>
        <img src={person1} alt="p" className='persons'/>
        <div className="detale">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</p>
            <p className="name">Mr. Damian okpala</p>
            <p className="positio">CEO & Manager of ALPOCH</p>
        </div>
    </div>
  )
}

export default ClientRev