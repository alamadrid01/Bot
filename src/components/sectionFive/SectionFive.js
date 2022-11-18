import React from "react";
import { useNavigate } from "react-router-dom";

function SectionFive() {
  const Navigate = useNavigate();
  const clickHandler = () => {
    Navigate("/upload-data");
  };
  return (
    <div>
      <div className="ads my-20 bg-blue-900 md:rounded-lg  md:mx-[96px] flex flex-col py-9 justify-center items-center ">
        <p className="text-white text-[40px] mb-5">Try it out !</p>
        <h1 className="text-3xl md:text-[56px] mb-5 text-white font-bold ">
          Create Your Free Cover letter
        </h1>
        <p className="text-white font-[300] text-[14px] md:text-[24px] mt-2">
          You can download to your device straight away.
        </p>
        <button
          onClick={clickHandler}
          className="px-[32px] py-[12px] mt-[25px]  text-[14px] md:text-[16px] text-white bg-blue-700  font-semibold rounded-lg"
        >
          Create Cover Letter{" "}
        </button>
      </div>
    </div>
  );
}

export default SectionFive;
