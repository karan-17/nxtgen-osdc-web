import React from 'react'
import './brand.css'
import {google, slack, github, instagram, facebook, twitter, youtube} from './import' 

const Brand = () => {
  return (
    <div className='nextgen__brand section__padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={slack} alt='slack' />
      </div>
      <div>
        <img src={github} alt='github' />
      </div>
      <div>
        <img src={instagram} alt='instagram' />
      </div>
      <div>
        <img src={facebook} alt='facebook' />
      </div>
      <div>
        <img src={twitter} alt='twitter' />
      </div>
      <div>
        <img src={youtube} alt='youtube' />
      </div>
    </div>
  )
}

export default Brand