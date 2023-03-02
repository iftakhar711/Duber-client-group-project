import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaHandHoldingMedical } from 'react-icons/fa';

const Companies = () => {


  const [companyInfo, setCompanyInfo] = useState([])


  useEffect(() => {
    fetch("http://localhost:5000/all-transports")
      .then(res => res.json())
      .then(data => {
        setCompanyInfo(data)
      })
  }, [])

  return (
    <div className='lg:w-[1000px] w-full mx-auto px-3'>
      <div className="flex flex-col space-y-4">
        <ul className="flex flex-col divide-y divide-gray-700">

          {
            companyInfo.map((info, index) => <li key={index} className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex md:flex-row flex-col w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover md:w-40 md:h-40 w-full h-auto rounded outline-none " src={info.image} alt="" />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8 capitalize">{info.companyName}</h3>
                      <ul>
                        <li className='flex items-center gap-2 capitalize'><BsArrowRight /> <span>Transport: {info.transport}</span> </li>
                        <li className='flex items-center gap-2'><BsArrowRight /> <span>Seat Plan: {info.seatPlan}</span> </li>
                        <li className='flex items-center gap-2'><BsArrowRight /> <span>Cost: ${info.cost}</span> </li>
                        <li className='flex items-center gap-2'><BsArrowRight /> <span>Number plate: {info.numberPlate}</span> </li>
                        <li className='flex items-center gap-2 capitalize'><BsArrowRight /> <span>From: {info.from}</span> </li>
                        <li className='flex items-center gap-2 capitalize'><BsArrowRight /> <span>Destination: {info.to}</span> </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex text-sm gap-4">
                    <Link href={`/companies/${info._id}`} className="flex items-center px-4 py-2 rounded-md space-x-1 border hover:-translate-y-2 transition-all duration-500 bg-gray-900 hover:bg-gray-700 text-white">
                      <FaHandHoldingMedical></FaHandHoldingMedical>
                      <span>Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Companies;
