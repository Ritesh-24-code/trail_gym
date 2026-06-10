import React from 'react'
import "./index.css"
import "animate.css"
import Man from "./assets/man1.png"
const para = () => {
  return (
    <div>
      <div>
        <img src={Man} alt="" className=" h-[70vh]  -translate-x-10 max-[985px]:absolute top-1 right-0 max-[530px]:top-40 max-[530px]:left-10
        max-[530px]:h-[70vh]  " />
      </div>
    </div>
  )
}

export default para
