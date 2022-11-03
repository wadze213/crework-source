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
              <NavLinks2  to="/talents">Talent Pool</NavLinks2>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/join-us">Join Us</NavBtnLink>
            </NavBtn>
          <NavBtn>
            <NavBtnLink to='/contact-us'>Contact Us</NavBtnLink>
          </NavBtn>
          </NavMenu>
          
          
        </NavbarContainer>
      </Nav>
   
    </div>
  )
}

export default Navbar

