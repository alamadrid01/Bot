import React from 'react'
import male from './assets/male.jpg'
import arrow from './assets/arrow.svg'

function SectionFour() {
  
  return (
    <div>
        <main className='md:px-[96px] flex flex-col justify-center  px-5'>
            <h2 className='text-2xl md:text-4xl  font-bold py-10 md:py-[96px] text-gray-800'>What Others Are Saying...</h2>

            <div className="container flex flex-col md:flex-row justify-center items-center gap-5   ">
                <div className="review w-[90%] h-252px md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-indigo-100 ">
                    <p className='text-[18px]'>I am impressed by the strength of the AI on this page and I think it's the best choice on the market</p>
                    <img  className='w-12 my-[20px] md:mt-[40%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Developer Alamadrid</p>
                    <span className='text-[14px] ' >CEO, Aloy Tech</span>
                </div>
                <div className="review w-[90%] md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-indigo-100 ">
                    <p className='text-[18px]'>There are so many options and I love the templates options. This makes constructing cover letters easy.</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Designer Bolu</p>
                    <span className='text-[14px] ' >CEO, Bolu Arts</span>
                </div>
                <div className="review w-[90%] md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-indigo-100 ">
                    <p className='text-[18px]'>Really helpful with the format template that is provided and when you pair your resume with it makes it easier</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Designer Bamifemi</p>
                    <span className='text-[14px] ' >CEO, Bamifemi Arts</span>
                </div>
                <div className="review w-[90%] md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-indigo-100 ">
                    <p className='text-[18px]'>Quick and easy way to create a professional cover letter and allows for my own personal touch to the cover letter</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Mentor Mark</p>
                    <span className='text-[14px] ' >Demi-god of HNG</span>
                </div>
            </div>
            <div className="a flex justify-center">
            <button className='px-9 py-3 mt-[85px] text-[14px] flex items-center justify-center w-[90%] md:w-[30%] text-blue-700 border-[1.5px] border-solid border-blue-700 font-semibold rounded-lg'>
                <span>Read Full Customer Stories</span>
                <img className='h-[16px] w-[16px ml-[8px]' src={arrow}  alt="" />
                 </button>
            </div>
           

     
        </main>
    </div>
  )
}

export default SectionFour