import { cost, destination, from, numberPlate, seatPlan, transport, transportImg, vehicleName, approve } from "@/redux/slies/addTrnsportSlice";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../Dasboard/Dasboard";

const VehichleSelection = () => {
  const dispatch = useDispatch();
  const transportData = useSelector(state => state.addTransport)

  const handelSubmt = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = e.target.tranportImg.files[0]
    const formData = new FormData();
    formData.append("image", img);

    fetch(`https://api.imgbb.com/1/upload?key=73adcb71f1df263fc9562299dd50904b`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        dispatch(transportImg(data.data.url));
        fetch('http://localhost:5000/addtransport', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ ...transportData, img: data.data.url })
        })
          .then(res => res.json())
          .then(() => {
            form.reset();
            toast.success('Added Succesfully')
          })

      })
      .catch(error => {
        toast.error(error)
        console.log(error)
      })
  };

  return (
    <div className="md:w-[550px] w-full mx-auto">
      <div className="shadow-lg border p-3 rounded-md">
        <div>

          <Image

            width={550}
            height={550}
            src='https://i.ibb.co/hfhm6Jm/vehicle.png'
            alt="Image"
          />

        </div>
        <div>
          <h2 className="text-[24px] mb-4 mt-3 font-semibold">Enter your vehicle information</h2>
        </div>
        <form onSubmit={(e) => handelSubmt(e)}>
          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Company Name</label>
            <input
              onChange={(e) => dispatch(vehicleName(e.target.value))}
              placeholder='Vehicle Name'
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text" required />
          </div>

          <div>
            <label className="text-lg font-medium pb-2 block">Image</label>
            <input
              required
              type="file"
              name="tranportImg"
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
            />
          </div>

          <div className="py-4 grid grid-cols-2 gap-2">
            <div className="py-4">
              <label className="text-lg font-medium pb-2 block">Transport</label>
              <select
                onChange={(e) => dispatch(transport(e.target.value))}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md" required
              >
                <option value="">Select...</option>
                <option value="Bus">Bus</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
              </select>
            </div>

            <div className="py-4">
              <label className="text-lg font-medium pb-2 block">Seat Plan</label>
              <select
                onChange={(e) => dispatch(seatPlan(e.target.value))}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md" required>
                <option value="">Select...</option>
                <option value="52">52</option>
                <option value="50">50</option>
                <option value="48">48</option>
                <option value="14">14</option>
                <option value="10">10</option>
                <option value="04">04</option>
                <option value="02">02</option>
              </select>
            </div>
          </div>

          <div className="py-4 grid grid-cols-2 gap-2">
            <div>
              <label className="text-lg font-medium pb-2 block">From</label>
              <input
                onChange={(e) => dispatch(from(e.target.value))}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
                type="text"
                placeholder="From your location"
                required
              />
            </div>
            <div>
              <label className="text-lg font-medium pb-2 block">Destination</label>
              <input
                onChange={(e) => dispatch(destination(e.target.value))}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
                type="text"
                placeholder="To Destination"
                required
              />
            </div>
          </div>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Cost</label>
            <input
              onChange={(e) => dispatch(cost(e.target.value))}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text"
              placeholder="Cost"
              required
            />
          </div>
          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Number plate</label>
            <input
              onChange={e => dispatch(numberPlate(e.target.value))}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text" required />
          </div>

          <div className="mt-3">
            <button
              className={`"bg-gray-900 hover:bg-gray-800 hover:text-white transition ease-in-out duration-500 text-black bg-gray-200" w-full px-4 py-3 text-center rounded-md font-medium`}
              type="submit">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

VehichleSelection.Layout = Dashboard

export default VehichleSelection;
