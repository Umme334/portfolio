import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile.jpg)]
     bg-left lg:bg-[10%] bg-cover'
    style={{backgroundSize:"30%"}}>
     <Navbar />
      
      <div className='container grid lg:grid-cols-2 h-[calc(100hv-60px)]'>

        <div className='hidden lg:block'></div>
        <div className='text-[70px] sm:text-[100px] font-bold leading-tight flex jstify-center items-center'>
          <div>
            <p>I'm</p>
            <p>Umme Aiman</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
