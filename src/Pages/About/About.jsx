import React from 'react'
import "./About.css"
import AboutUs from '../../Components/AboutUs/AboutUs'
import Affiliate from '../../Components/Affiliate/Affiliate'
import Process from '../../Components/Process/Process'
import Faq from '../../Components/Faq/Faq'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const About = () => {
  return (
    <section>
       <Navbar />
        <header>
          <div className="headerCon">
            <div className="text">
            <h1>About Us</h1>
           <div><Link className='link' to={'/'}><span></span>Home</Link> // About Us</div> 
            </div>
         
          </div>
        </header>

    <AboutUs/>
    <Affiliate/>
    <Process/>
    <Faq/>    
    <Footer />
    </section>
  )
}

export default About
