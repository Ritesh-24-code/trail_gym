import React, { useEffect, useRef } from 'react'
import "./index.css"
import "animate.css"
import Dumble from "./assets/dumble.png"
import Muscle from './assets/muscle (2).png'
import Flame from './assets/flame.png'
import Person from './assets/person.png'

const programs = () => {
         const paraRef = useRef(null)
          const videoRef = useRef(null)
        
          useEffect(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible')
                    observer.unobserve(entry.target) // animate once
                  }
                })
              },
              { threshold: 0.5 }
            )
        
            if (paraRef.current) observer.observe(paraRef.current)
            if (videoRef.current) observer.observe(videoRef.current)
        
            return () => observer.disconnect()
          }, [])
    return (
        <div id='img' className='fade-in-section fade-in-delay' ref={paraRef}>
            <div className=' grid justify-center align-middle items-center text-white  text-center '>
                <span className='text-red-600 text-[1rem] ' >
                    OUR PROGRAMS
                </span>
                <span className="text-[2rem]   font-[beba] tracking-widest ">
                    TRAINING PROGRAMS
                </span>
                <span className='text-[1rem]  text-gray-300' >
                    Choose perfect program that fits your goals and start transforming today.
                </span>
            </div>
            <div className='  py-5 flex flex-wrap    justify-center   align-middle items-center     gap-2'>
                <div className=' grid justify-center items-center align-middle  border-gray-500 border-1 hover:scale-102 transition-all  rounded-2xl max-w-[25%] p-1  max-md:h-[250px]' id='programs_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl" >
                        <span className="">
                            <img src={Dumble} alt="" className=" rotate-225  w-25 h-25  -translate-y-5 " />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]'>
                                STRENGTH TRAINING
                            </span>
                            <span className='text-[0.9rem] w-[12rem] max-md:w-[10rem]   max-sm:w-[9rem] text-gray-400'>
                                Build muscle, increase strength and improve your overall performance.
                            </span>
                        </span>

                    </div>
                    <a href="#" className='w-fit p-1 px-10  max-md:'>
                        <div className='w-fit'>
                            <span className='text-red-600 font-light hover:text-white transition-all  '>
                                Learn&nbsp;More&nbsp;&#10132;
                            </span>
                        </div>
                    </a>
                </div>
                <div className='grid justify-center items-center align-middle  border-gray-500 border-1 hover:scale-102 transition-all  rounded-2xl max-w-[25%] p-1    max-md:h-[250px]' id='programs_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl" >
                        <span className="">
                            <img src={Flame} alt="" className=" w-25 h-20   -translate-y-1 " />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]'>
                                WEIGHT LOSS
                            </span>
                            <span className='text-[0.9rem] w-[12rem]  max-md:w-[10rem] max-sm:w-[9rem] text-gray-400'>
                                Burn fat, boost metabolism and achieve your ideal body weight.
                            </span>
                        </span>

                    </div>
                    <a href="#" className='w-fit p-1 px-10'>
                        <div className='w-fit'>
                            <span className='text-red-600 font-light hover:text-white transition-all  '>
                                Learn&nbsp;More&nbsp;&#10132;
                            </span>
                        </div>
                    </a>
                </div>
                <div className='grid justify-center items-center align-middle  border-gray-500 border-1 hover:scale-102 transition-all  rounded-2xl max-w-[25%] p-1    max-md:h-[250px]' id='programs_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl" >
                        <span className=" w-fit m-0 p-0">
                            <img src={Muscle} alt="" className=" w-25  h-20 -translate-y-3 " />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]'>
                                MUSCLE BUILDING
                            </span>
                            <span className='text-[0.9rem] w-[12rem]  max-md:w-[10rem] max-sm:w-[9rem]  text-gray-400'>
                                Gain lean muscle mass with progressive training and expert guidance.
                            </span>
                        </span>

                    </div>
                    <a href="#" className='w-fit p-1 px-10'>
                        <div className='w-fit'>
                            <span className='text-red-600 font-light hover:text-white transition-all  '>
                                Learn&nbsp;More&nbsp;&#10132;
                            </span>
                        </div>
                    </a>
                </div>
                <div className='grid justify-center items-center align-middle  border-gray-500 border-1 hover:scale-102 transition-all  rounded-2xl max-w-[25%] p-1    max-md:h-[250px]' id='programs_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl" >
                        <span className="">
                            <img src={Person} alt="" className=" w-20 h-25 " id='person' style={{witdh:"px"}} />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]' >
                                PERSONAL TRAINING
                            </span>
                            <span className='text-[0.9rem] w-[12rem]  max-md:w-[10rem] max-sm:w-[10rem]  text-gray-400'>
                                1-on-1 personlized sessions tailored to your specific goals, get your personal trainer.
                            </span>
                        </span>

                    </div>
                    <a href="#" className='w-fit p-1 px-10'>
                        <div className='w-fit'>
                            <span className='text-red-600 font-light hover:text-white transition-all  '>
                                Learn&nbsp;More&nbsp;&#10132;
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default programs
