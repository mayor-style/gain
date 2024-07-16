import React from 'react'
import './AboutUs.css'
import AboutImg from '../../images/About_IMG.png'
import About1 from '../../images/invest01.png'
import About2 from '../../images/invest02.png'
import {Link} from 'react-router-dom'
const AboutUs = () => {
  return (
    <section className='Main-AboutUs'>
      <div className="AboutUs-Sec">

       

        <div className="top">
            <div>
            <img src={About1} alt="" />
            </div>
            <div>
            <img src={About2} alt="" />
            </div>
        </div>
        <div className="content">
        <div className="left">
            <img src={AboutImg} alt="" />
        </div>
        <div className="right">
          <div className="header"><h2>ABOUT</h2></div>
            <h1>Know More About Us</h1>
            <p>High-Yield Investment Programs (HYIP) are unregistered typically run by unlicensed individuals . The hallmark of an HYIP scam is the promise of incredible returns at little or no risk to the investor.</p>
            <ul>
                <li><span>
             &#10003;</span>Most HYIPs are Ponzi schemes where the organizers take money from new investors to pay returns to established investor.</li>

                <li><span>
             &#10003;</span>Most HYIPs are Ponzi schemes where the organizers take money from new investors to pay returns to established investor.</li>

                <li><span>
            &#10003;</span>Most HYIPs are Ponzi schemes where the organizers take money from new investors to pay returns to established investor.</li>

                <li><span>
            &#10003;</span>Most HYIPs are Ponzi schemes where the organizers take money from new investors to pay returns to established investor.</li>
            </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
