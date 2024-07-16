import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Plan from './Pages/Plan/Plan'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import User_Dashboard from './User/User_Dashboard/User_Dashboard'
import Deposit from './User/deposit/Deposit'

function App() {
 

  return (
    <BrowserRouter>
   
      <Routes>
        <Route path='/'        element={<Home/>}/>
        <Route path='/About'   element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Plan'    element={<Plan/>}/>
        <Route path='/SignUp'   element={<SignUp />}/>
        <Route path='/Login'   element={<Login/>}/>
        <Route path='/User/Dashboard' element={<User_Dashboard />}/>
        <Route path='/deposit' element={<Deposit />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
