import React,{useContext} from 'react'
import pic from './assets/pic.svg';



function SectionOne() {

  return (
    <div>
         <main className="flex h-[60vh] bg-blue-900 md:px-3 md:py-5 relative ">
        <div className="text flex-col flex md:px-20 px-[1rem] h-[50vh] md:h-[auto] w-[30%] justify-center items-center flex-auto">
          <h1 className='font-bold  text-4xl md:text-4xl  text-white'>Create a Job-Landing Cover Letter in seconds</h1>
          <p className='text-white text-[16px] '>100% Automated and Free</p>
        </div>
        <div className="shape hidden md:flex flex-auto">
            <img className='w-[600px] bottom-[-105px] relative h-[300px]' src={pic} alt="" />
        </div>
      </main>

    </div>
  )
}

export default SectionOne