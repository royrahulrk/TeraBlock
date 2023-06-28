import React from 'react'
import "./Frequently.css"
import Pluse from "../img/Group 5357.svg"

const Frequently = () => {
  return (
    <>
     <div className='faq'>
        <div className='faq-data'>
            <div className='faq-data-h' >
              <h2><b>FAQs</b></h2>
              <p>Got some queries? We got you covered</p>
            </div>
            <div className='faq-data-q'>
                <div className='faq-data-details'>
                    <h2>Is registration free on TeraBlock?</h2>
                    <p><img src={Pluse} alt="" /></p>
                </div>
                <div className='faq-data-details'>
                    <h2>What do we mean by DeFi?</h2>
                    <p><img src={Pluse} alt="" /></p>
                </div>
                <div className='faq-data-details'>
                    <h2>How does TeraBlock work?</h2>
                    <p><img src={Pluse} alt="" /></p>
                </div>
                <div className='faq-data-details'>
                    <h2>Can I use TeraBlock on my mobile device?</h2>
                    <p><img src={Pluse} alt="" /></p>
                </div>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default Frequently