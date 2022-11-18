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
        <main className='md:px-[96px]  px-5'>
            <h2 className='text-2xl md:text-4xl font-bold py-10 md:py-[96px]'>What Others Are Saying...</h2>

            <div className="container  grid grid-cols-1 justify-between md:grid-cols-4 gap-5   ">
                <div className="review w-[90%] md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-blue-400 ">
                    <p className='text-[18px]'>I am impressed by the strength of the AI on this page and I think it's the best choice on the market</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Developer Alamadrid</p>
                    <span className='text-[14px] ' >CEO, Aloy Tech</span>
                </div>
                <div className="review w-[90%] md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-blue-400 ">
                    <p className='text-[18px]'>There are so many options and I love the templates options. This makes constructing cover letters easy.</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Developer Alamadrid</p>
                    <span className='text-[14px] ' >CEO, Aloy Tech</span>
                </div>
                <div className="review w-[90%] md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-blue-400 ">
                    <p className='text-[18px]'>Really helpful with the format template that is provided and when you pair your resume with it makes it easier</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Developer Alamadrid</p>
                    <span className='text-[14px] ' >CEO, Aloy Tech</span>
                </div>
                <div className="review w-[90%] md:h-[372px] text-left bg-white flex flex-col p-5 py-4 pt-8 rounded-lg border-[1px] border-blue-400 ">
                    <p className='text-[18px]'>Quick and easy way to create a professional cover letter and allows for my own personal touch to the cover letter</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Developer Alamadrid</p>
                    <span className='text-[14px] ' >CEO, Aloy Tech</span>
                </div>
            </div>
            <button className='px-9 py-3 mt-[85px] text-[14px] text-blue-700 border-[1.5px] border-solid border-blue-700 font-semibold rounded-lg'>Read Full Customer Stories </button>

            <div className="ads my-20 bg-blue-900 rounded-lg  flex flex-col py-9 justify-center items-center ">
                <p className='text-white text-[40px] mb-5'>Try it out !</p>
                <h1 className='text-3xl md:text-[56px] mb-5 text-white font-bold '>Create Your Free Cover letter</h1>
                <p className='text-white font-[300] text-[14px] md:text-[24px] mt-2'>You can download to your device straight away.</p>
            <button onClick={clickHandler} className='px-[32px] py-[12px] mt-[25px] text-[14px] md:text-[16px] text-white bg-blue-700  font-semibold rounded-md'>Create Cover Letter </button>

            </div>
        </main>
    </div>
  )
}

export default SectionFour