import React from 'react'
import './component-styles/styles.css'
import './component-styles/about.css'
import './component-styles/colors.css'
import {FaGithub} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {FaDownload} from "react-icons/fa";

import { IconButton, Tooltip } from '@mui/material';


const About = () => {
  return (
    <section className='about' id='aboutSection'>
        <div className='aboutTitle'>
          <h2 className='chunky-underline-blue'>ABOUT</h2>
          <p className='aboutContent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        </div>
        <div className='aboutContainer'>
          <div class="aboutCard">
          <div class="blob"></div>
            <span class="img"></span>
            <p>
              
            <div > <Tooltip title="Github" placement="top"><IconButton className='github'><FaGithub/></IconButton></Tooltip></div>
              <div > <Tooltip title="Portfolio" placement="top"><IconButton className='profile'><FaUser/></IconButton></Tooltip></div>
              <div > <Tooltip title="Download" placement="top"><IconButton className='download'><FaDownload/></IconButton></Tooltip></div>
            </p>
            <h2>Glenn Zaballero<br></br><span>Co-founder</span></h2>
          </div>
          <div class="aboutCard">
          <div class="blob"></div>
            <span class="img"></span>
            <p>
              
            <div > <Tooltip title="Github" placement="top"><IconButton className='github'><FaGithub/></IconButton></Tooltip></div>
              <div > <Tooltip title="Portfolio" placement="top"><IconButton className='profile'><FaUser/></IconButton></Tooltip></div>
              <div > <Tooltip title="Download" placement="top"><IconButton className='download'><FaDownload/></IconButton></Tooltip></div>
            </p>
            <h2>Glenn Zaballero<br></br><span>Co-founder</span></h2>
          </div>
        </div> 
    </section>
  )
}

export default About
