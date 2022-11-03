import React from 'react'
import Landing from '../components/Landing'
import How from '../components/How'
import Services from '../components/Services'
import Client from '../components/Client'
import Join from '../components/Join'
import About from '../components/About'
import '../components/component-styles/styles.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <main id='homeContainer'>
            <Navbar togge={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Landing/>
            <How name="howSection" id="howSection"/>
            <Services name="servicesSection" id="servicesSection"/>
            <Client name="clientsSection" id="clientsSection"/>
            <Join name="talentSection" id="talentSection"/>
            <About name="aboutSection" id="aboutSection"/>
            <Footer/>
        </main>
    )
}

export default Home
