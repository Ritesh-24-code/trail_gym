import React from 'react'
import "animate.css"
import "./index.css"
import Medal from "./assets/medal.png"
import People from "./assets/people.png"
import Members from "./assets/members.png"
import Dumble from "./assets/dumble.png"
const info_bar = () => {
  return (
    <div className='flex justify-center items-center align-middle  -translate-y-10   max-sm:-translate-y-40 animate__animated animate__fadeInRight '>
      <div className='bg-gray-700 w-[80vw] max-sm:w-[90vw] font-[beba] flex   flex-wrap   rounded-2xl justify-evenly items-center align-middle p-2'>
      
        <div className="flex  justify-between items-center align-middle gap-10">
          <div className=' flex justify-center items-center align-middle   '>
            <span className=" text-red-600  flex justify-center  items-center  align-middle">
              <img src={Medal} alt="" className='w-15 h-15 p-2  max-sm:w-12 max-sm:h-12' />
              <div className="grid justify-center gap-0 items-center align-middle p-1">
                <span className='text-[1.75rem] font-[beba]'>
                  5+
                </span>
                <span className='text-white  tracking-wider font-lighter text-[1rem] '>
                  Years Experience
                </span>
              </div>
            </span>
          </div>
          <span className='text-gray-500 font-[bobe] flex max-[800px]:hidden  justify-start items-center align-middle '>
            <hr className='bg-gray-500  text-gray-500  border-gray-500  border-0 w-[1px] h-10' />
          </span>
          <div className=' flex justify-center items-center align-middle '>
            <span className=" text-red-600  flex justify-center  items-center  align-middle">
              <img src={People} alt="" className='w-15 h-15 p-2  max-sm:w-12 max-sm:h-12' />
              <div className="grid justify-center gap-0 items-center align-middle p-1">
                <span className='text-[1.75rem] font-[beba]'>
                  5+
                </span>
                <span className='text-white  tracking-wider font-lighter text-[1rem] '>
                  Expert Trainers
                </span>
              </div>
            </span>
          </div>
        </div>
        <span className='text-gray-500 max-[800px]:hidden font-[bobe] flex   justify-start items-center align-middle '>
          <hr className='bg-gray-500 text-gray-500  border-gray-500  border-0 w-[1px] h-10' />
        </span>
        <div className='flex  justify-between items-center align-middle gap-10'>
          <div className=' flex justify-center items-center align-middle '>
            <span className=" text-red-600  flex justify-center  items-center  align-middle">
              <img src={Members} alt="" className='w-15 h-15 p-2  max-sm:w-12 max-sm:h-12 ' />
              <div className="grid justify-center gap-0 items-center align-middle p-1">
                <span className='text-[1.75rem] font-[beba]'>
                  250+
                </span>
                <span className='text-white  tracking-wider font-lighter text-[1rem] '>
                  Happy Memebers
                </span>
              </div>
            </span>
          </div>
          <span className='text-gray-500 max-[800px]:hidden max-[1082px]:hidden  font-[bobe] flex   justify-start items-center align-middle '>
            <hr className='bg-gray-500 text-gray-500  border-gray-500  border-0 w-[1px] h-10' />
          </span>
          <div className=' flex justify-center items-center align-middle '>
            <span className=" text-red-600  flex justify-center  items-center  align-middle">
              <img src={Dumble} alt="" className='w-15 h-15 p-2  max-sm:w-12 max-sm:h-12 ' />
              <div className="grid justify-center gap-0 items-center align-middle p-1">
                <span className='text-[1.75rem] font-[beba]'>
                  10+
                </span>
                <span className='text-white  tracking-wider font-lighter text-[1rem] '>
                  Fitness Program
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default info_bar
