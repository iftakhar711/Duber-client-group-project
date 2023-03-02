import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Companies = () => {


  // const [companyInfo, setCompanyInfo] = useState([])

  // const info = 

  // useEffect(() => {
  //     fetch("/dashboardInfo.json")
  //         .then(res => res.json())
  //         .then(data => {
  //             // setDashboardInfo(data)
  //         })
  // }, [])

  const companyInfo = [
    {
      transport: "bus",
      companyName: "Trucking Company",
      seatPlan: 52,
      cost: "$12",
      numberPlate: 1358945485,
      from: "Dhaka",
      to: "Cox's Bazar",
      image: "https://i.ibb.co/b6K5Gg6/images-removebg-preview.png"
    },
    {
      transport: "bus",
      companyName: "Trucking Company",
      seatPlan: 52,
      cost: "$12",
      numberPlate: 1358945485,
      from: "Dhaka",
      to: "Cox's Bazar",
      image: "https://i.ibb.co/b6K5Gg6/images-removebg-preview.png"
    },
    {
      transport: "bus",
      companyName: "Trucking Company",
      seatPlan: 52,
      cost: "$12",
      numberPlate: 1358945485,
      from: "Dhaka",
      to: "Cox's Bazar",
      image: "https://i.ibb.co/b6K5Gg6/images-removebg-preview.png"
    },
    {
      transport: "bus",
      companyName: "Trucking Company",
      seatPlan: 52,
      cost: "$12",
      numberPlate: 1358945485,
      from: "Dhaka",
      to: "Cox's Bazar",
      image: "https://i.ibb.co/b6K5Gg6/images-removebg-preview.png"
    }
  ]

  return (
    <div className='container mx-auto px-3 py-10'>
      <h2 className='lg:text-4xl text-2xl font-semibold text-center lg:pb-12 pb-8'>Our companies</h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        {
          companyInfo.map((info, index) =>
            <div key={index} className='border rounded-md shadow-lg hover:-translate-y-3 transition ease-in-out duration-500 lg:flex items-center justify-center justify-items-center'>
              <div className='flex items-center justify-center '>
                <img
                  className='lg:h-56 h-40'
                  src={info.image} alt="" />
              </div>
              <div className='p-4 md:flex items-center justify-center'>
                <ul>
                  <li className='flex items-center gap-2 py-1'><BsArrowRight /> <span>Transport: {info.transport}</span> </li>
                  <li className='flex items-center gap-2 py-1'><BsArrowRight /> <span>Seat Plan: {info.seatPlan}</span> </li>
                  <li className='flex items-center gap-2 py-1'><BsArrowRight /> <span>Cost: {info.cost}</span> </li>
                  <li className='flex items-center gap-2 py-1'><BsArrowRight /> <span>Number plate: {info.numberPlate}</span> </li>
                  <li className='flex items-center gap-2 py-1'><BsArrowRight /> <span>From: {info.from}</span> </li>
                  <li className='flex items-center gap-2 py-1'><BsArrowRight /> <span>Destination: {info.to}</span> </li>
                </ul>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Companies;
