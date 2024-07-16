import React from 'react'
import './Process.css'
import register from '../../images/register.png'
import deposit from '../../images/deposit.png'
import investing from '../../images/investing.png'
import profit from '../../images/profit.png'
import withdraw from '../../images/withdraw.png'


const Process = () => {
  return (
    <section className='process'>
      <div className="processSec">
        <div className="header">
            <h1>5 Simple Steps To Start Investing</h1>
        </div>
        <div className="content">
         <div className="contentcard">
            <img src={register} alt="" />
            <h2>1.Registration</h2>
            </div>   
         <div className="contentcard">
            <img src={deposit} alt="" />
            <h2>2.Deposit</h2>
            </div>   
         <div className="contentcard" >
            <img src={investing} alt="" />
            <h2>3.Investing</h2>
            </div>   
         <div className="contentcard">
            <img src={profit} alt="" />
            <h2>4.Profit</h2>
            </div>   
         <div className="contentcard">
            <img src={withdraw} alt="" />
            <h2>5.Withdraw</h2>
            </div>   
        </div>
      </div>
    </section>
  )
}

export default Process
