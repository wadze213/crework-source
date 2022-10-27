import React from 'react'
import './component-styles/styles.css'
import './component-styles/services.css'
import './component-styles/colors.css';
import designIcon from '../icons/design.svg'
import devIcon from '../icons/dev.svg'
import marketingIcon from '../icons/marketing.svg'

const Services = () => {
  return (
         <section className='services' id='servicesSection'>
        <div className='services-title'>
   
            <h2>WHAT <span className='chunky-underline-orange'>CAN</span> WE DO</h2>
            
            <p className='services-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem.</p>
        </div>
        <div class="services-card-container">
          <div class="servicescard">
            <div class="servicescard-details">
              <div className='servicescard-img'></div>
              <div className='containerIcon'>
              <img src={designIcon} alt=""></img>
                <p class="servicestext-title">Branding & Design</p>
              </div>
                <p class="servicestext-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum .</p>
            </div>
            
          </div>
          <div class="servicescard">
            <div class="servicescard-details">
              <div className='servicescard-img2'></div>
              <div className='containerIcon'>
              <img src={devIcon} alt=""></img>
                <p class="servicestext-title">Web Development</p>
              </div>
              <p class="servicestext-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum .</p>
            </div>
            
          </div>
          <div class="servicescard">
            <div class="servicescard-details">
              <div className='servicescard-img3'></div>
              <div className='containerIcon'>
              <img src={marketingIcon} alt=""></img>
                <p class="servicestext-title">Marketing & Promotion</p>
              </div>
              <p class="servicestext-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum .</p>
            </div>
           
          </div>

          </div>
        
        
        
          <button class="btn-black"> Let's work on your Idea</button>
     
    </section>
  )
}

export default Services
