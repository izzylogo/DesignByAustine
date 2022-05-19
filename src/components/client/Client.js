import React from 'react'
import './Client.css'
import ClientRev from './ClientRev'

const Client = () => {
  return (
    <div className='client'>
        <h3 className="review">REVIEWS FROM OUR TOP CLIENTS</h3>
        <div className='client-group'>
            <ClientRev />
            <ClientRev />
            <ClientRev />
        </div>
    </div>
  )
}

export default Client