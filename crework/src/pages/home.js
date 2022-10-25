import React from 'react'
import Landing from '../components/Landing'
import How from '../components/How'
import Services from '../components/Services'
import Client from '../components/Client'
import Join from '../components/Join'
import About from '../components/About'
import Navigation from '../components/Navigation'
import PageNavigation from '../components/PageNavigation'
import '../components/component-styles/styles.css'

const Home = () => {
    return (
        <main id='homeContainer'>
            <Navigation/>
            <PageNavigation/>
            <Landing/>
            <How name="howSection" id="howSection"/>
            <Services name="servicesSection" id="servicesSection"/>
            <Client name="clientsSection" id="clientsSection"/>
            <Join name="talentSection" id="talentSection"/>
            <About name="aboutSection" id="aboutSection"/>
        </main>
    )
}

export default Home
