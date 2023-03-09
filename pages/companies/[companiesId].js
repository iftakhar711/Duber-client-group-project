import ContextProvider from '@/ContextProvider/ContextProvider';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const CompaniesDetails = () => {
    // const { user } = useContext(ContextProvider)
    const [loading, setLoading] = useState(false)
    const data = new Date()

    // const handleSubmit = (e) => {
    //     setLoading(true)
    //     e.preventDefault()
    //     const form = e.target;
    //     const message = form.review.value
    //     const reviewInfo = {
    //         message,
    //         // userName: user,
    //         data
    //     }

    //     fetch("http://localhost:5000/add-review", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(reviewInfo)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success("Successfully review added")
    //             setLoading(false)
    //         })
    //         .catch(error => {
    //             toast.error(error.message)
    //             setLoading(false)
    //         })
    // }


    return (
        <div className='lg:w-[900px] w-full mx-auto px-3'>
            <h2>Dynamic page</h2>


            <section class="w-11/2 md:4/5 h-screen m-auto flex items-center">
                <div class="w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center">
                    <div class="relative">

                        <Image
                            className="flex-shrink-0 object-cover md:w-40 md:h-40 w-full h-auto rounded outline-none "
                            width={550}
                            height={550}
                            src=""
                            alt="Image"
                        />
                        <div class="arrows w-full absolute inset-y-1/2 flex justify-between px-3">
                            <button id="prev"><i class="fa-solid fa-chevron-left"></i></button>
                            <button id="next"><i class="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div class="space-y-5 p-5">
                        <h4 class="text-xl font-semibold">Shirts</h4>
                        <h1 class="text-3xl font-bold">Mens Shirt</h1>
                        <h2 class="text-xl font-bold">$43</h2>
                        <p class="text-sm">Description</p>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore illo, natus rem
                            debitis impedit error blanditiis nobis repellendus provident assumenda id. Qui, laudantium.</p>

                        <div class="flex items-center space-x-5">
                            <button
                                class="flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md hover:bg-rose-400 hover:text-white">
                                <i class="fa-regular fa-heart text-xl"></i>
                                <span>Review</span>
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            <div>

                <h2>Review</h2>
                <form >
                    <textarea name="review" id="" className='w-full h-20 border'></textarea>
                    <button type="submit" className='px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white transition-all duration-500'>
                        {loading ? "Loading..." : "Add a Review"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CompaniesDetails;