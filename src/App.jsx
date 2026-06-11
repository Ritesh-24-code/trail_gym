import React, { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import "./index.css"
import Hr from "./hr.jsx"
import Header from "./header.jsx"
import Landing_page from "./landing_page.jsx"
import Info from "./info_bar.jsx"
import About from "./about.jsx"
import Program from "./programs.jsx"
// import Different from "./Facility.jsx"
import Trainers from "./trainers.jsx"
import Plans from "./pricing.jsx"
import Contact from "./ContactSection.jsx"
import Footer from "./footer.jsx"
import Rights from "./rights.jsx"
import Gallery from "./gallery.jsx"
import Timmings from "./timmings.jsx"

const Home = () => (
  <div className="bg-[#0f1113]">
    <div id="Home">

      <Header />
      <Landing_page />
    </div>

    <div id="info_parent">
      <Info />
    </div>

    <About />
    <Hr />

    <div id="programs">
      <Program />
    </div>

    <Hr />
 

    <Hr />
    <div id="Trainers">
      <Trainers />
    </div>

    <Hr />
    <div id="Plans">
      <Plans />
    </div>

    <Hr />
    <div id="Contact">
      <Contact />
    </div>

    <Hr />
    <Footer />

    <Hr />
    <Rights />
  </div>
)

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}

const App = () => {
  return (
    <HashRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timmings" element={<Timmings />} />
      </Routes>
    </HashRouter>
  )
}

export default App
