import React from 'react'
import Logo from '../icons/crework-logo.svg'
import './component-styles/navigation.css'

const Navigation = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <img src={Logo} alt=""></img>
        </div>
        <div className='nav'>
            <a href="#">Talent pool</a>
            <a href="#">Join us</a>
        </div>
        <div className='page-nav'>
            <a href="#">Process</a>
            <a href="#">Services</a>
            <a href="#">For clients</a>
            <a href="#">For talent</a>
        </div>
        <div className='admin-panel'>
            <a href="#">How it works</a>
        </div>
    </div>
  )
}

export default Navigation
