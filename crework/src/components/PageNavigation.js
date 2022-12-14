import React from 'react'
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

const PageNavigation = (prop) => {
  return (
    <div className='nav-container'>
        <div className='page-nav'>
            <StyledSrollLink to='howSection' smooth={true} duration={500} containerId="homeContainer">The process</StyledSrollLink>
            <StyledSrollLink to='servicesSection' smooth={true} duration={500}containerId="homeContainer">Our services</StyledSrollLink>
            <StyledSrollLink to='clientsSection' smooth={true} duration={500}containerId="homeContainer">For clients</StyledSrollLink>
            <StyledSrollLink to='talentSection' smooth={true} duration={500}containerId="homeContainer">For talent</StyledSrollLink>
            <StyledSrollLink to='aboutSection' smooth={true} duration={500}containerId="homeContainer">About</StyledSrollLink>
        </div>
        <div className='admin-panel'>
            <StyledLink to="/admin-login">Admin</StyledLink>
        </div>
    </div>
  )
}

export default PageNavigation
