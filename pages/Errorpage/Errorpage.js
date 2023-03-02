import Link from 'next/link';
import React from 'react';

const Errorpage = () => {
    return (

        <div class="relative h-screen overflow-hidden bg-indigo-200 ">

            <img src="https://i.ibb.co/84Kd3vc/20602785-6325254.jpg" class="absolute object-cover w-full h-full" alt='/' />
            <div class="absolute inset-0 bg-black opacity-25">
            </div>
            <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40 ">
                <div class="relative z-10 flex flex-col items-center w-full font-mono">
                    <h1 class="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
                        You&#x27;re alone here
                    </h1>
                    <p class="font-extrabold text-white text-8xl my-44 animate-bounce">
                        404
                    </p>
                    <Link href='/' className=" w-auto grid mx-auto rounded-lg bg-[#1c1470] px-10 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2">Back To Home</Link>
                </div>
            </div>
        </div>

    );
};

export default Errorpage;