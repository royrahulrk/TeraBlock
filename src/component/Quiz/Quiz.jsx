import React from 'react'
import "./Quiz.css"
import Bag from "../img/Rectangleq1.png" 
import SearchIcon from "../img/Rectangleq2.png"
import Umbrella from "../img/Rectangleq3.png"
import collage from "../img/Rectangleq.png"

const Quiz = () => {
  return (
    <>
     <div className='quiz'>
        <div className='quiz-h'>
            <h1>Want to know how you can make the most of crypto investments? Take our quiz</h1>
        </div>
        <div className='quiz-card'>
            <div >
               <img src={collage} alt="" />
               <p>I’m a student</p>
               <span>Continue</span>
            </div>
            <div >
            <img src={Bag} alt="" />
            <p>I’m working</p>
               <span>Continue</span>
            </div>
            <div>
            <img src={SearchIcon} alt="" />
            <p>I’m unemployed</p>
               <span>Continue</span>
            </div>
            <div>
            <img src={Umbrella} alt="" />
             <p>I’m retired</p>
               <span>Continue</span>
            </div>
        </div>
     </div>



    </>
  )
}

export default Quiz