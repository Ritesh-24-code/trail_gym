import React, { useState, useRef } from "react";
import "animate.css";
import "./index.css";

import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Rights from "./rights.jsx";
import Hr from "./hr.jsx";

import Vid1 from "./assets/video1.mp4";
import Vid2 from "./assets/video2.mp4";
import Vid3 from "./assets/video3.mp4";
import Vid4 from "./assets/vid4.mp4";
import Vid5 from "./assets/vid5.mp4";
import Vid6 from "./assets/vid6.mp4";
import Vid7 from "./assets/vid7.mp4";
import Vid8 from "./assets/vid8.mp4";
import Vid9 from "./assets/vid9.mp4";
import Vid10 from "./assets/main (2).mp4";

import Thumb from "./assets/logo.png";
import Img1 from "./assets/gall1.jpg";
import Img2 from "./assets/gall2.jpg";
import Img3 from "./assets/trainer1.png";
import Img4 from "./assets/trainer2.png";
import Img5 from "./assets/trainer3.png";
import Plan from "./assets/banner.png";

const filters = ["all", "strength", "zumba", "training"];

const media = [
  { type: "video", src: Vid1, thumb: Thumb, label: "Cardio Zone", cat: "cardio" },
  { type: "video", src: Vid2, thumb: Thumb, label: "Boxing Area", cat: "zumba" },
  { type: "video", src: Vid3, thumb: Thumb, label: "Treadmill Zone", cat: "strength" },
  { type: "video", src: Vid4, thumb: Thumb, label: "Workout Session", cat: "strength" },
  { type: "video", src: Vid5, thumb: Thumb, label: "Workout Session", cat: "strength" },
  { type: "video", src: Vid6, thumb: Thumb, label: "Workout Session", cat: "cardio" },
  { type: "video", src: Vid7, thumb: Thumb, label: "Workout Session", cat: "cardio" },
  { type: "video", src: Vid8, thumb: Thumb, label: "Workout Session", cat: "cardio" },
  { type: "video", src: Vid9, thumb: Thumb, label: "Powerlifting", cat: "strength" },
  { type: "video", src: Vid10, thumb: Thumb, label: "Powerlifting", cat: "strength" },

  { type: "image", src: Img1, label: "Training Session", cat: "training" },
  { type: "image", src: Img2, label: "Strength Training", cat: "strength" },
  { type: "image", src: Img3, label: "Trainer 1", cat: "training" },
  { type: "image", src: Img4, label: "Trainer 2", cat: "training" },
  { type: "image", src: Img5, label: "Trainer 3", cat: "training" },
  { type: "image", src: Plan, label: "Membership Plan", cat: "training" },
];

const VideoCard = ({ item, onClick }) => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  const stopVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      className="relative aspect-square overflow-hidden rounded-xl border border-gray-800 cursor-pointer group hover:border-red-600 transition-all duration-300 hover:scale-105"
    >
      <img
        src={item.thumb}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition duration-300"
      />

      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-300"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white text-xs tracking-widest uppercase">
          {item.label}
        </span>
      </div>
    </div>
  );
};

const ImageCard = ({ item, onClick }) => (
  <div
    onClick={onClick}
    className="relative aspect-square overflow-hidden rounded-xl border border-gray-800 cursor-pointer group hover:border-red-600 transition-all duration-300 hover:scale-105"
  >
    <img
      src={item.src}
      alt={item.label}
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition">
      <span className="text-white text-xs tracking-widest uppercase">
        {item.label}
      </span>
    </div>
  </div>
);

const Gallery = () => {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "all"
      ? media
      : media.filter((item) => item.cat === active);

  return (
    <div className="min-h-screen bg-[#0f1113] text-white flex flex-col">
      <Header />
      <Hr />

      <main className="flex-1 px-5 py-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            OUR <span className="text-red-600">GALLERY</span>
          </h1>

          <p className="text-gray-500 mt-3 tracking-wider">
            A GLIMPSE INSIDE LEVELUP FITNESS SPOT
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm tracking-widest capitalize transition
              ${
                active === filter
                  ? "bg-red-600 text-white"
                  : "border border-gray-700 text-gray-400 hover:border-red-600 hover:text-red-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((item, index) =>
            item.type === "video" ? (
              <VideoCard
                key={index}
                item={item}
                onClick={() => setLightbox(item)}
              />
            ) : (
              <ImageCard
                key={index}
                item={item}
                onClick={() => setLightbox(item)}
              />
            )
          )}
        </div>
      </main>

      <Hr />
      <Footer />
      <Hr />
      <Rights />
      <Hr />

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-6 text-3xl text-white"
          >
            ×
          </button>

          {lightbox.type === "video" ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              className="max-w-[95%] max-h-[80vh] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="max-w-[95%] max-h-[80vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
            {lightbox.label}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
