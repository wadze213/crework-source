import React from 'react'
import './component-styles/styles.css'
import './component-styles/colors.css'
import clientImage from '../images/for-client.png'
import nextIcon from '../icons/next.png'

const Client = () => {
  return (
    <section id='clientsSection'>
        <div className='grid-container'>
          <div className='grid-title'>
            <h2>FOR CLIENTS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet</p>
          </div>
          <div className='grid-image'>
            <img src={clientImage} alt=""></img>
          </div>
          <div className='service-one orange-bg white-text'>
            <h2>FIND<br></br>TALENT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet</p>
            <img src={nextIcon} alt="" className='icon'></img>
          </div>
          <div className='service-two pink-bg white-text'>
              <h2>BROWSE <br></br>PROJECTS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet</p>
              <img src={nextIcon} alt="" className='icon'></img>
          </div>
          <div className='service-three blue-bg white-text'>
              <h2>SEARCH BY <br></br> SERVICES</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet</p>
              <img src={nextIcon} alt="" className='icon'></img>
          </div>
        </div>
    </section>
  )
}

export default Client
