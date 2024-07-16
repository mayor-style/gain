import React from 'react'
import "./Faq.css"
import FAQ_IMG from "../../images/FAQ_IMG.png"
import { FAQ } from '../../LoopData/Data'
import { FaQuestion } from "react-icons/fa6";

const Faq = () => {
  return (
    <section className='Faq'>
      <div className="FaqSec">
        <div className="left">
          <img src={FAQ_IMG} alt="" />
        </div>
        <div className="right">
      <div className="header">
        <h1>
            Frequently Asked Questions
        </h1>
      </div>
      <div className="content">
       {
        FAQ.map(({question, answer}, index)=>{
           return <div className="FAQcard" key={index}>
            <div className="question">
              <h2>{question}</h2>
              <span><FaQuestion /></span>
            </div>
            <div className="answer">
                <p>{answer}</p>
            </div>
          </div>
        })
       }
       
      </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
