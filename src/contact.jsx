import React from 'react'
import "./index.css"
import "animate.css"
const contact = () => {
    return (
        <div className='flex justify-center items-center align-middle'>
            <div  className='border-gray-600 rounded-2xl  border-1   w-[80vw]' >

                <div className=' p-5 grid justify-center align-middle items-center text-white  text-center ' >
                    <span className='text-red-600 text-[1rem] ' >
                        CONTACT US
                    </span>
                    <span className="text-[2rem]    font-[beba]  tracking-wider ">
                        GET IN TOUCH
                    </span>
                </div>
                <div className='flex p-5  justify-center items-center align-middle'>
                    <div className=' flex  justify-center items-center align-middle gap-50'>
                        <div className='grid justify-center items-center align-middle gap-5'>
                            <div className='grid  justify-center  items-center align-middle'> 
                                <span className='text-red-600 text-[1.5rem]'>
                                    &#128222; <span className='text-white text-[1.2rem]'>Phone</span> 
                                </span>
                                <span className='text-white'>
                                   +91 9509106422
                                </span>
                            </div>
                            <div>
                                <span className='text-red-600 text-[1.5rem]'>
                                    &#9993;
                                </span>
                                <span className='text-white'>
                                    +91 9509106422
                                </span>
                            </div>
                        </div>
                        <div className='grid justify-center items-center align-middle gap-5'>
                            <div>
                                <span className='text-red-600 text-[1.5rem]'>
&#128205;
                                </span>
                                <span className='text-white'>
                                    +91 9509106422
                                </span>
                            </div>
                            <div>
                                <span className='text-red-600 text-[1.5rem]'>
         &#x1F550;                           
                                </span>
                                <span className='text-white'>
                                    +91 9509106422
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
