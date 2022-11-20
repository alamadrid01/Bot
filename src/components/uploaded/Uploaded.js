import React,{useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import success from '../sectionTwo/assets/success.svg';
import first from '../sectionTwo/assets/first.svg';

function Uploaded() {

  const [fileSize, setFileSize] = useState("");
  const [show, setShow] = useState(false);

  const { file, setFile, fileName, setFileName } = useContext(UserContext);

    const Navigate = useNavigate();
    const clickHandler = () => {
      Navigate("/upload-data");
    };
    const changeHandler = (e) => {
      setFile(e.target.files);
      setFileName(e.target.files[0].name);
      setFileSize(e.target.files[0].size);
    };

  return (
    <div>
        <main className='flex flex-col items-center justify-center'>
            <img className='h-[0] md:h-[80px] w-[0] md:w-[80px] ' src={success} alt="" />
            <img
                src={first}
                className="w-[67px] md:w-[0] h-[67px] md:h-[0]"
                alt=""
              />
               <input
                style={{ opacity: "0" }}
                // style={{ background: "red" }}
                type="file"
                accept="application/pdf"
                onChange={changeHandler}
                className="upload_file absolute cursor-pointer right-[25%] md:right-0 bottom-[18%] md:bottom-[22%] w-[45%] h-[11%] "
                id="upload_button"
              />
            <h2 className='text-blue-700 mb-4 mt-5 font-semibold text-[24px] '>Your CV has Been Uploaded</h2>
            <p className='text-slate-400 mb-4 text-[16px] '>Proceed to customize your cover letter</p>
            <div className="a grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <button onClick={clickHandler} className='text-[16px] bg-blue-700 font-semibold rounded-md text-white px-[15px] md:px-[12px] py-[8px]'>Generate Cover Letter</button>
            <button  className='text-[16px] text-blue-700 font-semibold rounded-md border-[1.5px] border-blue-700 bg-white px-[15px] md:px-[12px] py-[8px]'>Change Uploaded File</button>
            </div>
            
        </main>
    </div>
  )
}

export default Uploaded