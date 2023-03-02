import Image from 'next/image';
import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { TbLocation } from 'react-icons/tb';

const Product = ({ data }) => {
    return (
        <div className="max-w-md  rounded-xl bg-white shadow-lg">
            <div className="p-8">

                <Image
                    width={400}
                    height={160}
                    src={data.img}
                    alt="Image"
                />
            </div>

            <div className="flex flex-col items-center gap-6 p-8">
                <h3 className=" text-sm md:text-[16px] lg:text-2xl  font-bold text-slate-800">{data?.vehicleName}</h3>
                <div className='flex gap-3 items-center'>
                    <TbLocation></TbLocation>
                    <p className=" text-center  text-slate-600">From {data?.from} | Destination {data?.destination}</p>
                </div>
                <div className='grid gap-3'>
                    <div className=' flex gap-2 items-center'>
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                        <span className=" text-base font-semibold text-slate-800">{data?.seatPlan} seat avaiable.</span>
                    </div>
                    <div>
                        <span className="text-sm font-semibold text-slate-800">Number Plate : {data?.numberPlate}</span>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 rounded-lg bg-slate-50 p-4">


                    <FaMoneyBillAlt className='h-6 w-6 fill-slate-500'></FaMoneyBillAlt>

                    <div>
                        <span className="text-sm text-slate-600">{data?.cost} Taka</span>
                    </div>

                </div>
                <button className="mt-3 w-full rounded-lg bg-[#1c1470] p-3 text-xs lg:text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2">Proceed to Booking</button>
            </div>
        </div>
    );
};

export default Product;