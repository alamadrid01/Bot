import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex bg-white justify-between px-4 py-4'>
      <div className="left flex gap-1">
          <img src="" alt="logo-picture" />
          <h3>Aplicar</h3>
        </div>
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
      </nav>
    </div>
  )
}

export default Navbar
