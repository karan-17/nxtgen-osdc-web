import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='nextgen__cta'>
    <div className='nextgen__cta-content'>
    <p>
      <span className='nextgen__cta-content--bold'>NextGen</span> is a new
      generation of <span className='nextgen__cta-content--bold'>digital</span>{' '}
      and <span className='nextgen__cta-content--bold'>social</span> media
      marketing agency. We are a team of <span className='nextgen__cta-content--bold'>creative</span>{' '}
      and <span className='nextgen__cta-content--bold'>passionate</span> people
      who are dedicated to helping your business grow.
    </p>
    <h3>
      Register today for early access.
    </h3>
    </div>
    <div className='nextgen__cta-btn'>
    <button type='button'>Register</button>
    </div>
    </div>
  )
}

export default CTA