import React from 'react'
import Togglebutton from './Togglebutton'
import { Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logout from '../logout'



const Dashboardnav = (props) => {
  return (
    <nav className='flex items-center justify-between p-5 md:px-10 py-5 font-[SpaceGrotesk]'>
          <div className='flex items-center gap-2'>
            <div className='h-14 w-14 btn-color flex items-center justify-center rounded-2xl uppercase text-2xl font-bold text-white'>{props.name.charAt(0)}</div>
            <div className='flex flex-col'>
              <span className='text-sm text-shadow-gray-400 tracking-tight'>Hello</span>
              <span className='text-lg font-bold tracking-tight capitalize'>{props.name}</span>
            </div>
          </div>
          <div className='flex items-center gap-4'> 
          <Link to={'/transaction'} className='flex items-center justify-center gap-3 btn btn-color text-white  p-4 rounded-2xl'><Send/><span className='md:flex hidden'>Transfer</span></Link>
          <Logout/>
          <Togglebutton/>

          </div>
        </nav>
  )
}

export default Dashboardnav