import React from 'react'
import './Affiliate.css'
import { MdManageAccounts } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import AffiliateImg from "../../images/Affiliate_IMG.png"

const Affiliate = () => {
  return (
    <section className='Affiliate'>
      <div className="AffiliateSec">
        <div className="left">
            <div className="header">
                <h1>Affiliate Program</h1>
              <div className="contentCon">
                <div className="card">
                    <div className="icon">
                        <span>

                    <FaNetworkWired />
                        </span>
                    </div>
                    <div className="content">
                        <h2>Affiliate Networks</h2>
                        <p>Learn content by interacting with an expert and find the problem by with ai.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <span>

                    <MdOutlineSocialDistance />
                        </span>
                    </div>
                    <div className="content">
                        <h2>Amazing Associates</h2>
                        <p>Learn content by interacting with an expert and find the problem by with ai.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <span>

                    <MdManageAccounts />
                        </span>
                    </div>
                    <div className="content">
                        <h2>Affiliate Management</h2>
                        <p>Learn content by interacting with an expert and find the problem by with ai.</p>
                    </div>
                </div>
                </div> 
            </div>
        </div>
        <div className="right">
            <img src={AffiliateImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Affiliate
