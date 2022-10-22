import React from 'react'
import './component-styles/styles.css'
import './component-styles/services.css'
import './component-styles/colors.css';

const Services = () => {
  return (
         <section className='services'>
        <div className='services-title'>
   
            <h2>WHAT <span className='chunky-underline-orange'>CAN</span> WE DO</h2>
            
            <p className='services-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        </div>
        <div class="services-card-container">
          <div class="servicescard">
            <div class="servicescard-details">
              <div className='servicescard-img'></div>
              <p class="servicestext-title">Branding & Design</p>
              <p class="servicestext-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum .</p>
            </div>
            
          </div>
          <div class="servicescard">
            <div class="servicescard-details">
              <div className='servicescard-img2'></div>
              <p class="servicestext-title">Full Stack Web Dev.</p>
              <p class="servicestext-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum .</p>
            </div>
            
          </div>
          <div class="servicescard">
            <div class="servicescard-details">
              <div className='servicescard-img3'></div>
              <p class="servicestext-title">Marketing & Promotion</p>
              <p class="servicestext-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum .</p>
            </div>
           
          </div>

          </div>
        
        
        
          <button class="cssbuttons-io-button"> Let's work on your Idea
  <div class="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
     
    </section>
  )
}

export default Services
