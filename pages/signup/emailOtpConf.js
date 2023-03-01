import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const EmailOtpConf = () => {
  return (
    <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center px-3 md:pt-0 pt-2">
      <div>
        <h2 className="text-[24px] leading-[30px] py-2">Enter the 4-digit code sent to you at 01647-344204.</h2>
        <div className="grid lg:grid-cols-6 grid-cols-5 gap-3 mt-3">
          <input
            className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="py-8">
          <button className="py-2 px-4 font-medium rounded-full bg-gray-200 flex items-center justify-center hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 transition ease-in-out duration-500">I haven't received a code</button>
        </div>
        <div className="flex justify-between items-center md:mt-12 mt-44">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 transition ease-in-out duration-500 ">
            <BiLeftArrowAlt className="text-3xl" />
          </div>
          <div className="w-[100px] h-12 px-4 rounded-full bg-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-90 text-white transition ease-in-out duration-500">
            <button className="flex items-center justify-center gap-2">
              <span>Next</span>
              <BiRightArrowAlt className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailOtpConf;
