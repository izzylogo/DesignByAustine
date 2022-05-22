import React from 'react'
import Desc from './Desc'
import './offer.css'
import image1 from '../../assets/Media1.svg'
import image2 from '../../assets/Media2.svg'
import image3 from '../../assets/Media3.svg'
import image4 from '../../assets/Media4.svg'
import image5 from '../../assets/Media5.svg'
import image6 from '../../assets/Media6.svg'

const Offer = () => {
  return (
    <div className='offer' name='service'>
        <h3>what we have to offer</h3>
        <p className='in'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className='grid'>
            <Desc 
                img={image1}
                head={'WireFrame'}
            />
            <Desc 
                img={image2}
                head={'UI/UX Design'}
            />
            <Desc 
                img={image3}
                head={'mobile & web design'}
            />
            <Desc 
                img={image4}
                head={'web3.0 ui/ux'}
            />
            <Desc 
                img={image5}
                head={'desktop ui/ux design'}
            />
            <Desc 
                img={image6}
                head={'case study'}
            />
        </div>
    </div>
  )
}

export default Offer