import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Login = () => {
  return (
    <section className='Login'>  
    <Navbar />
      <div className="LoginSec">
      <header>
          <div className="headerCon">
            <div className="text">
            <h1>Login</h1>
           <div><Link className='link' to={'/'}><span></span>Home</Link> // Login</div> 
            </div>
         
          </div>
        </header>
        
          <div className="Login-Content">
            <div className="header">
              <h2>Login</h2>
            </div>
            <p>Don't Have An Account? <Link to={'/SignUp'} className='login-link'>Create Now</Link></p>
            <form method="post">
              <div className="form-grid">
              <div className="username">
                <label htmlFor="">Username or Email</label>
                <input type="text" />
              </div>
           <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
           </div>
           </div>
           <div className="last">
            <div className="before-submit">
           <div className="terms-condition">
            <div> <input type="radio"/></div>
            <div><p>Remember Me</p></div>
           </div>
           <p>Forgot Your Password?</p>
            </div>
           <div>

             <input type="submit" value={"Login"} style={{ background:"linear-gradient(90deg, hsl( 258 66% 45%)  36.85%, hsl(258 97% 35%) 60.47%)" }}/>
           </div>
           </div>
            </form>
            </div>
            </div>
            <Footer/>
    </section>
  )
}

export default Login
