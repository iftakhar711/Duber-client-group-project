import { Email } from "@/redux/slies/signupSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";


const EmailPhone = () => {
  const [email, setEmail] = useState("")

  const dispatch = useDispatch();
  const router = useRouter()

  const handlePreview = (e) => {
    e.preventDefault()
    router.push("/signup/signup")
  }

  const handleNavigate = (e) => {
    e.preventDefault()
    router.push("/signup/roleSelection")
  }


  return (
    <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center  px-3 md:pt-0 pt-2">
      <div className="w-full">
        <h2 className="text-[24px] leading-[30px] py-2">Enter your email address</h2>
        <div className="">
          <div className="py-6">
            <input
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => dispatch(Email(e.target.value))}
              className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
              type="email"
              name=""
              id=""
              placeholder="Enter email address"
              required
            />
          </div>
        </div>
        <div className="flex justify-between items-center md:mt-8 mt-72">
          <div
            onClick={handlePreview}
            className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 transition ease-in-out duration-500 ">
            <BiLeftArrowAlt className="text-3xl" />
          </div>
          <div className="">
            <button
              disabled={!email.length}
              onClick={handleNavigate}
              className={`${email.length ? "bg-gray-900 hover:bg-gray-900 hover:cursor-pointer text-white" : "bg-gray-100 text-gray-800 cursor-not-allowed"} px-4 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition ease-in-out duration-500 `}
              >
              <span>Next</span>
              <BiRightArrowAlt className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPhone;
