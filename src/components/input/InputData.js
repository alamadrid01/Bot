import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function InputData() {

    const [companyName, setCompanyName] = useState('')
    const [companyAddress, setCompanyNameAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [date, setDate] = useState('')
    const [role, setRole] = useState('')
    const [years, setYears] = useState('')
    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [error, setError] = useState(false)
    const [show, setShow] = useState(true)




    const Navigate = useNavigate()
    const clickHandler =() =>{
        Navigate('/')
    }

    
    const companyHandler =(e) =>{
        setCompanyName(e.target.value)
    }
    const companyAddressHandler =(e) =>{
        setCompanyNameAddress(e.target.value)
    }
    const cityHandler =(e) =>{
        setCity(e.target.value)
    }
    const countryHandler =(e) =>{
        setCountry(e.target.value)
    }
    const dateHandler =(e) =>{
        setDate(e.target.value)
    }
    const roleHandler =(e) =>{
        setRole(e.target.value)
    }
    const yearsHandler =(e) =>{
        setYears(e.target.value)
    }
    const nameHandler =(e) =>{
        setName(e.target.value)
    }
    const departmentHandler =(e) =>{
        setDepartment(e.target.value)
    }

    const submit = (e) =>{
        e.preventDefault()
        
        alert('test running')
        
    }

   
  return (
    <div >
        <main className=' md:px-[15%] px-[5%] h-sreen pt-12 ' >
            <button onClick={clickHandler} className='relative right-[48%] font-semibold'>
                Back
            </button>
            <h1 className="title mt-7 text-left font-semibold text-2xl">Tell Us A Little About the Job</h1>
            <p className="subtitle text-left text-gray-800 mt-2">This information would help us to customize your cover letter and tailor it to your specific application</p>
            <form action="post" onSubmit={submit} className="form grid w-[100%]  md:grid-cols-2 md:gap-20 gap-12 my-[40px] grid-cols-1 ">
                <div className="left">
                    <div className="a flex flex-col text-left mb-2 ">
                        <label className='my-[3px]'>Company's Name</label>
                        <input  className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' onChange={companyHandler} autoFocus type="text" value={companyName} id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left mb-2 ">
                        <label className='my-[3px]'>Company's Address</label>
                        <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' onChange={companyAddressHandler} type="text" value={companyAddress} id="companyName" />
                    </div>
                    <div className="a grid grid-cols-2 gap-2 mb-2   ">
                        <div className="b flex flex-col text-left ">
                            <label className='my-[3px]'>City</label>
                            <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' onChange={cityHandler} type="text" value={city} id="companyName" />
                        </div>
                        <div className="b  flex flex-col text-left">
                            <label className='my-[3px]'>Country</label>
                            <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' onChange={countryHandler} type="text" value={country} id="companyName" />
                        </div>
                    </div>
                    <div className="a flex flex-col text-left">
                        <label className='my-[3px]'>Date of Application</label>
                        <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' onChange={dateHandler} type="text" value={date} id="companyName" />
                    </div>
                </div>

                <div className="right mt-[-2rem] md:mt-0 ">
                    <div className="a flex flex-col text-left mb-2 ">
                        <label className='my-[3px]'>What Role Are You Applying For?</label>
                        <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={roleHandler} value={role} id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left mb-2 ">
                        <label className='my-[3px]'>Years of Experience</label>
                        <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={yearsHandler} value={years} id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left mb-2 ">
                            <label className='my-[3px]'>Recipient's Name</label>
                            <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={nameHandler} value={name} id="companyName" />
                    </div>
                    <div className="a flex flex-col text-left">
                        <label className='my-[3px]'>Recipient's Department(Optional)</label>
                        <input className='px-3 py-[3px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={departmentHandler} value={department} id="companyName" />
                    </div>
                    <button type='submit' disabled={show} className='px-5 w-[100%] py-2 mt-[25px] mb-[100px] text-[14px] text-white bg-blue-700  font-semibold rounded-md'>Continue</button>
                </div>

            </form>
        </main>
    </div>
  )
}

export default InputData