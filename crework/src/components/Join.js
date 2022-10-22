import React from 'react'
import './component-styles/styles.css'
import talent from '../images/talent_3.png'
import '../components/component-styles/join.css'

const Join = () => {
  return (
    <section className='join'>
      <div className='joinContainer'>
          <div>
          <h1 className='joinTitle'>FOR TALENTS</h1>
          <img src={talent} alt=""></img>
          </div>
          <div >
            <div className='joinBox'>
              <div className='joinOrange '>
                <h2>WORK LIFE BALANCE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem </p>
                
              </div>
              <div className='joinPink'>
                  <h2>CURATED WORK</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem </p>
                
              </div>
              <div className='joinBlue '>
                  <h2>ALWAYS ON TIME</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem</p>
                  
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Join
