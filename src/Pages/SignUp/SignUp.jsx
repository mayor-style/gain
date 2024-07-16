import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const SignUp = () => {
  return (
    <section className='Signup'>
      <Navbar />
     
      <div className="SignupSec">
        <header>
          <div className="headerCon">
            <div className="text">
            <h1>Register</h1>
           <div><Link className='link' to={'/'}><span></span>Home</Link> // Register</div> 
            </div>
         
          </div>
        </header>
          <div className="Signup-Content">
            <div className="header">
              <h2>Register</h2>
            </div>
            <p>Already Have An Account? <Link to={'/Login'} className='login-link'>Login Now</Link></p>
            <form method="post">
              <div className="form-grid">
              <div className="username">
                <label htmlFor="">UserName*</label>
                <input type="text" />
              </div>
           <div className="email">
            <label htmlFor="">Email Address*</label>
            <input type="text" />
           </div>
           <div className="country">
            <label htmlFor="">Country*</label>
            <input type="search"  name="" id="" />
           </div>
           <div className="mobile">
            <label htmlFor="">
              Mobile*
            </label>
            <input type="tel" />
           </div>
           <div className="password">
            <label htmlFor="">Password*</label>
            <input type="password" name="" id="" />
           </div>
           <div className="confirmpass">
            <label htmlFor="">Confirm Password*</label>
            <input type="password" />
           </div>
           </div>
           <div className="last">
           <div className="terms-condition">
            <div> <input type="radio"/></div>
            <div><p>I agree with Privacy Policy, Terms and Services</p></div>
           </div>
           <div>

             <input type="submit" value={"Register"} style={{background:"linear-gradient(90deg, hsl( 258 66% 45%)  36.85%, hsl(258 97% 35%) 60.47%)"  }}/>
           </div>
           </div>
            </form>
            </div>
            </div>
            <Footer/>
    </section>
  )
}

export default SignUp
