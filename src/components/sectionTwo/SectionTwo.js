import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import image from './assets/upload_image.svg'

function SectionTwo() {
  const Navigate = useNavigate();
  const { file, setFile, fileName, setFileName } = useContext(UserContext);

  const submit = (e) => {
    e.preventDefault();
    console.log(file);
    console.log(fileName);
    Navigate("/test");
  };
  const changeHandler = (e) => {
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="px-4  py-10">
      <main className="flex flex-col md:flex-row ">
        <div className="left text-left px-[18vh]  w-[40%]  flex flex-col justify-center items-center ">
          <h2 className="text-2xl font-bold mb-[11px]   ">
            Upload your CV/Resume to make a Cover Letter
          </h2>
          <p className="text-gray text-[13px] text-[#666060] ">
            Maximum file size is 10MB, and you can only upload a maximum of 1
            file per upload session
          </p>
        </div>
        <div className="right w-[40%] border-2 justify-center items-center ml-[10em] border-[gray]  border-dashed rounded-lg ">
          <div className="uploadContainer flex flex-col px-[20vh] py-[10vh]   ">
            <input
              type="file"
              accept="application/pdf"
              onChange={changeHandler}
              className="upload_file"
              id=""
            />
            <label for="upload_file" className="">
              <img src="" alt="" />
              <h3 className=" text-blue-700 font-semibold">Drag & Drop to Upload </h3>
              <p className="text-gray-500">File Supported PDF</p>
              <button className="text-blue-700 font-bold ">Or browse</button>
            </label>
          </div>
        </div>
      </main>
      <h2 className="text-black my-8  font-bold text-2xl">Follow These Steps to Seamlessly Create Your Cover Letters</h2>
      <div className="additional_info_container flex gap-5 justify-around text-left  ">
        <div className="additional_info px-4 py-3  box-border bg-blue-400 border-2  border-solid flex flex-col items-center gap-6 w-22 h-21 rounded-lg justify-center">
          <img className="w-8 h-8 relative right-6  " src={image} alt="" />
          <span className="text-sm w-[65%] text-gray-900">Upload Your CV or Resume</span>
        </div>
        <div className="additional_info px-4 py-3  box-border bg-blue-400 border-2  border-solid flex flex-col items-center gap-6 w-22 h-21 rounded-lg justify-center">
          <img className="w-8 h-8 relative right-6  " src={image} alt="" />
          <span className="text-sm w-[65%] text-gray-900">Input Additional Information</span>
        </div>
        <div className="additional_info px-4 py-3  box-border bg-blue-400 border-2  border-solid flex flex-col items-center gap-6 w-22 h-21 rounded-lg justify-center">
          <img className="w-8 h-8 relative right-6  " src={image} alt="" />
          <span className="text-sm w-[65%] text-gray-900">Generate Your Cover Letter</span>
        </div>
        <div className="additional_info px-4 py-3  box-border bg-blue-400 border-2  border-solid flex flex-col items-center gap-6 w-22 h-21 rounded-lg justify-center">
          <img className="w-8 h-8 relative right-6  " src={image} alt="" />
          <span className="text-sm w-[65%] text-gray-900">Download or Save</span>
        </div>
        
      </div>
    </div>
  );
}

export default SectionTwo;
