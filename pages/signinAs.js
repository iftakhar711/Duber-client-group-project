import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from 'react-icons/bi';

const SigninAs = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto min-h-screen flex justify-center items-center px-5">
        <div className="grid lg:grid-cols-2 gap-x-40 items-center">
          <Link className="lg:text-4xl text-3xl font-bold flex justify-between items-center border-b-2 pb-10 border-[#060047]" href='/'> Sign in to drive & deliver <span> <BiRightArrowAlt size={45} /> </span></Link>
          <Link className="lg:text-4xl text-3xl font-bold flex justify-between items-center border-b-2 pb-10 border-[#060047] lg:mt-0 mt-32" href='/rider/book/location'> Signin to ride <span> <BiRightArrowAlt size={45} /> </span></Link>
        </div>
      </div>
    </div>
  )
};

export default SigninAs;
