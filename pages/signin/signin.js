import { Email } from "@/redux/slies/signupSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Signin = () => {
  const [emailOrNumber, setEmailOrNumber] = useState("")

  const dispatch = useDispatch();
  const router = useRouter()

  const handleRouting = (e) => {
    e.preventDefault()
    router.push("/signup/loginPassword")
  }


  return (
    <div className="md:w-[360px] w-full mx-auto px-3 py-4">
      <h2 className="text-[24px] leading-[30px]">What is your phone number or email?</h2>
      <div className="py-3">
        <input
          onChange={(e) => {
            setEmailOrNumber(e.target.value)
            dispatch(Email(e.target.value))
          }}
          className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
          type="email"
          name=""
          id=""
          placeholder="Enter phone number or email"
          required
        />
      </div>
      <div>
        <button
          onClick={handleRouting}
          disabled={!emailOrNumber.length}
          className={`${(!emailOrNumber.length) ? "bg-gray-200 bg-opacity-50 hover:bg-gray-800 text-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"} w-full py-3 px-4 rounded-lg transition ease-in-out duration-500`}>Continue</button>
      </div>
      <div className="py-4 flex justify-between items-center">
        <hr className="w-[45%] border-gray-400" />
        <span className="text-center block text-gray-600">or</span>
        <hr className="w-[45%] border-gray-400" />
      </div>
      <div className="my-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 w-full py-3 px-4 rounded-lg transition ease-in-out duration-500 flex justify-center items-center gap-2">
          <img className="w-6" src="https://i.ibb.co/CwFhq0J/google-2.png" alt="" />
          <span>Continue with Google</span>
        </button>
      </div>
      <div className="my-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 w-full py-3 px-4 rounded-lg transition ease-in-out duration-500 flex justify-center items-center gap-2">
          <img className="w-6" src="https://i.ibb.co/5Lsb0XW/apple-logo.png" alt="" />
          <span>Continue with Apple</span>
        </button>
      </div>
      <div className="my-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 w-full py-3 px-4 rounded-lg transition ease-in-out duration-500 flex justify-center items-center gap-2">
          <img className="w-6" src="https://i.ibb.co/VjDDTx7/facebook-1.png" alt="" />
          <span>Continue with Facebook</span>
        </button>
      </div>
      <div className="mt-5 mb-10">
        <p className="text-[13px] text-gray-700">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
      <div className="pt-10">
        <p className="text-[13px] text-gray-700">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <Link href="/" className="underline text-[14px]">Privacy Policy</Link>&nbsp; and &nbsp;
          <Link href="/" className="underline text-[14px]">Terms of Service </Link>
          apply.
        </p>
      </div >
    </div >
  );
};

export default Signin;
