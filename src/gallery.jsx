import React, { useState, useRef } from 'react'
import 'animate.css'
import "./index.css"
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Rights from "./Rights.jsx"
import Hr from "./hr.jsx"
// ❌ removed: import { div } from 'three/src/nodes/math/OperatorNode.js'

const media = [
  { type: "image", src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80", label: "Weight Training", cat: "strength" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80", label: "Cardio Zone", cat: "cardio" },
  { type: "image", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", label: "Gym Floor", cat: "strength" },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4", thumb: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&q=80", label: "Boxing Area", cat: "boxing" },
  { type: "image", src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80", label: "Training Session", cat: "training" },
  { type: "image", src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80", label: "Strength Training", cat: "strength" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80", label: "Treadmill Zone", cat: "cardio" },
  { type: "image", src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80", label: "Personal Training", cat: "training" },
  { type: "image", src: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=400&q=80", label: "Combat Sports", cat: "boxing" },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4", thumb: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80", label: "Powerlifting", cat: "strength" },
  { type: "image", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", label: "Spin Class", cat: "cardio" },
  { type: "image", src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", label: "Group Session", cat: "training" },
]

const filters = ["all", "strength", "cardio", "boxing", "training"]

const VideoCard = ({ item, onClick }) => {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  // ✅ VideoCard only returns the card — no Header here
  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group aspect-square rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 hover:scale-105 transition-all duration-300 cursor-pointer animate__animated animate__fadeIn"
    >
      <img
        src={item.thumb}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
      />
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="absolute top-2 right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center z-10">
        <svg className="w-3 h-3 text-white fill-white" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 z-10">
        <span className="text-white text-[10px] tracking-widest font-semibold uppercase">
          {item.label}
        </span>
      </div>
    </div>
  )
}

const ImageCard = ({ item, onClick }) => (
  <div
    onClick={onClick}
    className="relative group aspect-square rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 hover:scale-105 transition-all duration-300 cursor-pointer animate__animated animate__fadeIn"
  >
    <img
      src={item.src}
      alt={item.label}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
      <span className="text-white text-[10px] tracking-widest font-semibold uppercase">
        {item.label}
      </span>
    </div>
  </div>
)

const Gallery = () => {
  const [active, setActive] = useState("all")
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === "all" ? media : media.filter(i => i.cat === active)

  return (
    // ✅ Single root div wrapping everything including Header and Footer
    <div className="min-h-screen bg-[#0f1113] flex flex-col">

      <Header />
      <Hr />

      <div className="px-6 py-10 flex-1">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-white text-[2.5rem] font-[beba] tracking-widest">
            OUR <span className="text-red-600">GALLERY</span>
          </h1>
          <p className="text-gray-500 text-sm tracking-widest mt-1">
            A GLIMPSE INSIDE LEVELUP FITNESS SPOT
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-widest border transition-all duration-200 capitalize
                ${active === f
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-transparent border-gray-700 text-gray-400 hover:border-red-600 hover:text-red-600"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {filtered.map((item, i) =>
            item.type === "video"
              ? <VideoCard key={i} item={item} onClick={() => setLightbox(item)} />
              : <ImageCard key={i} item={item} onClick={() => setLightbox(item)} />
          )}
        </div>
      </div>

      <Hr />
      <Footer />
      <Hr />
<Rights/>

      <Hr />

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center gap-4 animate__animated animate__fadeIn"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-5 text-white text-2xl bg-transparent border-none cursor-pointer z-50"
          >
            ✕
          </button>
          {lightbox.type === "video" ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              className="max-w-[90%] max-h-[75vh] rounded-lg"
              onClick={e => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.src.replace("w=400", "w=1200")}
              alt={lightbox.label}
              className="max-w-[90%] max-h-[75vh] rounded-lg object-contain"
            />
          )}
          <p className="text-gray-400 text-xs tracking-widest uppercase">{lightbox.label}</p>
        </div>
      )}
    </div>
  )
}

export default Gallery