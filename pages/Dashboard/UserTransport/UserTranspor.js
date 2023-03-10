// import { useQuery } from '@tanstack/react-query';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import UserTranposModal from './UserTranposModal';


const stripePromise = loadStripe('pk_test_51MjbvlJh8SD3yhSqWP9QD6XKfMxg8eoHzAa45s9r5tz52UYI38iTq6FcbtyM4Mky3z0K4xqTfsbEHGShRG2F6S6Y00EnI3XNjj');

const UserTranspor = ({ data }) => {

    // const handleDeleteRide = id => {
    //     fetch(`http://localhost:5000/bookings/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success('Delete succesfully...')
    //             refetch()
    //         })
    // }

    const [showModal, setShowModal] = useState(false)
    const CloseModal = () => setShowModal(false)

    return (
        <>
            <div class="flex justify-center">
                <div
                    class="flex flex-col rounded-lg bg-white shadow-lg  w-[420px] h-[400px] justify-center items-center  md:w-[600px] md:h-[250px] lg:w-[600px] lg:h-[250px] md:flex-row ">
                    <Image
                        alt='/'
                        className="flex-shrink-0 object-cover dark:border-transparent rounded outline-none "
                        src="data:image/jpeg;base64,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"
                        width={250}
                        height={200}
                    ></Image>
                    <div class="flex flex-col justify-start p-6 gap-y-4">
                        <h3 className="text-lg font-bold leading-snug sm:pr-8 uppercase">{data?.vehicle}</h3>
                        {/* <p className=" text-slate-700 font-semibold capitalize">{data.transport}</p> */}

                        <p className=" text-slate-700 font-semibold capitalize">From {data?.from} | Destination {data?.destination}</p>
                        <span className='flex justify-between'>
                            <p className=" text-sm">NP : {data?.numberPlate}</p>
                            <p className=" text-sm">Seat : {data?.seatPlan}</p>
                        </span>
                        <span className='flex justify-between'>
                            <p className=" text-sm">Tel : {data?.number}</p>
                            <p className=" text-sm">Date : {data?.date}</p>
                        </span>
                        <span className='flex mx-auto '>
                            <span className='flex items-center gap-1'>
                                <FaMoneyBillAlt className='h-4 w-4 fill-slate-500'></FaMoneyBillAlt>
                                <p className="text-lg font-semibold">{data.cost}</p>
                            </span>

                        </span>


                        {data.cost && !data.paid &&

                            <button className=" w-full rounded-lg bg-[#3c3777] p-2 font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2">
                                <span onClick={() => setShowModal(true)} className=' flex justify-center items-center gap-1'>
                                    <MdPayment className=' text-slate-400 w-4 h-4'></MdPayment>
                                    Payment
                                </span>
                            </button>
                        }
                        {
                            data.cost && data.paid &&

                            <button disabled className=" w-full rounded-lg bg-[#3c3777] p-2 font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2">
                                <span className=' flex justify-center items-center gap-1'>
                                    <MdPayment className=' text-slate-400 w-4 h-4'></MdPayment>
                                    Paid
                                </span>
                            </button>
                        }

                        {/* payment modal */}




                    </div>
                </div>
            </div>
            <>
                <Elements stripe={stripePromise}>
                    <UserTranposModal onClose={CloseModal} data={data} visibel={showModal}></UserTranposModal>
                </Elements>
            </>
        </>
    );
};

export default UserTranspor;