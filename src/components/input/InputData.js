import React from 'react'

function InputData() {
  return (
    <div>
        <main className=' px-[15%]'>
            <button className='font-semibold'>
                Back
            </button>
            <h1 className="title mt-7 text-left font-semibold text-2xl">Tell Us A Little About the Job</h1>
            <p className="subtitle text-left text-gray-800 mt-2">This information would help us to customize your cover letter and tailor it to your specific application</p>
            <form action="post" className="form grid w-[100%] grid-cols-2 gap-20 my-[40px] ">
                <div className="left">
                    <div className="a flex flex-col text-left ">
                        <label className='my-[3px]'>Company's Name</label>
                        <input type="text" name="companyName" id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left">
                        <label className='my-[3px]'>Company's Address</label>
                        <input type="text" name="companyName" id="companyName" />
                    </div>
                    <div className="a flex justify-between ">
                        <div className="b flex flex-col text-left ">
                            <label className='my-[3px]'>City</label>
                            <input type="text" name="companyName" id="companyName" />
                        </div>
                        <div className="b  flex flex-col text-left">
                            <label className='my-[3px]'>Country</label>
                            <input type="text" name="companyName" id="companyName" />
                        </div>
                    </div>
                    <div className="a flex flex-col text-left">
                        <label className='my-[3px]'>Date of Application</label>
                        <input type="text" name="companyName" id="companyName" />
                    </div>
                </div>

                <div className="right">
                    <div className="a flex flex-col text-left">
                        <label className='my-[3px]'>What Role Are You Applying For?</label>
                        <input type="text" name="companyName" id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left">
                        <label className='my-[3px]'>Years of Experience</label>
                        <input type="text" name="companyName" id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left">
                            <label className='my-[3px]'>Recipient's Name</label>
                            <input type="text" name="companyName" id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left">
                        <label className='my-[3px]'>Recipient's Department(Optional)</label>
                        <input type="text" name="companyName" id="companyName" />
                    </div>
                    <button className='px-5 w-[100%] py-2 mt-[25px] text-[14px] text-white bg-blue-700  font-semibold rounded-md'>Continue</button>
                </div>

            </form>
        </main>
    </div>
  )
}

export default InputData