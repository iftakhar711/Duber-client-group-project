import React, { useState } from "react";

const signupEmailDriveMethod = () => {
  const [changeVehicle, setChangeVehicle] = useState("Delivery by car")

  return (
    <div className="md:w-[550px] w-full mx-auto p-3 border shadow-lg rounded-md my-10 relative">
      <div>
        <h2 className="text-[24px] font-medium pt-2 pb-3">Choose how you’d like to earn with Uber</h2>
        <p className="pb-6">Due to COVID-19, account activation may be delayed. Thanks for your patience.</p>
      </div>

      <div>
        <div
          onClick={() => setChangeVehicle("Delivery by car")}
          className={`${changeVehicle === "Delivery by car" ? "bg-gray-900 text-white transition ease-in-out duration-500" : ""} mb-4 shadow-lg border p-3 rounded-md cursor-pointer`}>
          <h2
            className="font-semibold text-[22px] pb-3"
          >Delivery by car</h2>
          <p className="text-[14px]">You are at least 19 years old and have a vehicle from 1997 or later.</p>
        </div>

        <div
          onClick={() => setChangeVehicle("Delivery by bicycle")}
          className={`${changeVehicle === "Delivery by bicycle" ? "bg-gray-900 text-white transition ease-in-out duration-500" : ""} mb-4 shadow-lg border p-3 rounded-md cursor-pointer`}>
          <h2 className="font-semibold text-[22px] pb-3">Delivery by bicycle</h2>
          <p className="text-[14px]">You are at least 18 years old and you have a bicycle.</p>
        </div>

        <div
          onClick={() => setChangeVehicle("Car")}
          className={`${changeVehicle === "Car" ? "bg-gray-900 text-white transition ease-in-out duration-500" : ""} mb-4 shadow-lg border p-3 rounded-md cursor-pointer`}>
          <h2 className="font-semibold text-[22px] pb-3">Car</h2>
          <p className="text-[14px]">Your vehicle is a car, microbus or jeep, etc in excellent condition.
          </p>
        </div>

        <div
          onClick={() => setChangeVehicle("Give rides")}
          className={`${changeVehicle === "Give rides" ? "bg-gray-900 text-white transition ease-in-out duration-500" : ""} mb-4 shadow-lg border p-3 rounded-md cursor-pointer`}>
          <h2 className="font-semibold text-[22px] pb-3">Give rides</h2>
          <p className="text-[14px]">I want to make trips with a car</p>
        </div>

        <div
          onClick={() => setChangeVehicle("Uber Moto")}
          className={`${changeVehicle === "Uber Moto" ? "bg-gray-900 text-white transition ease-in-out duration-500" : ""} mb-4 shadow-lg border p-3 rounded-md cursor-pointer`}>
          <h2 className="font-semibold text-[22px] pb-3">Uber Moto</h2>
          <p className="text-[14px]">Select this if you wish to register as a driver with any two-wheeler motorbike</p>
        </div>

        <div
          onClick={() => setChangeVehicle("CNG")}
          className={`${changeVehicle === "CNG" ? "bg-gray-900 text-white transition ease-in-out duration-500" : ""} mb-4 shadow-lg border p-3 rounded-md cursor-pointer`}>
          <h2 className="font-semibold text-[22px] pb-3">CNG</h2>
          <p className="text-[14px]">You have a CNG to drive around the city.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 md:w-[525px] w-full bg-white h-[60px]">
        <button className="w-full px-6 py-3 rounded-lg hover:cursor-pointer bg-gray-900 hover:bg-gray-700 text-white transition ease-in-out duration-500">
          Continue
        </button>
      </div>
    </div>
  );
};

export default signupEmailDriveMethod;
