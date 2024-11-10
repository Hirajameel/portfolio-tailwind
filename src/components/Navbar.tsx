import React from 'react'
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className=' bg-black px-5 lg:px-14 md:px-14  h-14 flex justify-between text-white '>
        <div className='block lg:flex md:flex justify-between items-center w-full'>
            <div className='text-xl font-medium text-center md:text-inherit lg:text-inherit '>Hira</div>
                <ul className='gap-4 lg:gap-16  flex text-[20px] justify-between'>
                    <li className='menuLink'><a href='#./'>Home</a></li>
                    <li className='menuLink'><a href='#about'>About</a></li>
                    <li className='menuLink'><a href='#projects'>Project</a></li>
                    <li className='menuLink'><a href='#skills'>Skills</a></li>
                    <li className='menuLink'><a href='#contact'>Contact</a></li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar