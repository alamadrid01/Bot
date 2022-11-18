import React,{useContext} from 'react'
import pic from './assets/frame.svg';



function SectionOne() {

  return (
    <div>
         <main className="flex h-[368px] md:h-[100vh] bg-blue-900 md:px-3 md:py-5 relative ">
        <div className="text flex-col flex md:px-[96px] px-[2rem] h-[50vh] md:h-[auto] w-[80%] justify-center items-center flex-auto">
          <h1 className='font-bold relative top-[-52px] w-[80%] md-w-[] text-[32px] md:text-4xl leading-[] md:leading-[4rem] text-left pr-[10px] md:pr-[0] md:text-[56px]  text-white'>Create a Job-Landing Cover Letter in seconds</h1>
          <p className='text-white relative top-[-40px] left-[-22%] md:left-[-80px] text-[20px] mt-3 md:text-[40px] '>100% Automated and Free</p>
        </div>
        <div className="shape hidden md:flex flex-auto">
            <img className='w-[600px] bottom-[-205px] relative h-[200px]' src={pic} alt="" />
        </div>
      </main>

    </div>
  )
}

export default SectionOne