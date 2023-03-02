import React, { useEffect, useRef, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { TiLocationArrow } from 'react-icons/ti';
import styles from "./Products.module.css"
import Image from 'next/image';
import Product from './Product';

const Products = () => {
    const [location, setLocation] = useState("")
    const [destination, setDestination] = useState("")
    const [product, setProduct] = useState([]);

    const locationRef = useRef(null);
    const locationOnButtonClick = () => {
        locationRef.current.value = "";

    };
    const destinationRef = useRef(null);
    const destinationOnButtonClick = () => {
        destinationRef.current.value = "";

    };

    useEffect(() => {
        fetch(`http://localhost:5000/alltransport?location=${location}&destination=${destination}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [location, destination]);

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

            <div className=' bg-slate-200 mt-10 mb-10 p-10 '>

                <div className="grid lg:max-w-7xl   gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {product?.map(data => <Product data={data} key={data._id}></Product>)}
                </div>
                <button className="mt-8 w-48 grid mx-auto rounded-lg bg-[#1c1470] p-3 text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2">See More</button>
            </div>



        </>
    )
};

export default Products;