import React from 'react'
import "./Footer.css"
import Footerlogo from "../img/logo-white.svg"
import Twitter from "../img/twitter.png"
import Linkedin from "../img/linkedin.png"
import Tel from "../img/telegram.png"
import Arr from "../img/VectorArr.svg"
import Flag from "../img/flagpack_gb-ukm.svg"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div style={{ padding: "5rem" }} className='footerpad'>
          <div className="footer-top">
            <div className="footer-data foot-logo">
              <img src={Footerlogo} alt="" />
            </div>
            <div className="footer-data footer-responsive">
              <h3>TBC Token</h3>
              <div>Stake TBC</div>
              <div>Buy TBC on PancakeSwap</div>
              <div>Buy TBC on FMFW.io</div>
              <div>Buy TBC on HitBTC</div>
              <div>Buy TBC on BSC</div>
            </div>
            <div className="footer-data footer-responsive">
              <h3>Company </h3>
              <div>About</div>
              <div>Careers</div>
              <div>Resources</div>
              <div>Press</div>
              <div>Security</div>
            </div>
            <div className="footer-data footer-responsive">
              <h3>Products </h3>
              <div>Get Started</div>
              <div>Buy</div>
              <div>Coins List</div>
              <div>Earn</div>
              <div>Convert </div>
              <div>Bridge </div>
              <div>Rewards </div>
            </div>

            <div className="footer-data footer-responsive">
              <h3>Support </h3>
              <div>Help Center</div>
              <div>Contacts</div>
              <div>Bug Bounty</div>
              <div>Status</div>
            </div>
            <div className="footer-data footer-responsive">
              <h3>Learn </h3>
              <div>Blog Browse</div>
              <div>Cryptocurrencies </div>
              <div>How to set up a web3 wallet?</div>
              <div>What is DeFi?</div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottam">
          <div className="social">
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Tel} alt="" />
          </div>
          <div className='flag'>
            <img src={Flag} alt="English" style={{marginLeft:"6px"}} />
            <p>English</p>
            <img src={Arr} alt="drop down arrow icon" style={{marginRight:"6px"}} />
          </div>
        </div>
        <div className="footer-bottam-data">
          <div className="data-a">
            This website is operated and maintained by TeraBlock Technologies
            Limited, Terms & Legal Privacy Policy. Unless otherwise specified,
            all return figures shown above are for illustrative purposes only,
            and are not actual customer or model returns. Actual returns will
            vary greatly and depend on personal and market circumstances.
          </div>
          <div className="data-a">
            Investments: Not FDIC Insured • No Bank Guarantee • May Lose Value.
            Investing in Digital Currencies involves risks, and there is always
            the potential of losing money when you invest in Digital Currencies.
            Before investing, consider your investment objectives and TeraBlock’
            charges and expenses. TeraBlock internet-based services are designed
            to assist clients in achieving discrete financial goals. They are
            not intended to provide comprehensive tax advice or financial
            planning with respect to every aspect of a client's financial
            situation and do not incorporate specific investments that clients
            hold elsewhere. Past performance does not guarantee future results,
            and the likelihood of investment outcomes are hypothetical in
            nature. Not an offer, solicitation of an offer, or advice to buy or
            sell Digital Currencies in jurisdictions where TeraBlock is not
            registered.{" "}
          </div>
          <div className="data-a">
            The information provided by TeraBlock is educational only and is not
            investment or tax advice.© TeraBlock Technologies Limited
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer