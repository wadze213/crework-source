import React from 'react'
import Landing from '../components/Landing'
import How from '../components/How'
import Services from '../components/Services'
import Client from '../components/Client'
import Join from '../components/Join'
import About from '../components/About'
import Navigation from '../components/Navigation'
import '../components/component-styles/styles.css'

const Home = () => {


    return (
        <main id='container'>
            <Navigation/>
            <Landing/>
            <How/>
            <Services/>
            <Client/>
            <Join/>
            <About/>
        </main>
    )
}

export default Home
