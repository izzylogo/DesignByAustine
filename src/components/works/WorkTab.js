import React from 'react'
import './WorkTab.css'
// import ecome from '../../assets/e-commerce.svg'

const WorkTab = (props) => {
  return (
    <div className='tab'>
        <div className='inner'>
            <img src={props.img} alt="e-come" className='img'/>
            <h4>{props.desc}</h4>
            <button className='butt'>preview</button>
        </div>
    </div>
  )
}

export default WorkTab