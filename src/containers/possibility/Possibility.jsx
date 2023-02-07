import React from 'react'
import possibilityImage from '../../assets/nxtgen.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='nextgen__possibility section__padding' id='possibility'>
      <div className='nextgen__possibility-image'>
      <img src={possibilityImage} alt='possibility'/>
      </div>
    </div>
  )
}

export default Possibility