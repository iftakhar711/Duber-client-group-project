import Link from "next/link";
import React from "react";
import {
  AiOutlineApple,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { IoLocateSharp, IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-[#060047] relative py-24 text-white">
        <div className="px-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-7xl mx-auto gap-4">
          {/* title */}
          <div className="lg:flex justify-between ">
            <div>
              <h1 className="text-[24px] font-semibold mr-6 mb-4">Duber</h1>
              <h1 className=" sm:mb-2">Visit Help Center.</h1>
            </div>
            <div>
              <h1 className="sm:mb-2">
                Bangladesh Ridesharing Releted Info.
              </h1>
            </div>
          </div>
        </div>
        {/* about company */}
        <div className="px-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between mt-16">
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Company</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href="/">About us</Link>
              <Link href="/">Our offerings</Link>
              <Link href="/">Blog</Link>
              <Link href="/">AI</Link>
              <Link href="/">Investor</Link>
              <Link href="/">Newsroom</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Products</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href="#">Ride</Link>
              <Link href="#">Drive</Link>
              <Link href="#">Deliver</Link>
              <Link href="#">Eat</Link>
              <Link href="#">Duber for Business</Link>
              <Link href="#">Duber Freight</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Global citizenship</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href="#">Safety</Link>
              <Link href="#">Sustainability</Link>
              <Link href="#">Diversity and Inclusion</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium">Travel</h2>
            <div className="flex flex-col space-y-3 text-sm dark:text-gray-400">
              <Link href="#">Airports</Link>
              <Link href="#">Cities</Link>
            </div>
          </div>
        </div>
        {/* social link */}
        <div className="px-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
          <div className=" flex gap-16 mt-14">
            <AiOutlineFacebook></AiOutlineFacebook>
            <CiTwitter></CiTwitter>
            <AiOutlineYoutube></AiOutlineYoutube>
            <AiOutlineInstagram></AiOutlineInstagram>
            <AiOutlineLinkedin></AiOutlineLinkedin>
          </div>
          <div className=" flex gap-10">
            <span className="flex items-center mt-[52px] gap-2">
              <BsGlobe2></BsGlobe2>
              <span>English</span>
            </span>

            <span className=" flex items-center mt-[52px] gap-2">
              <IoLocateSharp></IoLocateSharp>
              <span>Dhaka,Bangladesh</span>
            </span>
          </div>
          {/* <div className=" flex gap-3  mt-[35px]">
            <button className=" flex items-center border-2 rounded-md">
              <IoLogoGooglePlaystore className=" h-6 w-6"></IoLogoGooglePlaystore>
              <span>
                <h1 className=" text-xs">Get it on</h1>
                <h1>Google Play</h1>
              </span>
            </button>
            <button className=" flex items-center border-2 rounded-md">
              <AiOutlineApple className=" h-6 w-6"></AiOutlineApple>
              <span>
                <h1 className=" text-xs">Download from</h1>
                <h1>App store</h1>
              </span>
            </button>
          </div> */}
        </div>
        {/* Rights */}
        <div className="px-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-7xl mx-auto flex flex-wrap items-center justify-center space-y-4 sm:justify-between sm:space-y-0 mt-20 text-xs">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <h1>©2023 All Rights Reserved to Coders Team.</h1>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
            <li>
              <Link href="#">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
