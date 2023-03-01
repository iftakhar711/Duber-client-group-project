import { TiLocationArrow } from "react-icons/ti"
import { GrFormClose } from "react-icons/gr"
import { useRef, useState } from "react";
import styles from "./Banner.module.css"

const RideTab = () => {
    const [location, setLocation] = useState("")
    const [destination, setDestination] = useState("")


    const locationRef = useRef(null);
    const locationOnButtonClick = () => {
        locationRef.current.value = "";

    };
    const destinationRef = useRef(null);
    const destinationOnButtonClick = () => {
        destinationRef.current.value = "";

    };

    return (
        <div className="lg:px-11 px-4 lg:pt-11 pt-6 pb-6">
            <h2 className="lg:text-[52px] text-[36px] font-bold lg:leading-[64px] leading-[44px] pb-7">Request a ride now</h2>
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
                <button className="px-8 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 font-medium my-6 mr-4 lg:inline block md:w-auto w-full">Request now</button>
                <button className="px-6 py-3 rounded-lg bg-gray-100 text-black hover:bg-gray-200 font-medium my-6 mr-4 lg:inline block md:w-auto w-full">Schedule for later</button>
            </div>
        </div>
    );
};

export default RideTab;