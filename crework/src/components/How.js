import React from 'react'
import './styles.css'
import './colors.css'

const How = () => {
  return (
    <section className='how'>
        <div className='how-title'>
            <h2>THE PROCESS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.</p>
        </div>

        <div className='card-container'>
            <div className='card'>
                <div className='card-title'>
                    <h1 className='card-number pink-text'>1</h1>
                    <h3 className='card-heading'>CONSULT</h3>
                </div>
                <p className='card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. </p>
            </div>  
            <div className='card'>
                <div className='card-title'>
                    <h1 className='card-number orange-text'>2</h1>
                    <h3 className='card-heading'>KICKOFF</h3>
                </div>
                <p className='card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. </p>
            </div>  
            <div className='card'>
                <div className='card-title'>
                    <h1 className='card-number blue-text'>3</h1>
                    <h3 className='card-heading'>DELIVER</h3>
                </div>
                <p className='card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. </p>
            </div>  
        </div> 
    </section>
  )
}

export default How;