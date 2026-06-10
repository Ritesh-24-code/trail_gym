import React from 'react'
import "./index.css"
import "animate.css"
import Man from "./man.jsx"
import Para from './para.jsx'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; // remove duplicate Link import
const para = () => {
  return (
    <div id="landing_page" className='bg-black flex justify-evenly items-center   max-[620px]:-translate-y-20 align-middle max-[985px]:justify-start  animate__animated animate__fadeInUp'>
      <div className=' z-40'>
        <Para/>
      </div>
      <div className=' z-10'>
        <Man/>
      </div>
    </div>
  )
}

export default para
