import React from 'react'
import "./index.css"
import "animate.css"
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; // remove duplicate Link import

const para = () => {
    return (
        <div className='mx-30 max-md:mx-10  ' id=''>
            <div className=' text-white font-[beba] tracking-widest   grid justify-start items-center align-middle '>
                <div className='text-red-600 p-1  text-[1.5rem] '>
                    <span>
                        ABOUT LEVEL UP
                    </span>
                </div>
                <div className="text-[3rem] p-1 max-[1495px]:text-[2.5rem] max-[1430px]:text-[2rem] max-[1370px]:text-[3rem] max-[600px]:text-[2rem]">
                    <span>
                        YOUR FITNESS <br />
                        JOURNEY STARTS HERE
                    </span>
                </div>
                <div className=' p-1  font-sans tracking-normal text-[1rem] w-[90%] font-light text-gray-300'>
                    <span>
                        At LEVEL UP, we believe fitness is not just about working out-it's about building a lifestyle. Our mission is to help you become the strongest version of yourself.
                    </span>
                </div>
                <div className='p-1  grid justify-start items-center align-middle gap-2 max-md:gap-5'>
                    <span className=''>
                        <span className='text-black p-1 bg-red-600  rounded-full text-[0.6rem]'>
                            &#10004;
                        </span>
                        <span className='text-[1rem] text-gray-200 p-1'>
                            State-of-the-art equipment
                        </span>
                    </span>
                    <span className=''>
                        <span className='text-black p-1 bg-red-600  rounded-full text-[0.6rem]'>
                            &#10004;
                        </span>
                        <span className='text-[1rem] text-gray-200 p-1'>
                            Certified & experienced trainers
                        </span>
                    </span>
                    <span className=''>
                        <span className='text-black p-1 bg-red-600  rounded-full text-[0.6rem]'>
                            &#10004;
                        </span>
                        <span className='text-[1rem] text-gray-200 p-1'>
                            Personlised training programs
                        </span>
                    </span>
                    <span className=''>
                        <span className='text-black p-1 bg-red-600  rounded-full text-[0.6rem]'>
                            &#10004;
                        </span>
                        <span className='text-[1rem] text-gray-200 p-1'>
                            Nutrition guidance & support
                        </span>
                    </span>
                </div>

                <div className="bg-red-600 text-white p-2  m-2 rounded-[8px] hover:text-red-600 hover:bg-white  transition-all w-fit cursor-pointer" >
                    <Link to="/gallery"> {/* ✅ Link handles navigation — no <a> tag needed */}
                        <span className='font-sans p-1'>
                            Learn More
                        </span>
                        <span className='p-1'>
                            &#10132;
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default para
