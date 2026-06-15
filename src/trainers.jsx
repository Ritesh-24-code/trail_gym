import React, { useEffect, useRef } from 'react'
import "./index.css"
import "animate.css"
const trainers = () => {
    const paraRef = useRef(null)

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

        return () => observer.disconnect()
    }, [])
    return (
        <div className='grid justify-center items-center align-middle  p-10' id='trainers_parent'>
            <div>
                <div className='grid    justify-center items-center align-middle'>
                    <div className='  grid justify-center align-middle items-center text-white  text-center ' ref={paraRef} >
                        <span className='text-red-600 text-[1rem] ' >
                            OUR TRAINERS
                        </span>
                        <span className="text-[2rem]    font-[beba]  tracking-wider ">
                            MEET OUR EXPERTS
                        </span>
                    </div>
                </div>
            </div>
            <div className='  flex justify-center items-center align-middle gap-5 p-5 max-lg:flex-wrap  flex-wrap max-w-[100vw]  '>
                <div className='flex justify-center items-center align-middle'>
                    <div className='grid justify-center items-center align-middle border-2   border-gray-700 w-fit rounded-2xl max-sm:w-[90%] ' id='trainer_1'>
                        <div>
                            <div className='w-60 h-70 rounded-2xl border-none' />
                        </div>
                        <div className='flex  justify-center items-center align-middle   '>
                            <div className='text-center backdrop-blur-xs max-sm:backdrop-blur-[3px]  max-sm:mx-3.5 w-full  grid gap-2 py-1  rounded-b-2xl justify-center items-center align-middle text-white' id="name">
                                <span className=''>
                                    JASON LOREM
                                </span>
                                <span className=''>
                                    Strength Coach
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center align-middle'>
                    <div className='grid justify-center items-center align-middle border-2   border-gray-700 w-fit rounded-2xl max-sm:w-[90%] ' id='trainer_2'>
                        <div>
                            <div className='w-60 h-70 rounded-2xl border-none' />
                        </div>
                        <div className='flex  justify-center items-center align-middle   '>
                            <div className='text-center backdrop-blur-xs max-sm:backdrop-blur-[3px]  max-sm:mx-3.5 w-full  grid gap-2 py-1  rounded-b-2xl justify-center items-center align-middle text-white' id="name">
                                <span className=''>
                                    JASON LOREM
                                </span>
                                <span className=''>
                                    Strength Coach
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center align-middle'>
                    <div className='grid justify-center items-center align-middle border-2   border-gray-700 w-fit rounded-2xl max-sm:w-[90%] ' id='trainer_3'>
                        <div>
                            <div className='w-60 h-70 rounded-2xl border-none' />
                        </div>
                        <div className='flex  justify-center items-center align-middle   '>
                            <div className='text-center backdrop-blur-xs max-sm:backdrop-blur-[3px]  max-sm:mx-3.5 w-full  grid gap-2 py-1  rounded-b-2xl justify-center items-center align-middle text-white' id="name">
                                <span className=''>
                                    JASON LOREM
                                </span>
                                <span className=''>
                                    Strength Coach
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
               <div className='flex justify-center items-center align-middle'>
                    <div className='grid justify-center items-center align-middle border-2   border-gray-700 w-fit rounded-2xl max-sm:w-[90%] ' id='trainer_3'>
                        <div>
                            <div className='w-60 h-70 rounded-2xl border-none' />
                        </div>
                        <div className='flex  justify-center items-center align-middle   '>
                            <div className='text-center backdrop-blur-xs max-sm:backdrop-blur-[3px]  max-sm:mx-3.5 w-full  grid gap-2 py-1  rounded-b-2xl justify-center items-center align-middle text-white' id="name">
                                <span className=''>
                                    JASON LOREM
                                </span>
                                <span className=''>
                                    Strength Coach
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='flex justify-center items-center align-middle'>
                    <div className='grid justify-center items-center align-middle border-2   border-gray-700 w-fit rounded-2xl max-sm:w-[90%] ' id='trainer_3'>
                        <div>
                            <div className='w-60 h-70 rounded-2xl border-none' />
                        </div>
                        <div className='flex  justify-center items-center align-middle   '>
                            <div className='text-center backdrop-blur-xs max-sm:backdrop-blur-[3px]  max-sm:mx-3.5 w-full  grid gap-2 py-1  rounded-b-2xl justify-center items-center align-middle text-white' id="name">
                                <span className=''>
                                    JASON LOREM
                                </span>
                                <span className=''>
                                    Strength Coach
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default trainers
