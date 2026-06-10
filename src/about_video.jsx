import React, { useState, useRef } from 'react'
import "./index.css"
import "animate.css"
import Video_1 from "./assets/2.png"
import Img from "./assets/logo.png"

const Video = () => {
    const [showThumbnail, setShowThumbnail] = useState(true)
    const videoRef = useRef(null)

    const handlePlay = () => {
        setShowThumbnail(false)
        videoRef.current?.play()
    }

    return (
        <div className='mx-10 max-md:mx-0 max-md:flex justify-center items-center align-middle' >
            <div id='video' style={{  }}>
                
                {/* Actual video element */}
                <video
                    ref={videoRef}
                    src={Video_1}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                    controls
                />

                {/* Thumbnail overlay — shown until user clicks play */}
                {showThumbnail && (
                    <div
                        onClick={handlePlay}
                        style={{
                            position: 'absolute',
                            top: 25,
                            left: 25,
                            width: '85%',
                            height: '85%',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={Img}
                            alt="Video Thumbnail"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />

                        {/* Play button */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {/* Triangle play icon */}
                            <div style={{
                                width: 0,
                                height: 0,
                                borderTop: '12px solid transparent',
                                borderBottom: '12px solid transparent',
                                borderLeft: '22px solid white',
                                marginLeft: '4px'
                            }} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Video