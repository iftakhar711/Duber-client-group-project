import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const EmailName = () => {
  return (
    <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center px-3 md:pt-0 pt-2">
      <div>
        <div>
          <h2 className="text-[24px] leading-[30px] py-2">What is your name</h2>
          <p>Let us know how to address you properly</p>
        </div>
        <div className="py-8">
          <div className="mb-4">
            <input
              className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
              type="text "
              name="firstName"
              id=""
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="">
            <input
              className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
              type="text "
              name="lastName"
              id=""
              placeholder="Enter last name"
              required
            />
          </div>
        </div>
        <div className="flex justify-between items-center md:mt-10 mt-32">
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

export default EmailName;
