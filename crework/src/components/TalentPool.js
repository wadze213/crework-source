import React from 'react'
import TalentCard from './TalentCard'


const TalentPool = () => {
  return (
    <div className='talentpool-container'>
        <div className='talent-pool-title'>
        <p>A crew of the best remote talent around.</p>
        <h2>CONNECTING OUTSTANDING <br></br> <span className='chunky-underline-blue'>REMOTE TALENT</span> WITH THE MOST<br></br> INNOVATIVE <span className='chunky-underline-pink'>COMPANIES</span></h2>
        </div>
        

        <div className='featured-talent-container'>
            <h3>FEATURED TALENTS</h3>
            <div style={{padding: "50px"}}></div>
            <TalentCard/>
        </div>
      
    </div>
  )
}

export default TalentPool
