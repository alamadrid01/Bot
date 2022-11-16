import React,{useContext} from 'react'
import {UserContext} from '../../App'
import image from '../sectionTwo/assets/upload_image.svg'

function SectionThree() {
    const {file, setFile, fileName, setFileName} = useContext(UserContext)
  return (
        <div className="div px-20  my-10">
           <main  className='px-5 rounded-lg py-5 relative bg-[aqua] '>
            {/* <div className=' absolute h-[100vh] w-[80vh] bg-red-900 ' /> */}
            <h2 className='text-2xl font-bold mt-2'>Benefits of Using Our COver Letter Builder</h2>
            <div className="top grid px-[10rem] py-[3rem] grid-cols-2 gap-12 ">
                <div className="w-[50vh] py-10 bg-white text-left px-5 box-border flex flex-col rounded-md">
                    <img src={image} className='w-8 h-8' alt="" />
                    <p className='font-bold  text-left  '>Make Your Job Search Easy</p>
                    <span className='text-[12px]  mt-3 '>Applying for multiple jobs means writing multiple cover letters. Our Cover Letter Builder makes it quick and easy to customize cover letters, regardless of how many you write.
                        
                    </span>
                </div>
                <div className="w-[50vh] py-10 bg-white text-left px-5 box-border flex flex-col rounded-md">
                    <img src={image} className='w-8 h-8' alt="" />
                    <p className='font-bold  text-left  '>We do the Writing For You</p>
                    <span className='text-[12px]  mt-3 ' >Writer's block, begone! Our Cover Letter Builder does the work for you with professionally written text and keyword suggestions that get your letter written in minutes 

                    </span>
                </div>
                <div className="w-[50vh] py-10 bg-white text-left px-5 box-border flex flex-col rounded-md">
                    <img src={image} className='w-8 h-8' alt="" />
                    <p className='font-bold  text-left  '>
                Beautiful and Polished results</p>
                    <span className='text-[12px]  mt-3 ' >
                Our beautiful designed cover letter templates automatically handle the formatting as you wor. plus, our built-in spell-check feature helps ensure an error-free letter 
                    </span>
                </div>
                <div className="w-[50vh] py-10 bg-white text-left px-5 box-border flex flex-col rounded-md">
                    <img src={image} className='w-8 h-8' alt="" />
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
