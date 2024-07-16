import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <div className="footerSec">
        <div className="top-footer">
          <div className="gain-globe">
            <div className="logo">
              <h1>GAIN<span>GLOBE</span></h1>
            </div>
            <p>Gain <span>Globe</span> is the talk of the town Platform consectetur adipisicing elit. Perferendis blanditiis eum ipsam excepturi ducimus.</p>
          </div>
          <div className="site-link">
            <h2>Site Link</h2>
            <div className="links">
              <Link to={'/'} className='link'>Home</Link>
              <Link to={'/privacy'} className='link'>Privacy Policy</Link>
              <Link to={'/Terms'} className='link'>Terms and Service</Link>
            </div>
          </div>
          <div className="important-link">
            <h2>Important Link</h2>
            <div className="links">
              <Link to={'/Plan'} className='link'>Plan</Link>
              <Link to={'/About'} className='link'>About</Link>
              <Link to={'/Contact'} className='link'>Contact Us</Link>
            </div>
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="info">
              <div className="tel">
                <span>&#x260E; </span> <p>
                +234 5678 9000 </p>
              </div>
              <div className="mail">
                <span> &#x1F4E7;</span> demo@example.com
              </div>
              <div className="address">
                <span></span> 3015 Suit Pagla road, Lagos
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>&copy; 2024 GAIN<span>GLOBE</span> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
