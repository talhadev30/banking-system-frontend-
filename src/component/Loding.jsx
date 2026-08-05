import React from 'react'

const Loding = () => {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 w-full h-full bg-white/70 -translate-y-2/4 flex flex-col justify-center items-center">
      <div className="w-full gap-x-2 flex justify-center items-center">
        <div
          className="w-5 bg-[#d991c2] h-5 rounded-full animate-bounce"
        ></div>
        <div
          className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full"
        ></div>
        <div
          className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full"
        ></div>
      </div>
    </div>
  )
}

export default Loding