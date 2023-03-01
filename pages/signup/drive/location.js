import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const SignupDriveLocation = () => {
  return (
    <div className="md:w-[550px] w-full mx-auto p-3 border shadow-lg rounded-md my-10 relative">
      <div className="">
        <img className="w-[70px]" src="https://i.ibb.co/nLs6t63/dollar-bill.png" alt="" />
        <div>
          <h2 className="text-[36px] font-medium pt-4 pb-2">Earn with Uber</h2>
          <p className="text-[18px]">Decide when, where and how you want to earn.</p>
        </div>
        <div className="pt-6 pb-2">
          <label className="text-[12px] font-medium">Where would you like to earn?</label>
          <select
            className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md"
            name=""
            id="">
            <option value="Dhaka">Dhaka</option>
          </select>
        </div>
        <div>
          <label className="text-[12px] font-medium">Referral code (optional)</label>
          <input className="w-full border-2 border-gray-100 py-2 px-3  bg-gray-100 rounded-md focus:bg-opacity-50 focus:border-2" type="text" name="" id="" />
        </div>
        <div className="pt-12 pb-24">
          <p className="text-gray-700">By proceeding, I agree that Uber or its representatives may contact me by email, phone or SMS (including by automatic telephone dialling system) using the email address or number I provide, including for marketing purposes. To be eligible for a guarantee, you must see the offer and sign up to drive with Uber on this page by 1 May 2023. The guarantee only applies to your total earnings (not including tips, incentives or fees paid to Uber) for your first trips with Uber. To qualify for the guarantee, you must sign up in the specified city and complete the minimum trips within 90 days of signing up. If the total earnings from your trips are under the guarantee for your first trips, Uber will pay you the difference between your guarantee and total earnings. Cancelled trips do not count as completed trips. Guarantee offers and minimum trip requirements may vary from city to city. We reserve the right to withhold or deduct payments that we determine or believe were in error, fraudulent, illegal or in violation of driver terms or these terms. Guarantee available for a limited time only. Terms subject to change.</p>
        </div>
        <div className="bottom-10 2xl:right-[750px] xl:right-[35%] lg:right-[280px] md:right-[160px] right-4 fixed">
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

export default SignupDriveLocation;
