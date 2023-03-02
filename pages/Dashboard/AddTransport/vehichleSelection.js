import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Dashboard from "../Dasboard/Dasboard";

const SignupEmailDriveVehichleSelection = () => {
  const [vehicle, setVehicle] = useState("")
  const [vehicleName, setVehicleName] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [seatPlan, setSeatPlan] = useState("")
  const [fromYouLocation, setFromYourLocation] = useState("")
  const [numberPlate, setNumberPlate] = useState("")
  const [destination, setDestination] = useState("")
  const [cost, setCost] = useState("")
  const [loading, setLoading] = useState(false)


  const vehiclesData = {
    transport: vehicle,
    companyName: vehicleName,
    seatPlan: seatPlan,
    cost: cost,
    numberPlate: numberPlate,
    from: fromYouLocation,
    to: destination,
    image: imgUrl
  }

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    const form = e.target;
    fetch("http://localhost:5000/add-transport", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vehiclesData)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Successfully Vehicles Added");
        form.reset();
        console.log(data)
        setLoading(false)
      })
      .catch(error => {
        toast.error(error.message)
        setLoading(false)
      })
  }


  return (
    <div className="md:w-[550px] w-full mx-auto">
      <div className="shadow-lg border p-3 rounded-md">
        <div>
          {/* <Image
            width={600}
            height={250}
            src="https://i.ibb.co/hfhm6Jm/vehicle.png"
            alt="Image"
          /> */}
          <img src="https://i.ibb.co/hfhm6Jm/vehicle.png" alt="" />
        </div>
        <div>
          <h2 className="text-[24px] mb-4 mt-3 font-semibold">Enter your vehicle information</h2>
        </div>
        <form onSubmit={handleSubmit}>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Company Name</label>
            <input
              onChange={(e) => setVehicleName(e.target.value)}
              placeholder='Vehicle Name'
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text" />

          </div>

          <div>
            <label className="text-lg font-medium pb-2 block">Image</label>
            <input
              required
              onChange={(e) => setImgUrl(e.target.value)}
              type="url"
              id='image'
              name='image'
              placeholder='url'
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
            />
          </div>

          <div className="py-4 grid grid-cols-2 gap-2">
            <div className="py-4">
              <label className="text-lg font-medium pb-2 block">Transport</label>
              <select
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md"
                name=""
                id=""
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
                onChange={(e) => setSeatPlan(e.target.value)}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md" name="" id="">
                <option value="">Select...</option>
                <option value="2">52</option>
                <option value="4">50</option>
                <option value="10">48</option>
                <option value="14">14</option>
                <option value="48">10</option>
                <option value="50">04</option>
                <option value="52">02</option>
              </select>
            </div>
          </div>

          <div className="py-4 grid grid-cols-2 gap-2">
            <div>
              <label className="text-lg font-medium pb-2 block">From</label>
              <input
                onChange={(e) => setFromYourLocation(e.target.value)}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
                type="text"
                name=""
                id=""
                placeholder="From your location"
              />
            </div>
            <div>
              <label className="text-lg font-medium pb-2 block">Destination</label>
              <input
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
                type="text"
                name=""
                id=""
                placeholder="To Destination"
              />
            </div>
          </div>

          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Cost</label>
            <input
              onChange={(e) => setCost(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text"
              name=""
              id=""
              placeholder="Cost"
            />
          </div>
          <div className="py-4">
            <label className="text-lg font-medium pb-2 block">Number plate</label>
            <input
              onChange={(e) => setNumberPlate(e.target.value)}
              className="w-full border py-2 px-3 focus:outline-none bg-gray-100 rounded-md focus:bg-gray-50 focus:bg-opacity-70"
              type="text" />
          </div>

          <div className="mt-3">
            <button
              disabled={!(vehicle.length && seatPlan.length && fromYouLocation.length && numberPlate.length && destination.length && cost.length && imgUrl.length && vehicleName.length)}
              className={`${vehicle.length && seatPlan.length && fromYouLocation.length && numberPlate.length && destination.length && cost.length && imgUrl.length && vehicleName.length ? "bg-gray-900 hover:bg-gray-800 transition ease-in-out duration-500 text-gray-100" : "bg-gray-200 text-gray-500 cursor-not-allowed"} w-full px-4 py-3 text-center rounded-md font-medium`}
              type="submit">{loading ? "Loading..." : "Continue"}</button>
          </div>

        </form>
      </div>
    </div>
  );
};
SignupEmailDriveVehichleSelection.Layout = Dashboard

export default SignupEmailDriveVehichleSelection;
