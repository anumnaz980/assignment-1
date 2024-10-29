"use client";
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-pink-400 h-auto sm:h-20 md:h-24 lg:h-26 py-2 px-3 flex flex-col sm:flex-row justify-between items-center text-2xl text-white font-semibold'>
      <div className=' flex items-center space-x-3 mb-4 sm:mb-0'>
        <img src="/my-logo.webp" alt="Logo" className='w-10 h-10 rounded-full' />
        <h1>
          <a href="#!" className='hover:text-pink-950 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif'>Anum Naz </a>
          </h1>
      </div>
      <div className='w-full sm:w-auto mb-4 sm:mb-0'>
        <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-7' >
          <li><Link href="/" className='hover:text-pink-950 transition duration-300'>Home</Link></li>
          <li><Link href="/about" className='hover:text-pink-950'>About Me</Link></li>
          <li><Link href="/service" className='hover:text-pink-950'>My Services</Link></li>
          <li><Link href="/contact" className='hover:text-pink-950'>Contact Me</Link></li>
        </ul>
      </div>
      <div className='w-full sm:w-auto'>
        <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6'>
          <li><Link href="#!" className='hover:text-pink-950'>Search</Link></li>
          <li><Link href="/logins" className='hover:bg-pink-700 border border-black rounded-xl py-3 px-6'>Login</Link></li>
        </ul>
      </div> 
      </nav>
    </div>
        
      
  )
}

export default Navbar
