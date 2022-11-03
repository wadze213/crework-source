import React, { useEffect,useState } from 'react'
import { FaBars } from 'react-icons/fa'
import{Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,
  NavItem,NavLinks,NavBtn,NavBtnLink,NavLinks2} from './NavbarElement'
  import Logo from '../icons/crework-logo-inverted.svg'
  import '../components/component-styles/styles.css'

const Navbar = ({toggle}) => {


  return (
    <div>

      <Nav >
        <NavbarContainer>
          <NavLogo to = '/'>
          <img src={Logo} alt=""></img>

          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='how'>Process</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='clientsSection'>For Client</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='join'>For Talents</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks2  to="/talents">TalentPool</NavLinks2>
            </NavItem>
            <NavItem>
              <NavLinks2 to="/join-us">Join Us</NavLinks2>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contact-us'>Contact Us</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
   
    </div>
  )
}

export default Navbar

