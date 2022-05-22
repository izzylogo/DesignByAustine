import React from 'react'
import './ClientRev.css'

const ClientRev = (props) => {
  return (
    <div className='reviews' style={props.style}>
        <img src={props.person} alt="p" className='persons'/>
        <div className="detale">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</p>
            <p className="name">Mr. Damian okpala</p>
            <p className="positio">CEO & Manager of ALPOCH</p>
        </div>
    </div>
  )
}

export default ClientRev