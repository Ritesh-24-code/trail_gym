import React, { useEffect, useRef } from 'react'
import "./index.css"
import "animate.css"
import Equipment from "./assets/equipment.png"
import Trainer from "./assets/trainer.png"
import Clock from "./assets/clock.png"
import Call_care from "./assets/call_care.png"
const different = () => {
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
        <div>
            <div>
                <div className=' grid justify-center align-middle items-center text-white  text-center ' ref={paraRef} >
                    <span className='text-red-600 text-[1rem] ' >
                        WHY CHOOSE US
                    </span>
                    <span className="text-[2rem]    font-[beba]  tracking-wider ">
                        WE ARE DIFFERENT
                    </span>
                </div>
            </div>
            <div className='flex justify-center items-center align-middle   py-5  flex-wrap   max-sm:gap-0 max-sm:py-0  fade-in-section fade-in-delay' ref={paraRef}>
                <div className='grid justify-center items-center align-middle transition-all  rounded-2xl max-w-[25%]    max-md:h-[250px]' id='different_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl">
                        <span className=" w-fit m-0 p-0">
                            <img src={Trainer} alt="" className=" img_different " />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]'>
                                EXPERT TRAINERS
                            </span>
                            <span className='text-[0.9rem] w-[12rem]  max-md:w-[10rem] max-sm:w-[9rem]  text-gray-400'>
                                Certified professionals dedicated to your success.
                            </span>
                        </span>
                    </div>
                </div>
                 <div className='grid justify-center items-center align-middle transition-all  rounded-2xl max-w-[25%]     max-md:h-[250px]' id='different_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl">
                        <span className=" w-fit m-0 p-0">
                            <img src={Equipment} alt="" className="   img_different " />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]'>
                                PREMIUM EQUIPMENT
                            </span>
                            <span className='text-[0.9rem] w-[12rem]  max-md:w-[10rem] max-sm:w-[9rem]  text-gray-400'>
                                World-class equipment for a world-class workout.
                            </span>
                        </span>
                    </div>
                </div>
                 <div className='grid justify-center items-center align-middle transition-all  rounded-2xl max-w-[25%]     max-md:h-[250px]' id='different_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl">
                        <span className=" w-fit m-0 p-0">
                            <img src={Clock} alt="" className="  img_different"  />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]'>
                                FLEXIBLE SCHEDULE
                            </span>
                            <span className='text-[0.9rem] w-[12rem]  max-md:w-[10rem] max-sm:w-[9rem]  text-gray-400'>
                                Workout at your convenience with flexible things.
                            </span>
                        </span>
                    </div>
                </div>
                 <div className='grid justify-center items-center align-middle transition-all  rounded-2xl max-w-[25%]     max-md:h-[250px]' id='different_block'>
                    <div className="text-white flex  justify-center gap-1 items-center align-middle rounded-2xl">
                        <span className=" w-fit m-0 p-0">
                            <img src={Call_care} alt="" className=" img_different " />
                        </span>
                        <span className='py-2 grid justify-center items-center align-middle max-w-fit'>
                            <span className=' w-fit font-[beba] tracking-wider text-[1.3rem] max-md:text-[1rem]'>
                                SUPPORT & GUIDANCE
                            </span>
                            <span className='text-[0.9rem] w-[12rem]  max-md:w-[10rem] max-sm:w-[9rem]  text-gray-400'>
                                
                                We're with you every stp of the way on your journey.
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default different
