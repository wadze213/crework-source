import React from 'react'
import './component-styles/styles.css';
import './component-styles/colors.css';
import {useNavigate} from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  let navToJoin = () => {
    navigate('/join-us')
  }
  let navToContact = () => {
    navigate('contact-us')
  }
  return (
    <section>
      <div className='landing-container'>
        <h1>A <span className='chunky-underline-blue'>DYNAMIC</span> AGENCY <br></br> FOR YOUR DYNAMIC <span className='chunky-underline-pink'>NEEDS</span></h1>
        <p className='landing-p'>What do you need ?</p>
        <div className='button-container'>
          <button className='btn-outline' onClick={navToJoin}>Work to do</button>
          <button className='btn-black' onClick={navToContact}>Work done</button>
        </div>
      </div>
    </section>
  )
}

export default Landing
