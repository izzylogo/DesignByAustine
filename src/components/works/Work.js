import React from 'react'
import './Work.css'
import WorkTab from './WorkTab'
import ecome from '../../assets/e-commerce.svg'
import web3 from '../../assets/web3.0.svg'

const Work = () => {
  return (
    <div className='work'>
        <h3>our recent works</h3>
        <div className="workshow">
            <WorkTab 
                img={ecome}
                desc={'E-commerce APP UI'}
            />
            <WorkTab 
                img={web3}
                desc={'web 3.0 '}
            />
        </div>
    </div>
  )
}

export default Work