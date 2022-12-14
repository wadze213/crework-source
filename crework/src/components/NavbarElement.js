import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`

background:#000;
height:80px;
width: 100%;
display:flex;
align-items:center;
justify-content:center;
font-size:1rem;
position: sticky;
top: 0;
z-index:100;

@media screen and (max-width:960px){
  transition:0.8s all ease;
}

`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height:80px;
  z-index:1;
  width:100%;
  padding: 0 24px;
  max-width: 1100px;
 
  `;
export const NavLogo = styled(LinkRouter)`
color: #fff;
justify-item: flex-start;
cursor:pointer;
font-size:1.5rem;
display: flex;
align-items:center;
margin-left:0px;
font-weight:bold;
text-decoration:none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 600px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor:pointer;
  color: #fff;
}
`;

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
gap: 2rem;
/* text-align: center; */


@media screen and (max-width: 600px){
  display: none;
}
`;

export const NavItem = styled.li`
height:80px;
`


export const NavLinks = styled(LinkScroll)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;

&.active{
  border-bottom:3px solid #01bf71;
}
&:hover{
  transition:all 0.2s ease-in-out;
 
  color:#E38910;
}
`;

export const NavLinks2 = styled(LinkRouter)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;
 
&.active{
  border-bottom:3px solid #01bf71;
}
&:hover{
  transition:all 0.2s ease-in-out;
 
  color:#E38910;
}
`;


export const NavBtn = styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:600px){
  display:none;
}
`;

export const NavBtnLink = styled(LinkRouter)`
border-radius:10px;
background:#fff;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
  transition:all 0.2s ease-in-out;
  background:#E38910;
  color:#010606;
}

`

