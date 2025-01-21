import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='container pt-9'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Miss</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li  className='menulink'><a href='#hero'>Home</a></li>
            <li className='menulink'><a href='#about'>About</a></li>
            <li  className='menulink'><a href='#skills'>Skills</a></li>
            <li  className='menulink'><a href='#contact'>Contact</a></li>
        </ul>
        
        <IoMenuSharp className='md:hidden' size={25} />
        

      </div>
    </div>
  )
}

export default Navbar
