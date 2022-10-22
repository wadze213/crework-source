import React from 'react'
import './component-styles/styles.css';
import './component-styles/colors.css';

const Landing = () => {
  return (
    <section>
      <div className='landing-container'>
        <h1>A <span className='chunky-underline-blue'>DYNAMIC</span> AGENCY <br></br> FOR YOUR DYNAMIC <span className='chunky-underline-pink'>NEEDS</span></h1>
        <p className='landing-p'>What do you need ?</p>
        <div className='button-container'>
          <button className='btn-outline'>Work to do</button>
          <button className='btn-black'>Work done</button>
        </div>
      </div>
    </section>
  )
}

export default Landing
