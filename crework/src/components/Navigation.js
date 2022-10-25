import React from 'react'
import Logo from '../icons/crework-logo.svg'
import './component-styles/navigation.css'
import {Link as RouterLink} from 'react-router-dom';
import styled from 'styled-components';;

const StyledLink = styled(RouterLink)`
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 1.5rem;
    &:hover{
        text-decoration: underline;
    }
    &:active{
        font-weight: 700;
        text-decoration: underline;
    }
`;

const Navigation = (prop) => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <StyledLink to='/'><img src={Logo} alt=""></img></StyledLink>
        </div>
        <div className='nav'>
            <StyledLink to="/talents">Talent pool</StyledLink>
            <StyledLink to="/join-us">Join us</StyledLink>
            <StyledLink to="/contact-us">Contact us</StyledLink>
        </div>
    </div>
  )
}

export default Navigation
