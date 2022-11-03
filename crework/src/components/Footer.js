import React from 'react'
import Logo from '../icons/crework-logo-inverted.svg'
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin } from 'react-icons/fa'
import { 
FooterContainer,
FooterWrap,
FooterLinkContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,

SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLinks } from './FooterElement'
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us  </FooterLinkTitle>
                  <FooterLink to='/'>Testimonials</FooterLink>
                  <FooterLink to='/'>Careers</FooterLink>
                  <FooterLink to='/'>Partners</FooterLink>
                  <FooterLink to='/'>Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us </FooterLinkTitle>
                  <FooterLink to='/'>Contact</FooterLink>
                  <FooterLink to='/'>Support</FooterLink>
                  <FooterLink to='/'>SponsorShips</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
              <SocialLogo>
              <img src={Logo} alt=""></img>
              </SocialLogo>
              <SocialIcons>
              <SocialIconLinks href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLinks>
              <SocialIconLinks href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLinks>
              <SocialIconLinks href='/' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLinks>
              <SocialIconLinks href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLinks>
              <SocialIconLinks href='/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLinks>
            </SocialIcons>
              </FooterLinkItems>
             
            </FooterLinksWrapper>
          </FooterLinkContainer>
            <SocialMediaWrap>
              <WebsiteRights> CreWork © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            </SocialMediaWrap>
        </FooterWrap>
      </FooterContainer>
    </div>
  )
}

export default Footer
