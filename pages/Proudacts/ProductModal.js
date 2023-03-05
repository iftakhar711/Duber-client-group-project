import { DuberContext } from '@/ContextProvider/ContextProvider';
import React, { useContext } from 'react';
import { GiCrossMark } from 'react-icons/gi';

const ProductModal = ({ visibel, onClose, data }) => {
    const { user } = useContext(DuberContext);
    if (!visibel) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">

            <div className="bg-white  rounded w-[500px] h-[650px] p-10">
                <GiCrossMark onClick={onClose} className='mb-3 w-5 h-5'></GiCrossMark>
                <h3 className="text-[20px] font-bold ">{data?.vehicleName}</h3>
                <form className='grid grid-cols-1 gap-x-3 mt-4 gap-y-6'>
                    <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                    <span className=' flex gap-2 justify-between'>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="From" className="text-sm"> from</label>
                            <input className="w-full p-1 rounded-md border-2  font-semibold  focus:ring-orange-400 " type="text" name='from' id='from' defaultValue={data.from} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="From" className="text-sm"> Destination</label>
                            <input className="w-full p-1 rounded-md border-2 font-semibold  focus:ring-orange-400 " type="text" name='destination' id='destination' defaultValue={data.destination} />
                        </div>
                    </span>
                    <span className=' flex gap-2 justify-between'>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="From" className="text-sm"> Seat</label>
                            <input className="w-full p-1 rounded-md border-2 font-bold   focus:ring-orange-400 " type="text" name='seatPlan' id='seatPlan' defaultValue={data.seatPlan} />
                        </div>
                        <div>
                            <label htmlFor="From" className="text-sm"> Cost</label>
                            <input className="w-full p-1 rounded-md border-2  font-bold  focus:ring-orange-400 " type="text" name='cost' id='cost' defaultValue={data.cost} />
                        </div>
                    </span>
                    <div>
                        <label htmlFor="From" className="text-sm"> Number Plate</label>
                        <input className="w-full p-1 rounded-md border-2  font-semibold  focus:ring-orange-400 " type="text" name='numberPlate' id='numberPlate' defaultValue={data?.numberPlate} />
                    </div>
                    {/* Payment */}
                    <div>
                        <label htmlFor="From" className="text-sm"> Payment</label>
                        <input className="w-full p-1 rounded-md border-2  font-bold  focus:ring-orange-400 " type="text" name='Payment' id='Payment' placeholder='Payment' />
                    </div>
                    <br />

                    <button className="mt-3 w-full rounded-lg bg-[#3c3777] p-3 text-xs lg:text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2"> Payment</button>
                    {/* Payment */}
                    <button className="mt-3 w-full rounded-lg bg-[#1c1470] p-3 text-xs lg:text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2"> CONFIRM</button>
                </form>
            </div>
        </div>
    )
};

export default ProductModal;
