import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {navLinks} from '../../LoopData/Data'
import { RiMenuLine } from "react-icons/ri";
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
      <div className="Navbar">
        <div className="left">
          <Link to='/'>
          <h1>GAIN<span>GLOBE</span></h1>
          </Link>
        </div>

        <div className="middle">
          <ul>
            {navLinks.map(({path, name}, index)=>{
              return <li key={index}><NavLink to={path} className="links">{name}</NavLink></li>
            })}
          </ul>
        </div>
        
        <div className="right">
          <Link to={'/SignUp'}><button>Register</button></Link>
            <Link to={'/Login'}> <button>Login</button></Link>
           
        </div>
        <div className="hamburgerIcon">
        <RiMenuLine />
        </div>
      </div>
    
    </nav>
  )
}

export default Navbar
