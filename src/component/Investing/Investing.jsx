import React from "react";
import "./Investing.css";
import Watch from "../img/Layer 20 copy 2 1.png";
import settt from "../img/Layer 19 copy 1.png";
import Box from "../img/Layer 21 1.png";
import Btc from "../img/btc.png"

const Investing = () => {
  return (
    <>
      <div className="">
        <div className="investing-section">
          <h2>
            <b>Investing built for a better future</b>
          </h2>
          <p>
            Whether you're starting with $100 or $100 million, we're here to
            help you better invest in cryptocurrencies.
          </p>
        </div>
      </div>

      {/* ///card */}

      <div className="investing-card">
        <div className="investing-section-bottam">
          <div className="section-bottam-data">
            <img src={Watch} alt="simple logo" />
            <h4>Simplified</h4>
            <p>
              Designed to provide an exceedingly simple user journey, the
              TeraBlock ecosystem can be used by everyone regardless of
              knowledge and skill level.
            </p>
            <p></p>
          </div>
        </div>

        <div className="investing-section-bottam">
          <div className="section-bottam-data">
            <img src={settt} alt="simple logo" />
            <h4>Optimised</h4>
            <p>
              Designed to provide an exceedingly simple user journey, the
              TeraBlock ecosystem can be used by everyone regardless of
              knowledge and skill level.
            </p>
            <p></p>
          </div>
        </div>

        <div className="investing-section-bottam">
          <div className="section-bottam-data">
            <img src={Box} alt="simple logo" />
            <h4>Decentralised</h4>
            <p>
              Designed to provide an exceedingly simple user journey, the
              TeraBlock ecosystem can be used by everyone regardless of
              knowledge and skill level.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      {/* investing chart */}

      <div className="investing-chart-h">
        <h2>
          <b>Buy crypto straight into your Web3 wallet!</b>
        </h2>
        <p>Securely buy, sell, invest, track and transfer cryptocurrencies</p>
      </div>
      <div className="investing-chart-big">
        <div className="chart-big-data">
          <p >Name</p>
          <p >Price</p>
          <p >Change</p>
          <p >Chart</p>
          <p >Trade</p>
          
        </div>
        <hr />



        </div>
        {/* adddata */}
        <div className="investing-chart-big">
        <div className="chart-big-data">
          <div className="chart-coin">
            <div>
              <img src={Btc} alt="Bitcoin" />
            </div>
            <p>Bitcoin</p>
          </div>
          <p>$30,317</p>
          <p>-0.69%</p>
          <p>
            <div>$784,393M</div>
          </p>
          <div>
              <button className="btn-chart">Buy</button>
          </div>
        </div>
      </div>
      <div className="investing-chart-big">
        <div className="chart-big-data">
          <div className="chart-coin">
            <div>
              <img src={Btc} alt="Bitcoin" />
            </div>
            <p>Bitcoin</p>
          </div>
          <p>$30,317</p>
          <p>-0.69%</p>
          <p>
            <div>$784,393M</div>
          </p>
          <div>
              <button className="btn-chart">Buy</button>
          </div>
        </div>
      </div>
      <div className="investing-chart-big">
        <div className="chart-big-data">
          <div className="chart-coin">
            <div>
              <img src={Btc} alt="Bitcoin" />
            </div>
            <p>Bitcoin</p>
          </div>
          <p>$30,317</p>
          <p>-0.69%</p>
          <p>
            <div>$784,393M</div>
          </p>
          <div>
              <button className="btn-chart">Buy</button>
          </div>
        </div>
      </div>
      <div className="investing-chart-big">
        <div className="chart-big-data">
          <div className="chart-coin">
            <div>
              <img src={Btc} alt="Bitcoin" />
            </div>
            <p>Bitcoin</p>
          </div>
          <p>$30,317</p>
          <p>-0.69%</p>
          <p>
            <div>$784,393M</div>
          </p>
          <div>
              <button className="btn-chart">Buy</button>
          </div>
        </div>
      </div>
      <div className="investing-chart-big">
        <div className="chart-big-data">
          <div className="chart-coin">
            <div>
              <img src={Btc} alt="Bitcoin" />
            </div>
            <p>Bitcoin</p>
          </div>
          <p>$30,317</p>
          <p>-0.69%</p>
          <p>
            <div>$784,393M</div>
          </p>
          <div>
              <button className="btn-chart">Buy</button>
          </div>
        </div>
      </div>
      <div className="investing-chart-big">
        <div className="chart-big-data">
          <div className="chart-coin">
            <div>
              <img src={Btc} alt="Bitcoin" />
            </div>
            <p>Bitcoin</p>
          </div>
          <p>$30,317</p>
          <p>-0.69%</p>
          <p>
            <div>$784,393M</div>
          </p>
          <div>
              <button className="btn-chart">Buy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investing;
