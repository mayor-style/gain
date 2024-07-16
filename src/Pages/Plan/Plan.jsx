import React from 'react'
import "./Plan.css"
import {Plans} from '../../LoopData/Data'
import {Link} from'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Plan = () => {
  return (
    <section className='plan'>
      <Navbar />
      <div className="planSec">
      <header>
          <div className="headerCon">
            <div className="text">
            <h1>Plan</h1>
           <div><Link className='link' to={'/'}><span></span>Home</Link> // Plan</div> 
            </div>
         
          </div>
        </header>

        <div className="cardcon yee">
          {
            Plans.map(({percent, type, time, total},index)=>{
          return  <div className="card" key={index}>
              <div className="head">
                <p>ROI</p>
                <h1>{percent}</h1>
                  <h2>{type}</h2>
                      </div>
                    <div className="body">
                      <div className="top">
                        <h3>{time}</h3>
                          <p>Fixed:$200.00</p>
                        </div>
                        <div className="bottom">
                            <p>Return {percent}</p>
                            <p>{time}</p>
                            <p>Total {total} + <span>Capital</span></p>
                            <p>Hold Capital & reinvest</p>
                            </div>
                          <button>Invest Now</button>
                          </div>
                </div>
            
            })
}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Plan
