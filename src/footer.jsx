import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css"
import "animate.css"
import Log from "./assets/logo.png"
const footer = () => {
    return (
        <div className=''>
            <div className='flex justify-evenly items-start align-middle max-md:grid '>
                <div className='first '>
                    <div className='grid justify-start align-middle items-center gap-5'>
                        <div className='flex justify-center items-center align-middle '>
                            <span className='flex justify-center align-middle'>
                                <Link to="/#Home">
                                    <img src={Log} alt="" className='w-40 h-40' />
                                </Link>
                            </span>
                        </div>
                        <div className='text-white text-[1.2rem] w-55'>
                            <span className='  '>
                                LEVELUP is more than just a gym.It's a community dedicated to helping you best self.
                            </span>
                        </div >
                        <div className="flex justify-center items-center gap-5">

                            {/* WhatsApp */}
                            <a
                                href="https://www.whatsapp.com/channel/0029Vb8QEMQ0G0XaKk8EbF0P"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaWhatsapp
                                    className="
        text-[#25D366]
        text-[2rem]
        hover:scale-110
        transition-all
      "
                                />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/leveluptheelitefitnessclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="
        text-white
        p-3
        text-[2rem] hover:scale-110
        transition-all
      "
                                />
                            </a>

                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className=' flex  justify-center items-center align-middle'>
                        <span className='text-white text-[2rem] font-medium text-center '>
                            QUICK LINKS
                        </span>
                    </div>
                    <div className='flex justify-center items-center align-middle'>
                        <ol className='grid  justify-start items-center align-middle gap-5 p-5 text-center'>
                            <li>
                                <Link to="/#landing_page" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/#About" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/#Trainers" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    Trainers
                                </Link>
                            </li>
                            <li>
                                <Link to="/#programs" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link to="/#Plans" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/#Contact" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/timmings" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    Timings
                                </Link>
                            </li>
                            <li>
                                <Link to="/Gallery" className='text-white text-[1rem] hover:text-red-600 transition-all tracking-wider'>
                                    Gallery
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div>
                    <div className='justify-center items-center align-middle flex'>
                        <span className='text-white text-[2rem] text-center'>
                            PROGRAMS
                        </span>
                    </div>
                    <ol className=' grid justify-center items-center align-middle text-center text-[1rem] text-white gap-5 p-5'>
                        <li>Strength Training</li>
                        <li>Weight Loss</li>
                        <li>Muscle Building</li>
                        <li>Personal Training</li>
                        <li>Yoga & Flexibility</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default footer
