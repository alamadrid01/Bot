import React,{useContext} from 'react'
import {UserContext} from '../../App'
import circle from './assets/circle.svg'
import scissor from './assets/scissor.svg'
import star from './assets/star.svg'
import pen from './assets/magicpen.svg'

function SectionThree() {
    const {file, setFile, fileName, setFileName} = useContext(UserContext)
  return (
        <div className="div md:px-20   my-10">
           <main  className='md:px-5  rounded-lg py-7 relative bg-indigo-200 '>
            {/* <div className=' absolute h-[100vh] w-[80vh] bg-red-900 ' /> */}
            <h2 className='text-2xl font-bold mt-3'>Benefits of Using Our Cover Letter Builder</h2>
            <div className="top grid md:px-[10rem] px-[15%] py-[3rem] md:grid-cols-2 grid-cols-1 gap-12 ">
                <div className="md:w-[50vh] py-10 bg-white text-left px-7 box-border flex flex-col rounded-md">
                    <img src={circle} className='w-12 mb-3 h-12' alt="" />
                    <p className='font-bold  text-left  '>Make Your Job Search Easy</p>
                    <span className='text-[12px]  mt-3 '>Applying for multiple jobs means writing multiple cover letters. Our Cover Letter Builder makes it quick and easy to customize cover letters, regardless of how many you write.
                        
                    </span>
                </div>
                <div className="md:w-[50vh] py-10 bg-white text-left px-7 box-border flex flex-col rounded-md">
                    <img src={pen} className='w-12 mb-3 h-12' alt="" />
                    <p className='font-bold  text-left  '>We do the Writing For You</p>
                    <span className='text-[12px]  mt-3 ' >Writer's block, begone! Our Cover Letter Builder does the work for you with professionally written text and keyword suggestions that get your letter written in minutes 

                    </span>
                </div>
                <div className="md:w-[50vh] py-10 bg-white text-left px-7 box-border flex flex-col rounded-md">
                    <img src={scissor} className='mb-3 w-12 h-12' alt="" />
                    <p className='font-bold  text-left  '>
                Beautiful and Polished results</p>
                    <span className='text-[12px]  mt-3 ' >
                Our beautiful designed cover letter templates automatically handle the formatting as you wor. plus, our built-in spell-check feature helps ensure an error-free letter 
                    </span>
                </div>
                <div className="md:w-[50vh] py-10 bg-white text-left px-7 box-border flex flex-col rounded-md">
                    <img src={star} className='w-12 h-12 mb-3' alt="" />
                    <p className='font-bold  text-left  '>Proven Success</p>
                    <span className='text-[12px]  mt-3 ' >   Thousands of job seekers have successfully built cover letters using Aplicar Cover Letter Builder to get the jobs they want
                    </span>
                </div>
            </div>
        </main>
        </div>
  )
}

export default SectionThree
