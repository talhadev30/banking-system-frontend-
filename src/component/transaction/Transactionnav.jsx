import { X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Togglebutton from '../Dashboard/Togglebutton'

const Transactionnav = () => {
  return (
    <nav className='flex items-center justify-between p-5 md:px-10 py-5 font-[SpaceGrotesk]'>
          <div className='flex items-center gap-2'>
            <Link to={"/dashboard"} className='active:scale-95 h-14 w-14 bg-black/15 backdrop-blur-3xl flex items-center justify-center rounded-2xl uppercase text-2xl font-bold '>
              <X/>
            </Link>
            <div className='flex flex-col'>
              <span className='text-xl text-shadow-gray-400 tracking-tight font-extrabold'>Transfer Money</span>
              <span className='text-xs font-bold tracking-tight capitalize'>Fast, secure transfers</span>
            </div>
          </div>
        </nav>
  )
}

export default Transactionnav