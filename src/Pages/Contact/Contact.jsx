import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Contact = () => {
  return (
    <section className='contact'>
      <Navbar />
      <div className="contactSec">
         <header>
          <div className="headerCon">
            <div className="text">
            <h1>Contact</h1>
           <div><Link className='link' to={'/'}><span></span>Home</Link> // Contact</div> 
            </div>
         
          </div>
        </header>
      
         
        <div className="contact-Content">
          <div className="left">
          <div className="header">
            <h2>Contact With Us</h2>
          </div>
          <p>If you have any questions or queries that are not answered on our website, please feel free to contact us. We will try to respond to you as soon as possible. Thank you so much.</p>
          <form method="post">
            <input type="text" placeholder='FullName'/>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Enter Subject'/>
           <textarea name="" id="" cols="30" rows="10" placeholder='Write Your Message' style={{background:'transparent', color:'white'}}></textarea>
           <input type="submit" value={"Enter Your Message"} style={{background:"linear-gradient(90deg, hsl( 258 66% 45%)  36.85%, hsl(258 97% 35%) 60.47%)", border:'none', cursor:'pointer' }}/>
          </form>
          </div>
          <div className="right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507364.6608210195!2d2.9549562275632084!3d6.5486304535803574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sbd!4v1720820108628!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
          </div>
        </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Contact
