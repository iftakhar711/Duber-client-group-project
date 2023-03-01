import React , {useState} from 'react';
import {FaEdit} from "react-icons/fa"


const DashboardComponents = () => {

    const [info, setInfo] = useState("")

    return (
        <div className='lg:w-[1000px] w-full mx-auto px-3'>
            <div className="flex flex-col p-6 space-y-4 sm:p-10">
                <h2 className="text-xl font-semibold">Companies</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32" src="https://i.ibb.co/b6K5Gg6/images-removebg-preview.png" alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Trucking company</h3>
                                        <p className="text-sm">These companies typically offer a range of transportation services, including local and long-distance delivery, freight hauling, and logistics management. They may operate their own fleet of trucks or contract with independent drivers to transport goods on their behalf.</p>
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
                                    <button type="button" className="flex items-center px-4 py-2 rounded-md space-x-1 border hover:-translate-y-2 transition-all duration-500 bg-gray-900 hover:bg-gray-700 text-white">
                                        <FaEdit></FaEdit>
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32" src="https://i.ibb.co/DrgHGKs/download-removebg-preview.png" alt="" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Truck transport</h3>
                                        <p className="text-sm">Truck transport is a mode of transportation that involves the use of trucks or other large vehicles to move goods or freight from one location to another. This mode of transportation is particularly popular for shipping goods over short to medium distances within a country or region Truck transport offers</p>
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
                                    <button type="button" className="flex items-center px-4 py-2 rounded-md space-x-1 border hover:-translate-y-2 transition-all duration-500 bg-gray-900 hover:bg-gray-700 text-white">
                                        <FaEdit></FaEdit>
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32" src="https://i.ibb.co/f9qKKcG/download-removebg-preview-1.png" alt="Set of travel chargers" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Logistics Delivery</h3>
                                        <p className="text-sm">Logistics delivery refers to the process of managing the movement and delivery of goods or products from one location to another. It involves a range of activities, including transportation planning, inventory management, order processing, and delivery tracking.</p>
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
                                    <button type="button" className="flex items-center px-4 py-2 rounded-md space-x-1 border hover:-translate-y-2 transition-all duration-500 bg-gray-900 hover:bg-gray-700 text-white">
                                        <FaEdit></FaEdit>
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardComponents;