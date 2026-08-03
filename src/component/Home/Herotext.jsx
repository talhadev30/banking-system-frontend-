import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Herotext = () => {
    return (
        <div className='py-10 flex items-start justify-start lg:gap-10 gap-6 flex-col'>
            <h1 className='font-[SpaceGrotesk] text-5xl lg:text-7xl sm:text-7xl mx-auto'>Banking that <span className='btn-color  text-transparent  bg-clip-text'>moves</span> at your pace.</h1>
            <p className='lg:text-xl text-lg max-w-xl text-white/70'>Send money in seconds, track every transaction, and see your balance grow — all in one beautifully simple app.</p>
            <div className='flex gap-5'>
                <Link to={'/register'} className="btn-color btn flex gap-2 text-white px-4 py-2 rounded-2xl  ">Open Free Account <ArrowRight /></Link>
                <Link to={'/signin'} className="text-white font-medium px-5 bg-gray-300/10 hover:bg-gray-300/20 backdrop-blur-3xl py-3 rounded-2xl">Sign In</Link >
            </div>
        </div>
    )
}

export default Herotext