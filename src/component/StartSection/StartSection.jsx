import React from 'react'
import "./StartSection.css"
import PhoneS from "../img/Hero_Trade2.png"
import Ratangle from "../img/Rectangle.png"
import Ratangle1 from "../img/Rectangle1.png"
import Ratangle2 from "../img/Rectangle2.png"
import Ratangle3 from "../img/Rectangle3.png"
import Ratangle4 from "../img/Rectangle4.png"


const StartSection = () => {
  return (
    <>
      <div className="start-Section">
        <div className="start-Section-left">
          <span>
            <img src={Ratangle} alt="" /> Your crypto in your control
          </span>
          <p className="Section-left-h">Investing in crypto made better</p>
          <p className="Section-left-h-dec">
            Truly decentralised app that gives you the tools, inspiration,and
            support you need to become a better crypto investor.
          </p>
          <div class="Section-left-btn">
            <button className="ui-get">Get Started</button>
            <button className="ui-launch">Launch App</button>
          </div>
          <div className="Section-left-imgs">
            <img src={Ratangle2} alt="" />
            <img src={Ratangle3} alt="" />
            <img src={Ratangle4} alt="" />
            <img src={Ratangle1} alt="" />
          </div>
        </div>
        <div className="Section-left-img">
          <img src={PhoneS} alt="" />
        </div>
      </div>

      <div className="feed">
        <div className="feed-section">
          <p >
             <span>48,187,742</span>
          </p>
          <p >Transaction Volume</p>
        </div>
        <div className="feed-section">
          <>
           
            <span>19,006,055,721</span>
          </>
          <p >Tokens Transacted</p>
        </div>
        <div className="feed-section">
          <p >
            <span>102,592</span>
          </p>
          <p >Secure Transactions</p>
        </div>
        <div className="feed-section">
          <p>
            <span>16,787</span>
          </p>
          <p >Happy Users</p>
        </div>
      </div>
    </>
  );
}

export default StartSection