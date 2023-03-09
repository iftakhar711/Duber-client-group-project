import { DuberContext } from '@/ContextProvider/ContextProvider';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { GiCrossMark } from 'react-icons/gi';


const ProductModal = ({ visibel, onClose, data }) => {
    const router = useRouter()
    const { user } = useContext(DuberContext);
    if (!visibel) return null


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const vehicle = form.vehicle.value;
        const name = form.name.value;
        const email = form.email.value;
        const from = form.from.value;
        const destination = form.destination.value;
        const seatPlan = form.seatPlan.value;
        const cost = form.cost.value;
        const number = form.number.value;
        const date = form.date.value;
        const numberPlate = form.numberPlate.value;

        const booking = {
            vehicle,
            name,
            email,
            from,
            destination,
            seatPlan,
            cost,
            number,
            date,
            numberPlate
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    router.push('/')
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <div className=" z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">

            <div className="bg-white rounded w-[500px] h-auto p-10">
                <GiCrossMark onClick={onClose} className='mb-3 w-5 h-5'></GiCrossMark>
                {/* <h3 className="text-[20px] font-bold ">{data?.vehicleName}</h3> */}
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-x-3 mt-4 gap-y-6'>

                    <div>

                        <input className="text-[20px] font-bold bg-white border-0 " name="vehicle" type="text" defaultValue={data?.vehicleName} value={data?.vehicleName} />
                    </div>
                    <div>
                        <label htmlFor="From" className="text-sm"> Name</label>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="w-full p-1 rounded-md border-2  font-semibold  focus:ring-orange-400" />
                    </div>
                    <div>
                        <label htmlFor="From" className="text-sm"> Email</label>
                        <input name="email" type="email" defaultValue={user?.email} disabled className="w-full p-1 rounded-md border-2  font-semibold  focus:ring-orange-400" />
                    </div>

                    <span className=' flex gap-2 justify-between'>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="From" className="text-sm"> from</label>
                            <input className="w-full p-1 rounded-md border-2  font-semibold  focus:ring-orange-400 " type="text" name='from' id='from' value={data.from} defaultValue={data.from} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="From" className="text-sm"> Destination</label>
                            <input className="w-full p-1 rounded-md border-2 font-semibold  focus:ring-orange-400 " type="text" name='destination' id='destination' value={data.destination} defaultValue={data.destination} />
                        </div>
                    </span>
                    <span className=' flex gap-2 justify-between'>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="From" className="text-sm"> Seat</label>
                            <input className="w-full p-1 rounded-md border-2 font-bold   focus:ring-orange-400 " type="text" name='seatPlan' id='seatPlan' defaultValue={data.seatPlan} />
                        </div>
                        <div>
                            <label htmlFor="From" className="text-sm"> Cost</label>
                            <input className="w-full p-1 rounded-md border-2  font-bold  focus:ring-orange-400 " type="text" name='cost' id='cost' value={data.cost} defaultValue={data.cost} />
                        </div>
                    </span>
                    <span className=' flex gap-2 justify-between'>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="From" className="text-sm"> Number</label>
                            <input type="tel" className="w-auto p-1 rounded-md border-2  focus:ring-orange-400 " name="number" id="number" required />

                        </div>
                        <div>
                            <label htmlFor="From" className="text-sm"> Date</label>
                            <input className="w-auto p-1 rounded-md border-2   focus:ring-orange-400 " type="datetime-local" name="date" id="date" required />

                        </div>
                    </span>
                    <div>
                        <label htmlFor="From" className="text-sm"> Number Plate</label>
                        <input className="w-full p-1 rounded-md border-2  font-semibold  focus:ring-orange-400 " type="text" name='numberPlate' id='numberPlate' value={data?.numberPlate} defaultValue={data?.numberPlate} />
                    </div>
                    {/* Payment */}
                    {/* <div>
                        <label htmlFor="From" className=""> Payment</label>
                        <input className="w-full p-1 rounded-md border-2  font-bold  focus:ring-orange-400 " type="text" name='Payment' id='Payment' placeholder='Payment' />
                    </div> */}


                    {/* <button className=" w-full rounded-lg bg-[#3c3777] p-2 text-[12px] lg:text-[16px] font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2"> Payment</button> */}
                    {/* Payment */}
                    <button className=" w-full rounded-lg bg-[#1c1470] p-2 text-[12px] lg:text-[16px] font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2"> CONFIRM</button>
                </form>
            </div>
        </div>
    )
};

export default ProductModal;
