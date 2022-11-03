import React from 'react'
import { SidebarContainer,Icon,CloseIcon ,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute,SidebarLink2} from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
        
              <SidebarLink to='how' onClick={toggle}>Process</SidebarLink>
           
              <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
           
              <SidebarLink to='clientsSection' onClick={toggle}>For Client</SidebarLink>
          
              <SidebarLink to='join' onClick={toggle}>For Talents</SidebarLink>
           
              <SidebarLink to='about' onClick={toggle}>About</SidebarLink>

              <SidebarLink2 to='talents' onClick={toggle}>TalentPool</SidebarLink2>

              <SidebarLink2 to='join-us' onClick={toggle}>Join Us</SidebarLink2>
            
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='contact-us'>Contact Us</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar
