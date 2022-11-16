import React from 'react'
import male from '../secctionFour/assets/male.jpg'

function Footer() {
  return (
    <div>
        <main className="main bg-white flex py-4 pl-[6%]">
            <div className="left">
                <img src={male} className='rounded-full w-16 h-16' alt="logo" />
            </div>
            <div className="right flex justify-between ml-9 w-[70%]">
                <div className="first_column ">
                  <ul className='flex flex-col gap-5'>
                    <li className='text-gray-800'>Product</li>
                    <li className='font-semibold'>Documentation</li>
                    <li className='font-semibold'>Help</li>
                    <li className='font-semibold'>Career</li>
                    <li className='font-semibold'>Pricing</li>
                  </ul>
                </div>
            
                <div className="second_column ">
                  <ul className='flex flex-col gap-5'>
                    <li className='text-gray-800'>Company</li>
                    <li className='font-semibold'>About us</li>
                    <li className='font-semibold'>Blog</li>
                    <li className='font-semibold'>Forum</li>
                    <li className='font-semibold'>Contact us</li>
                  </ul>
                </div>
            
                <div className="first_column ">
                  <ul className='flex flex-col gap-5'>
                    <li className='text-gray-800'>Activity</li>
                    <li className='font-semibold'>Events</li>
                    <li className='font-semibold'>Customer stories</li>
                    <li className='font-semibold'>Features</li>
                  </ul>
                </div>
            
            </div>
        </main>
    </div>
  )
}

export default Footer