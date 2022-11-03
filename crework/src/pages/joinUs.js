import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'

const JoinUs = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar togge={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default JoinUs
