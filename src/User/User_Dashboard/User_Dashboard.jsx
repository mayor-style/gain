import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const   User_Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className="dashboardSec">
          <aside className='left'>
            <header>
              <h1>GAIN<span>GLOBE</span></h1>
            </header>
            <div className="content">
              <h2>Account Balance</h2>
              <div className="deposit_bal">
              <p>Deposit Wallet</p>
              <h2>10.00 USD</h2>
              </div>
              <div className="wallet_bal">
                <p> Interest Wallet</p>
                <h2>0.00 USD</h2>
              </div>
              <div className="btns">
                <Link to={'/user/Deposit'}><button>Deposit</button></Link>
              <Link to={'/user/Withdraw'}>  <button>Withdraw</button> </Link>
              </div>
          
              <Link to={'/user/dashboard'} className='dash_link'>
              <div className="footer">
                Dashboard
              </div>
              </Link>
            </div>
          </aside>

          <div className="right">
            <header>
              <div className="left_header">
              <h1>Dashboard</h1>
              </div>
              <div className="right_header">
                <div className="userDP">
                  <p>UN</p>
                </div>
                <div className="userInfo">
                  <p>User Nmme</p>
                  <h2>[Email Is Protected For The Demo]</h2>
                </div>
              </div>
            </header>

            <div className="content">
              <div className="firstCardCon">
                <div className="Card">
                  <div className="top">
                    <div className="icon"></div>
                    <div className="text">
                      <p>Total Deposit</p>
                      <h2>0.00 USD</h2>
                    </div>
                  </div>
                  <div className="bottom">
                    <div><p>Submitted</p>
                    <h3>$0.00</h3>
                    </div>
                    <div><p>Pending</p>
                    <h3>$0.00</h3>
                    </div>
                    <div><p>Rejected</p>
                    <h3>$0.00</h3>
                    </div>
                  </div>
                </div>
                <div className="Card">
                  <div className="top">
                    <div className="icon"></div>
                    <div className="text">
                      <p>Total Deposit</p>
                      <h2>0.00 USD</h2>
                    </div>
                  </div>
                  <div className="bottom">
                    <div><p>Submitted</p>
                    <h3>$0.00</h3>
                    </div>
                    <div><p>Pending</p>
                    <h3>$0.00</h3>
                    </div>
                    <div><p>Rejected</p>
                    <h3>$0.00</h3>
                    </div>
                  </div>
                </div>
                <div className="Card">
                  <div className="top">
                    <div className="icon"></div>
                    <div className="text">
                      <p>Total Deposit</p>
                      <h2>0.00 USD</h2>
                    </div>
                  </div>
                  <div className="bottom">
                    <div><p>Submitted</p>
                    <h3>$0.00</h3>
                    </div>
                    <div><p>Pending</p>
                    <h3>$0.00</h3>
                    </div>
                    <div><p>Rejected</p>
                    <h3>$0.00</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lastCardCon">
                <div className="Card">
                  <div className="heading">
                  <h2>My Investment Progress</h2>
                  </div>
                  <div className="content">
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="Card">
                  <div className="heading">
                  <h2>My Investment Progress</h2>
                  </div>
                  <div className="content">
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="Card">
                  <div className="heading">
                  <h2>My Investment Progress</h2>
                  </div>
                  <div className="content">
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="main">
                    <div>
                      <div className="icon"></div>
                      <div className="txt">
                      <p>Total Investment</p>
                      <span>100% Inestment is 0.00</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

        </div>

       
    </section>
  )
}

export default User_Dashboard
