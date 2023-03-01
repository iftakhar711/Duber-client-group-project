import React, { useEffect, useRef, useState } from 'react';
// import { AiOutlineFileSearch } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { TiLocationArrow } from 'react-icons/ti';
// import { FcSearch } from 'react-icons/fc';
import styles from "./Products.module.css"
// import { IoCarSportOutline } from 'react-icons/io5';
import Image from 'next/image';
// import { useQuery } from '@tanstack/react-query';
import tranport from '../transports.json'
import Product from './Product';

const Products = () => {
    const [location, setLocation] = useState("")
    const [destination, setDestination] = useState("")
    const [search, setSearch] = useState("")
    // const [data, setData] = useState(null)
    // console.log(data);

    const locationRef = useRef(null);
    const locationOnButtonClick = () => {
        locationRef.current.value = "";

    };
    const destinationRef = useRef(null);
    const destinationOnButtonClick = () => {
        destinationRef.current.value = "";

    };

    // useEffect(() => {
    //     fetch(tranport)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, []);
    // const url = 'Products.json'
    // const { data: Product = [] } = useQuery({
    //     queryKey: ['Product', Product],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    // console.log(data);

    return (
        <>
            <div className='lg:max-w-7xl md:max-w-md mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-auto mb-10 mt-10 sm:gap-2 lg:gap-20'>
                <div className="lg:px-11 px-4 lg:pt-11 pt-6 pb-6 ">
                    <h2 className="lg:text-[52px] text-[30px] font-bold lg:leading-[64px] leading-[44px] pb-7">Lets Ride</h2>
                    <div className="relative">
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            className={`w-full py-3.5 pl-10 pr-6 outline-none bg-gray-100`}
                            type="text"
                            name="location"
                            value={location}
                            ref={locationRef}
                            id=""
                            placeholder="Enter pickup location"
                        />
                        <span className={styles.pickupLocation}></span>
                        {
                            location.length ? <>
                                <GrFormClose
                                    onClick={locationOnButtonClick}
                                    className="absolute right-2 top-3 text-2xl cursor-pointer text-gray-500 hover:text-gray-800" />
                            </> : <>
                                <TiLocationArrow className="absolute right-2 top-3 text-2xl cursor-pointer text-gray-500 hover:text-gray-800" />
                            </>
                        }
                    </div>
                    <div className="mt-3 relative">
                        <input
                            className="w-full py-3.5 pl-10 pr-6 outline-none bg-gray-100"
                            type="text"
                            onChange={(e) => setDestination(e.target.value)}
                            name="destination"
                            ref={destinationRef}
                            id=""
                            placeholder="Enter destination"
                        />
                        <span className={styles.destinationInput}></span>
                        {
                            destination.length > 0 &&
                            <GrFormClose
                                onClick={destinationOnButtonClick}
                                className="absolute right-2 top-3 text-2xl cursor-pointer text-gray-500 hover:text-gray-800" />

                        }
                    </div>
                    <div className="lg:mt-8 mt-4">
                        <button className="px-8 py-3 rounded-lg bg-[#1c1470] text-white hover:bg-[#2a2378] font-medium my-6 mr-4 lg:inline block md:w-auto w-full">Request now</button>
                        <button className="px-6 py-3 rounded-lg bg-gray-100 text-black hover:bg-gray-200 font-medium my-6 mr-4 lg:inline block md:w-auto w-full">Schedule for later</button>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8 lg:mt-16">
                        <div className="flex flex-col items-end px-3">
                            <Image

                                className="object-cover mb-6 rounded shadow-lg  sm:h-48 xl:h-56 sm:w-48 xl:w-56"
                                src="https://i.ibb.co/njWZK4f/gleb-lukomets-FYs-PAVwxekc-unsplash.jpg"
                                alt="Image"
                                width={112}
                                height={112}
                            />

                            <Image
                                className="object-cover rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://i.ibb.co/yfqjxyh/mark-chan-j876-KO2-OKI-unsplash.jpg"
                                alt="Image"
                                width={96}
                                height={96}
                            />
                        </div>
                        <div className="px-3">
                            <Image
                                className="object-cover rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://i.ibb.co/Q94ykjt/ryoji-iwata-stes-J0j-U6-SU-unsplash.jpg"
                                alt="Image"
                                width={160}
                                height={160}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="mx-auto mb-6 max-w-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <form action="" className="relative mx-auto w-max">
                    <input type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        className="peer cursor-pointer relative z-10 h-12  rounded-full border bg-transparent  outline-none w-full focus:cursor-text border-[#120c5c] pl-16 pr-4" />
                    <AiOutlineFileSearch className='absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500'></AiOutlineFileSearch>
                </form>
                <button className="mx-auto relative mb-6 md:mb-0 lg:mb-0 group overflow-hidden px-6 w-28 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r bg-[#120c5c] hover:to-purple-600">
                    <span className="relative text-sm text-white">Search</span>
                    <div className="flex items-center -space-x-3 translate-x-3">
                        <FcSearch className='h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0'></FcSearch>
                    </div>
                </button>
            </div> */}

            <div className=' bg-slate-200 mt-10 mb-10 p-10 '>

                <div className="grid lg:max-w-7xl   gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {tranport?.map(data => <Product data={data}></Product>)}

                </div>
                <button className="mt-8 w-48 grid mx-auto rounded-lg bg-[#1c1470] p-3 text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2">See More</button>
            </div>



        </>
    )
};

export default Products;