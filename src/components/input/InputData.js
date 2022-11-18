import React, {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import back from './asesets/arrow.png';
import { UserContext } from "../../App";

function InputData() {
    const { file, setFile, fileName, setFileName } = useContext(UserContext);

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
    // const [show, setShow] = useState(true)




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

            if(companyName.length==0||companyAddress.length==0||city.length||country.length||date.length||role.length||years.length||name.length){
                setError(true)
            }else{
                alert('Dude calm down, i have not linked the API') 
            }
        
    }

   
  return (
    <div className='bg-red md:px-[204px] md:py-[120px] font-manrope'>
        <h1>{fileName}</h1>
        <main className=' md:px-[80px] px-[30px] rounded-lg h-sreen pt-12 bg-white ' >
            <button onClick={clickHandler} className='flex items-center  mt-[55px] gap-3 font-semibold'>
                <img src={back} className='h-[30] md:h-[36px] w-[30px] md:w-[36px]' alt="" />
                <span className='text-[20] md:text-[24px]'>Back</span>
            </button>
            <h1 className="title mt-[80px] text-left font-semibold text-[24px] md:text-[40px]">Tell Us A Little About the Job</h1>
            <p className="subtitle text-left text-gray-800 mt-2 text-[16px] md:text-[20px]">This information would help us to customize your cover letter and tailor it to your specific application</p>
            <form action="post" onSubmit={submit} className="form font-manrope grid w-[100%]  md:grid-cols-2 md:gap-20 gap-12 my-[80px] grid-cols-1 ">
                <div className="left">
                    <div className="a flex font-manrope flex-col text-left mb-[2rem] ">
                        <label className='my-[4px] text-[18px]'>Company's Name</label>
                        <input  className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' onChange={companyHandler} autoFocus type="text" value={companyName} id="companyName" />
                        {
                            error&&companyName<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                    </div>
                    <div className="a flex flex-col text-left mb-[2rem] ">
                        <label className='my-[3px] text-[18px]'>Company's Address</label>
                        <input className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' onChange={companyAddressHandler} type="text" value={companyAddress} id="companyName" />
                        {
                            error&&companyAddress<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                    </div>
                    <div className="a grid grid-cols-2 gap-2 mb-[2rem]   ">
                        <div className="b flex flex-col text-left ">
                            <label className='my-[4px] text-[18px]'>City</label>
                            <input className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' onChange={cityHandler} type="text" value={city} id="companyName" />
                            {
                            error&&city<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                        </div>
                        <div className="b  flex flex-col text-left">
                            <label className='my-[3px] text-[18px]'>Country</label>
                            <input className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' onChange={countryHandler} type="text" value={country} id="companyName" />
                            {
                            error&&country<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                        </div>
                    </div>
                    <div className="a flex flex-col text-left mb-2rem">
                        <label className='my-[4px] text-[18px]'>Date of Application</label>
                        <input className='px-3 py-[9px]  border-[1.5px] border-gray-300 rounded-md' onChange={dateHandler} type="text" value={date} id="companyName" />
                        {
                            error&&date<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                    </div>
                </div>

                <div className="right mt-[-1rem] md:mt-0 ">
                    <div className="a flex flex-col text-left mb-[2rem] ">
                        <label className='my-[4px] text-[18px]'>What Role Are You Applying For?</label>
                        <input className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={roleHandler} value={role} id="companyName" />
                        {
                            error&&role<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                    </div>
                    <div className="a flex flex-col text-left mb-[2rem] ">
                        <label className='my-[4px] text-[18px]'>Years of Experience</label>
                        <input className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={yearsHandler} value={years} id="companyName" />
                        {
                            error&&years<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                    </div>
                    <div className="a flex flex-col text-left mb-[2rem] ">
                            <label className='my-[4px] text-[18px]'>Recipient's Name</label>
                            <input className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={nameHandler} value={name} id="companyName" />
                            {
                            error&&name<=0 ? <p className='text-rose-500 mt-2 ml-2 text-[14px]'>This is an error alert. check it out !</p>  : ''
                        }
                    </div>
                    <div className="a flex flex-col text-left">
                        <label className='my-[4px] text-[18px]'>Recipient's Department(Optional)</label>
                        <input className='px-3 py-[9px] border-[1.5px] border-gray-300 rounded-md' type="text" onChange={departmentHandler} value={department} id="companyName" />
                    </div>
                    
                </div>

                <button type='submit' className='px-5 w-[100%] py-4 mt-[12px] mb-[100px] text-[18px] text-white bg-blue-700  font-semibold rounded-md'>Continue</button>
            </form>
        </main>
    </div>
  )
}

export default InputData