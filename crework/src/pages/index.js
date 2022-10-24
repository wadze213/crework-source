import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './home';
import Admin from './admin'
import TalentPage from './talentpage';
import JoinUs from './joinUs'
import AdminLogin from './adminLogin';
import Contact from './contact';

const Index = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/talents' element={<TalentPage/>}></Route>
            <Route exact path='/join-us' element={<JoinUs/>}></Route>
            <Route exact path='/contact-us' element={<Contact/>}></Route>
            <Route exact path='/admin-login' element={<AdminLogin/>}></Route>
            <Route exact path='/admin-panel' element={<Admin/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Index
