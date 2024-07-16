import React from 'react'
import './investment.css'

const investment = () => {
  return (
    <section className='investment'>
        <div className="investmentSec">
            <div className="header">
                <h1>Investment Plans</h1>
            </div>
            <div className="cardCon">
                <div className="card">
                    <div className="head">
                        <p>ROI</p>
                        <h1>6.00%</h1>
                        <h2>Silvesto</h2>
                    </div>
                    <div className="body">
                    <div className="top">
                            <h3>5 Hour</h3>
                            <p>Fixed:$200.00</p>
                    </div>
                    <div className="bottom">
                        <p>Return 6.00%</p>
                        <p>5 Hour</p>
                        <p>Total 30% + <span>Capital</span></p>
                        <p>Compound Interest Available</p>
                        <p>Hold Capital & reinvest</p>

                    </div>
                    <button>Invest Now</button>
                    </div>
                </div>

                <div className="card">
                    <div className="head">
                        <p>ROI</p>
                        <h1>6.00 USD</h1>             
                        <h2>Platinum</h2>
                    </div>
                    <div className="body">
                    <div className="top">
                            <h3>7 Day</h3>
                            <p>Min:$100.00 <br /><span>Max:$5,000.00</span></p>
                    </div>
                    <div className="bottom">
                        <p>Return 6.00 USD</p>
                        <p>7 Day</p>
                        <p>Total 42 USD + <span>Capital</span></p>
                    </div>
                    <button>Invest Now</button>
                    </div>
                </div>

                <div className="card">
                    <div className="head">
                        <p>ROI</p>
                        <h1>2.00 USD</h1>    
                        <h2>Gold</h2>
                    </div>
                    <div className="body">
                    <div className="top">
                            <h3>5 Week</h3>
                            <p>Fixed:$200.00</p>
                    </div>
                    <div className="bottom">
                        <p>Return 2.00 USD</p>
                        <p>5 Week</p>
                        <p>Total 10 USD + <span>Capital</span></p>
                        <p>Hold Capital & reinvest</p>

                    </div>
                    <button>Invest Now</button>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default investment
