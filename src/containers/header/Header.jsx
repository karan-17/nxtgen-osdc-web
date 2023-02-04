import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import nxtgen from '../../assets/nxtgen.png'
const Header = () => {
  return (
    <div className="nextgen__header section__padding" id="home">
      <div className="nextgen__header-content">
        <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="nextgen__header-content__input">
          <input type="email" placeholder="Enter your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="nextgen__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access in last 24 hours</p>
        </div>
      </div>  
      <div className="nextgen__header-image">
          <img src={nxtgen} alt="nxtgen"/>
      </div> 
    </div>
  )
}

export default Header