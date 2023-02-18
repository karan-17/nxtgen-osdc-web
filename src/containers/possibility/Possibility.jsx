import React from 'react'
import possibilityImage from '../../assets/nxtgen.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='nextgen__possibility section__padding' id='possibility'>
      <div className='nextgen__possibility-image'>
      <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='nextgen__possibility-content'>
      <h4>Request Early Access to Get Started</h4>
      <h1 className='gradient__text'>The Possibilities are beyond your imaginations</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed euismod, nisl sed lacinia tincidunt, nunc elit
        tincidunt massa, eget aliquam nunc justo vel mauris.
        Sed euismod, nisl sed lacinia tincidunt, nunc elit
        tincidunt massa, eget aliquam nunc justo vel mauris.
      </p>
      <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility