import React, { useEffect, useRef, useState } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineCar } from "react-icons/ai";
import styles from "./Banner.module.css";
import EatTab from "./EatTab";
import DriveOrDeliver from "./DriveOrDeliver";
import RideTab from "./RideTab";
import Image from "next/image";

const Banner = () => {
  const [tabChange, setTabChange] = useState("Drive or deliver");

  return (
    <div className="relative lg:h-[667px] md:h-[336px] h-[270px]">
      <div className="hidden lg:block">
        <div
          className={`${tabChange === "Eat" || tabChange === "Ride" ? "hidden" : "block"
            }`}
        >
          <Image
            fill
            className=" h-[667px] w-full object-cover"
            src="https://i.ibb.co/txBhHyd/Parcelforce-Delivery-Driver-Facebook.jpg"
            alt="Image"
          />
        </div>

        <div
          className={`${tabChange === "Drive or deliver" || tabChange === "Ride"
            ? "hidden"
            : "block"
            }`}
        >
          <Image
            fill
            className="h-[667px] w-full object-cover"
            src="https://i.ibb.co/XjvZMZC/1-sushi-Getty-Images-1360641847-937afbc3acd54b068c23127f138896b7.jpg"
            alt=""
          />
        </div>

        <div
          className={`${tabChange === "Drive or deliver" || tabChange === "Eat"
            ? "hidden"
            : "block"
            }`}
        >
          <Image
            fill
            className="h-[667px] w-full object-cover"
            src="https://i.ibb.co/vzrxrRL/MG-0437.jpg"
            alt=""
          />
        </div>
      </div>


      <div className="block lg:hidden lg:mt-0 md:mt-[400px] mt-[500px]">
        <div
          className={`${tabChange === "Eat" || tabChange === "Ride" ? "hidden" : "block"
            }`}
        >
          <Image
            fill
            className="h-[667px] w-full object-[revert]"
            src="https://i.ibb.co/txBhHyd/Parcelforce-Delivery-Driver-Facebook.jpg"
            alt="Image"
          />
        </div>

        <div
          className={`${tabChange === "Drive or deliver" || tabChange === "Ride"
            ? "hidden"
            : "block"
            }`}
        >
          <Image
            fill
            className="h-[667px] w-full object-cover"
            src="https://i.ibb.co/XjvZMZC/1-sushi-Getty-Images-1360641847-937afbc3acd54b068c23127f138896b7.jpg"
            alt=""
          />
        </div>

        <div
          className={`${tabChange === "Drive or deliver" || tabChange === "Eat"
            ? "hidden"
            : "block"
            }`}
        >
          <Image
            fill
            className="h-[667px] w-full object-cover"
            src="https://i.ibb.co/vzrxrRL/MG-0437.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="lg:w-[576px] w-full bg-white absolute lg:top-16 top-0 2xl:left-[16%] xl:left-20 lg:left-18 pt-6 lg:mt-0 md:-mt-[400px] -mt-[500px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-5 grid-cols-3 lg:justify-items-center justify-items-start border-b border-b-gray-100 drop-shadow-sm px-6 pb-6">
          <div
            onClick={() => setTabChange("Drive or deliver")}
            className={`${tabChange === "Drive or deliver" ? styles.driveOrDeliverAnimation : "border-b-0"} md:w-auto w-full`}
          >
            <p className="font-medium lg:text-base text-sm leading-5 w-[65px] flex justify-center items-center flex-col cursor-pointer text-gray-900 hover:text-gray-600 text-center">
              <GiNetworkBars className="font-bold lg:text-2xl text-base mb-2 text-gray-900"></GiNetworkBars>
              Drive or deliver
            </p>
          </div>

          <div
            onClick={() => setTabChange("Eat")}
            className={`${tabChange === "Eat" ? styles.eatBottomAnimation : "border-b-0"} md:w-auto w-full`}
          >
            <p className="font-medium lg:text-base text-sm flex justify-center items-center flex-col cursor-pointer text-gray-900 hover:text-gray-600">
              <ImSpoonKnife className="font-bold lg:text-2xl text-base mb-2 text-gray-900"></ImSpoonKnife>
              Eat
            </p>
          </div>

          <div
            onClick={() => setTabChange("Ride")}
            className={`${tabChange === "Ride" ? styles.rideBottomAnimation : "border-b-0"} md:w-auto w-full`}
          >
            <p className="font-medium lg:text-base text-sm flex justify-center items-center flex-col cursor-pointer text-gray-900 hover:text-gray-600">
              <AiOutlineCar className="font-bold lg:text-2xl text-base mb-2 text-gray-900 "></AiOutlineCar>
              Ride
            </p>
          </div>
        </div>

        {tabChange === "Drive or deliver" ? (
          <DriveOrDeliver></DriveOrDeliver>
        ) : tabChange === "Eat" ? (
          <EatTab></EatTab>
        ) : (
          <RideTab></RideTab>
        )}
      </div>
    </div>
  );
};

export default Banner;
