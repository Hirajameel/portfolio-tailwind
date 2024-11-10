import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' >
    <Navbar /> 

      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] pt-5'>
        <div className='flex justify-center items-center'>
          <div className='bg-gradient-to-r from-indigo-500 rounded-full'>
        <div  className='w-80 h-80 rounded-full bg-no-repeat bg-[url(/banner_bg3.jpeg)]  bg-[cover] p-5 bg-transparent border border-black '>
        </div>
        </div>
        </div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-left">I'm</p>
            <p data-aos="zoom-in-left">Hira</p>
            <p data-aos="zoom-in-left">Jameel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero