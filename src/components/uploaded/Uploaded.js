import React from 'react'
import { useNavigate } from "react-router-dom";
import success from '../sectionTwo/assets/success.svg';

function Uploaded() {
    const Navigate = useNavigate();
    const clickHandler = () => {
      Navigate("/upload-data");
    };
  return (
    <div>
        <main className='flex flex-col items-center justify-center'>
            <img className='h-[80px] w-[80px] ' src={success} alt="" />
            <h2 className='text-blue-700 mb-4 mt-5 font-semibold text-[24px] '>Your CV has Been Uploaded</h2>
            <p className='text-slate-400 mb-4 text-[16px] '>Proceed to customize your cover letter</p>
            <div className="a grid grid-cols-2 gap-8">
            <button onClick={clickHandler} className='text-[16px] bg-blue-700 font-semibold rounded-lg text-white px-[12px] py-[8px]'>Generate Cover Letter</button>
            <button onClick={clickHandler} className='text-[16px] text-blue-700 font-semibold rounded-lg border-[1.5px] border-blue-700 bg-white px-[12px] py-[8px]'>Change Uploaded File</button>
            </div>
            
        </main>
    </div>
  )
}

export default Uploaded