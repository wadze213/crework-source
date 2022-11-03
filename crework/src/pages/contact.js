import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'

const Contact = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar togge={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
