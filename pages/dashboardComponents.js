import { useQuery } from '@tanstack/react-query';
import { reload } from 'firebase/auth';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsArrowRight } from 'react-icons/bs';
import { FaHandHoldingMedical } from "react-icons/fa"
import Dashboard from './Dashboard/Dasboard/Dasboard';


const DashboardComponents = () => {
    const [dashboardInfo, setDashboardInfo] = useState([])

    useEffect(() => {
        fetch("https://duber-group-project-server.vercel.app/alltransport")
            .then(res => res.json())
            .then(data => {
                setDashboardInfo(data)
            })
    }, [])
    // const url = 'https://duber-group-project-server.vercel.app/alltransport'
    // const { data: dashboardInfo = [] } = useQuery({
    //     queryKey: ['dashboardInfo',],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    // console.log(dashboardInfo[5].approve);

    const handelMakeTrue = (id) => {
        fetch(`https://duber-group-project-server.vercel.app/alltransport/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Approved.')

                }
            })
    }


    return (
        <div className='lg:w-[1000px] w-full mx-auto px-3'>
            <h1 className=' font-bold text-lg'>Addeed products</h1>
            <div className="flex flex-col space-y-4">
                <ul className="flex flex-col divide-y divide-gray-700">

                    {

                        dashboardInfo.map((info, index) =>
                            // console.log(info)

                            info?.approve === false &&
                            <li key={index} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex md:flex-row flex-col w-full space-x-2 sm:space-x-4">
                                    <Image
                                        className="flex-shrink-0 object-cover md:w-40 md:h-40 w-full h-auto rounded outline-none "
                                        width={550}
                                        height={550}
                                        src={info.img}
                                        alt="Image"
                                    />
                                    {/* <img className="flex-shrink-0 object-cover md:w-40 md:h-40 w-full h-auto rounded outline-none " src={info.img} alt="" /> */}
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
                                                    <li className='flex items-center gap-2 capitalize'><BsArrowRight /> <span>Destination: {info.destination}</span> </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex text-sm gap-4">
                                            <button type="button" className="flex items-center px-4 py-2 rounded-md space-x-1 border hover:-translate-y-2 transition-all duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                    <rect width="32" height="200" x="168" y="216"></rect>
                                                    <rect width="32" height="200" x="240" y="216"></rect>
                                                    <rect width="32" height="200" x="312" y="216"></rect>
                                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                </svg>
                                                <span>Remove</span>
                                            </button>
                                            <button onClick={() => handelMakeTrue(info._id)} type="button" className="flex items-center px-4 py-2 rounded-md space-x-1 border hover:-translate-y-2 transition-all duration-500 bg-gray-900 hover:bg-gray-700 text-white">
                                                <FaHandHoldingMedical></FaHandHoldingMedical>
                                                <span>Accept</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>


                        )
                    }
                </ul>
            </div>
        </div>
    );
};

DashboardComponents.Layout = Dashboard

export default DashboardComponents;