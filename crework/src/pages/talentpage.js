import React from 'react'
import TalentPool from '../components/TalentPool'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'

const TalentPage = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <div>
        <Navbar togge={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <TalentPool/>
        <Footer/>
    </div>
  )
}

export default TalentPage
