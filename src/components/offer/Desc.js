import React from 'react'
import image from '../../assets/Media1.svg'
import './desc.css'

const Desc = (props) => {
  return (
    <div className='desc'>
        <img src={props.img} alt="image" />
        <h4>{props.head}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing  ipsum dolor sit</p>
    </div>
  )
}

export default Desc