import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './home';
import Admin from './admin'
import TalentPool from './talenpool';
import JoinUs from './joinUs'

const Index = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/talents' element={<TalentPool/>}></Route>
            <Route exact path='/join-us' element={<JoinUs/>}></Route>
            <Route exact path='/admin-panel' element={<Admin/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Index
