import React from 'react'
import './Client.css'
import ClientRev from './ClientRev'
import person1 from '../../assets/person1.svg'
import person2 from '../../assets/person2.svg'
import person3 from '../../assets/person3.svg'


const Client = () => {
  return (
    <div className='client' name='review'>
        <h3 className="review">REVIEWS FROM OUR TOP CLIENTS</h3>
        <div className='client-group'>
            <ClientRev 
              style={{backgroundColor: 'rgba(81, 147, 244, 1)'}}
              person={person1}
            />
            <ClientRev 
              style={{backgroundColor: 'rgba(239, 131, 43, 1)'}}
              person={person2}
            />
            <ClientRev 
              style={{backgroundColor: 'rgba(81, 147, 244, 1)'}}
              person={person3}
            />
        </div>
    </div>
  )
}

export default Client