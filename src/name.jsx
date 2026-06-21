import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
 import "animate.css"
import  logo from "./assets/logo.png" 
const name = () => {
  return (
    <div className=" animate__animated animate__fadeInLeft">
      <div className='flex justify-center items-center align-middle gap-5 '>
        <Link to="/#Home">
            <img src={logo} alt=""  className="w-20 h-20 "/>
        </Link>
        <span className='text-white font-[beba] max-sm:text-[1.5rem] text-[2rem] max-[1140px]:text-[1.5rem]  max-[1070px]:text-[1rem] max-[950px]:text-[2rem]'>
          LEVEL UP FITNESS SPOT
        </span>
      </div>
    </div>
  )
}

export default name
