import React from 'react'
import "./index.css"
import "animate.css"
import {  Link } from 'react-router-dom'; // remove duplicate Link import

const para = () => {
  return (
    <div className="max-[525px]:absolute max-[525px]:top-30">
      <div className="text-red-600 font-[beba] m-2 max-[435px]:gap-8 grid justify-center items-center align-middle text-start">
        <span className='text-[1.2rem] tracking-wide max-[950px]:text-[1.5rem]'>
          BUILD YOUR BODY, BUILD YOUR CONFIDENCE
        </span>
        <div className='grid justify-center text-start items-center align-middle'>
          <span className='text-white text-[4.5rem] max-[1215px]:text-[3.5rem] tracking-wider max-[1055px]:text-[3rem] max-[433px]:text-[2.5rem] max-[433px]:text-[3rem]'>
            DISCIPLINE TODAY
          </span>
          <span className='max-[433px]:text-[2rem] text-[4.5rem] tracking-wider max-[1215px]:text-[3.5rem] max-[1055px]:text-[3rem] max-[433px]:text-[3rem]'>
            STRONG TOMMOROW
          </span>
        </div>
        <span className='text-white font-light tracking-wider text-[1.5rem] max-[1215px]:text-[1rem] max-[1065px]:text-[0.8rem] max-[950px]:text-[1.2rem]'>
          Join LEVELUP FITNESS SPOT and transform your body with <br /> world-class training. Expert trainers and <br />
          premium equipment.
        </span>
      </div>
      <div>
        <div className='m-3 max-[435px]:my-10'>
          <Link to="/gallery"> {/* ✅ Link handles navigation — no <a> tag needed */}
            <span className="bg-red-600 text-white text-[1.3rem] max-[950px]:text-[1rem] font-semibold tracking-wider p-3 rounded hover:bg-white hover:text-red-600 transition-all cursor-pointer">
              Know more
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default para