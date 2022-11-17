import React from 'react'
import male from '../sectionFour/assets/male.jpg'

function Navbar() {
  return (
    
      <nav className='flex bg-white justify-between px-4 py-4'>
      <div className="left flex gap-1">
          <img className='rounded-full h-9 w-9 mr-5' src={male} alt="logo-picture" />
          <h3>Aplicar</h3>
        </div>
        <div className="hidden md:flex md:flex-row md:justify-between">
        <div className="middle">
          <ul className='flex gap-8'>
            <li className='font-semibold'>Features</li>
            <li className='font-semibold'>Pricing</li>
            <li className='font-semibold'>About Us</li>
            <li className='font-semibold'>Contact Us</li>
            
          </ul>
        </div>
        <div className="right flex gap-8">
          <button className="px-4 py-1 rounded-lg bg-white font-semibold text-blue-700 border-2 border-blue-700 ">
            Sign-Up
          </button>
          <button className="bg-blue-700 px-4 py-1 rounded-lg font-semibold text-white">
            Register
          </button>
        </div>
        </div>
      </nav>
  )
}

export default Navbar
