import React from 'react'
import Activebar from './Activebar'
import Herotext from './Herotext'
import Herocard from './Herocard'


const Hero = () => {


  return (
    <div className=' w-full py-10 lg:py-20 px-6'>
      <Activebar title="Now accepting new customers" />
      <Herotext />
      <Herocard/>
    </div>
  )
}

export default Hero
