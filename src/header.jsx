import React, { useEffect, useState } from 'react'
import "./index.css"
import "animate.css"
import Name from "./name.jsx"
import Navbar from "./navbar.jsx"
import { Link } from "react-router-dom";
const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] flex justify-between p-2 items-center
                  animate__animated animate__fadeInDown transition-all duration-300
                  ${scrolled
                    ? 'bg-[#030303]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)]'
                    : 'bg-[#030303]'
                  }`}
    >
      <div>
        <Name />
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header