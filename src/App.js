import React from 'react'
import "./App.css"
import Navbar from './component/Navbar/Navbar'
import StartSection from "./component/StartSection/StartSection"
import Investing from './component/Investing/Investing'
import Footer from './component/Footer/Footer'
import Frequently from './component/Frequently/Frequently'
import Quiz from './component/Quiz/Quiz'
import Slider from './component/Slider/Slider'
import TeraBlock from './component/TeraBlock/TeraBlock'

const App = () => {
  return (
    <>
    <Navbar/>
    <StartSection/>
    <Investing/>
    <Slider/>
    <Quiz/>
    <TeraBlock/>
    <Frequently/>
    <Footer/>
     
    </>
  )
}

export default App