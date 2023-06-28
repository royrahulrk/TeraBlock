import React from 'react'
import "./TeraBlock.css"
import Circle from "../img/RectanglePizz.png"

const TeraBlock = () => {
  return (
    <>
       <div style={{background: "linear-gradient(90deg, #2349C6 0%, #4F72E9 100%)"}}>
          <div className='teraBlock-h'>
            <h2>What makes TeraBlock better?</h2>
          </div>
          <div className='teraBlock'>
            <div>
                <img src={Circle} alt="" />
                <p>Making investing easy.</p>
                <span>Simplest platform to start trading cryptocurrencies with no prior experience.</span>
            </div>
            
            <div><img src={Circle} alt="" /><p>Diversified investing.</p><span>Simplest platform to start trading cryptocurrencies with no prior experience.</span></div>
            <div><img src={Circle} alt="" /><p>Transparent pricing.</p><span>Simplest platform to start trading cryptocurrencies with no prior experience.</span></div>
            <div><img src={Circle} alt="" /><p>Transparent pricing.</p><span>Simplest platform to start trading cryptocurrencies with no prior experience.</span></div>
            <div><img src={Circle} alt="" /><p>Buy crypto instantly.</p><span>Simplest platform to start trading cryptocurrencies with no prior experience.</span></div>
            <div><img src={Circle} alt="" /><p>Non custodial.</p><span>Simplest platform to start trading cryptocurrencies with no prior experience.</span></div>
          </div>

       </div>
       
    </>
  )
}

export default TeraBlock