
import React, { useEffect, useRef } from 'react'
import "./index.css"
import "animate.css"
import Para from "./about_para.jsx"
import Video from "./about_video.jsx"

const About = () => {
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
    <div className='bg-[#0f1113] flex max-[1370px]:gap-5 max-[1370px]:grid justify-center items-center align-middle max-w-[100vw]  'id='About'>
      <div ref={paraRef} className='fade-in-section'>
        <Para />
      </div>
      <div ref={videoRef} className='fade-in-section fade-in-delay'>
        <Video />
      </div>
    </div>
  )
}

export default About