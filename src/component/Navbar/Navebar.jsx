import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-25  text-white relative px-5">
      <div className='flex items-center gap-2  justify-center'>
        <div className='p-5 btn-color rounded-full'></div>
        <span className='text-lg font-bold tracking-tight font-sans'>AFD</span>
      </div>
      <div className="flex justify-between items-center gap-3">
        <Link to={'/signin'} className="text-white/70 hover:text-white px-4 py-2 rounded-full text-sm">Sign In</Link>
        <Link to={'/register'} className="btn-color btn text-white px-3 py-2 rounded-2xl text-sm ">Get Started</Link>
      </div>
    </nav>
  )
}

export default Navbar
