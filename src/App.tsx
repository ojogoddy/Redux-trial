import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Logout from './Pages/Logout'
import Header from './component/Header'

const App = () => {
  return (
    <div>
      <Router>
        <div className="">
          <Header/> 
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/logout' element={<Logout/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App