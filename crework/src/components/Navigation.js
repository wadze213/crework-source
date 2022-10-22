import React from 'react'
import Logo from '../icons/crework-logo.svg'
import './component-styles/navigation.css'
import {Link as RouterLink} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
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
const StyledSrollLink = styled(ScrollLink)`
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
            <img src={Logo} alt=""></img>
        </div>
        <div className='nav'>
            <StyledLink to="/talents">Talent pool</StyledLink>
            <StyledLink to="/join-us">Join us</StyledLink>
        </div>
        <div className='page-nav'>
            <StyledSrollLink to='howSection' smooth={true} duration={500}>The process</StyledSrollLink>
            <StyledSrollLink to='servicesSection' smooth={true} duration={500}>Our services</StyledSrollLink>
            <StyledSrollLink to='clientsSection' smooth={true} duration={500}>For clients</StyledSrollLink>
            <StyledSrollLink to='talentSection' smooth={true} duration={500}>For talent</StyledSrollLink>
            <StyledSrollLink to='aboutSection' smooth={true} duration={500}>About</StyledSrollLink>
        </div>
        <div className='admin-panel'>
            <StyledLink to="/admin-panel">Admin</StyledLink>
        </div>
    </div>
  )
}

export default Navigation
