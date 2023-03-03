import Image from 'next/image';
import React from 'react';
import { CiSquareRemove } from 'react-icons/ci';
import { FaMoneyBillAlt } from 'react-icons/fa';

const UserTranspor = ({ data }) => {
    return (


        <div class="flex justify-center">
            <div
                class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-[420px] h-[400px] justify-center items-center  md:w-[600px] md:h-[250px] lg:w-[600px] lg:h-[250px] md:flex-row ">
                <Image
                    alt='/'
                    className="flex-shrink-0 object-cover dark:border-transparent rounded outline-none  dark:bg-gray-500"
                    src={data.img}
                    width={250}
                    height={200}
                ></Image>
                <div class="flex flex-col justify-start p-6 gap-y-4">
                    <h3 className="text-lg font-bold leading-snug sm:pr-8 uppercase">{data.vheiclename}</h3>
                    <p className=" text-slate-700 font-semibold capitalize">{data.transport}</p>

                    <p className=" text-slate-700 font-semibold capitalize">From {data.from} | Destination {data.destination}</p>
                    <span className='flex justify-between'>
                        <p className=" text-sm">NP : {data.numberplate}</p>
                        <p className=" text-sm">Seat : {data.seat}</p>
                    </span>
                    <span className='flex justify-between'>
                        <span className='flex items-center gap-1'>
                            <FaMoneyBillAlt className='h-4 w-4 fill-slate-500'></FaMoneyBillAlt>
                            <p className="text-lg font-semibold">{data.cost}</p>
                        </span>
                        <button className=" w-auto flex items-center justify-center gap-1  rounded-lg bg-[#1c1470] p-3 text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2">
                            <CiSquareRemove className=' text-slate-400 w-4 h-4'></CiSquareRemove>
                            Remove
                        </button>
                    </span>
                </div>

            </div>
        </div>

    );
};

export default UserTranspor;