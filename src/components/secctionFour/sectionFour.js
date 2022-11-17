import React from 'react'
import {useNavigate} from 'react-router-dom'
import male from './assets/male.jpg'

function SectionFour() {
    const Navigate = useNavigate()
    const clickHandler =() =>{
        Navigate('/upload-data')
    }
  return (
    <div>
        <main className='md:px-20  px-5'>
            <h2 className='text-2xl font-bold py-10'>What Others Are Saying...</h2>

            <div className="container  grid grid-cols-1  md:grid-cols-4 gap-9 pl-6 ">
                <div className="review w-[90%] text-left bg-white flex flex-col p-5 py-8  rounded-lg border-2 border-gray-400 ">
                    <p>I am impressed by the strength of the AI on this page and i think its's the best choice on the market</p>
                    <img  className='w-12 my-[20px] md:my-[90px] mb-2  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[14px]'>Developer Alamadrid</p>
                    <span className='text-[12px] ' >CEO, Aloy Tech</span>
                </div>
                <div className="review w-[90%] bg-white text-left flex flex-col p-5 py-8 rounded-lg border-2 border-gray-400 ">
                    <p>There are so many options and i love the templates options. This makes constructing cover letters easy.</p>
                    <img className='w-12 my-7 md:my-16 mb-2 h-12 rounded-full'  src={male} alt="male-picture" />
                    <p className='font-bold text-[14px]' >Mentor Mark</p>
                    <span className='text-[12px]' >Demi-god of HNG</span>
                </div>
                <div className="review w-[90%] bg-white text-left flex flex-col p-5 py-8 rounded-lg border-2 border-gray-400 ">
                    <p>Really helpful with the format template that is provided and when you pair your resume with it makes it easier</p>
                    <img className='w-12 my-7 md:my-16 mb-2 h-12 rounded-full'  src={male} alt="male-picture" />
                    <p className='font-bold text-[14px]' > Designer Bamifemi</p>
                    <span className='text-[12px]'> CEO, Bamifemi Arts</span>
                </div>
                <div className="review w-[90%] bg-white text-left flex flex-col p-5 py-8 rounded-lg border-2 border-gray-400 ">
                    <p>Quick and easy way to create a professional cover letter and allows for my own personal touch to the cover letter</p>
                    <img className='w-12 my-7 md:my-16 mb-2 h-12 rounded-full'  src={male} alt="male-picture" />
                    <p className='font-bold text-[14px]' > Designer Erica </p>
                    <span className='text-[12px]'>  Finest Girl in Africa</span>
                </div>
            </div>
            <button className='px-6 py-3 mt-[35px] text-[14px] text-blue-700 border-[1.5px] border-solid border-blue-700 font-semibold rounded-lg'>Read Full Customer Stories </button>

            <div className="ads my-20 bg-blue-900 flex flex-col py-5 justify-center items-center ">
                <p className='text-white text-[20px] '>Try it out !</p>
                <h1 className='text-3xl text-white font-bold '>Create Your Free Cover letter</h1>
                <p className='text-white font-[300] text-[14px] mt-2'>You can download to your device straight away.</p>
            <button onClick={clickHandler} className='px-5 py-2 mt-[25px] text-[14px] text-white bg-blue-700  font-semibold rounded-md'>Create Cover Letter </button>

            </div>
        </main>
    </div>
  )
}

export default SectionFour