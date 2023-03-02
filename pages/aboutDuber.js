import React from 'react';

const aboutDuber = () => {
    return (

        <div class="flex items-center justify-center w-full h-screen bg-gradient-to-tr from-theme-blue to-theme-pink overflow-hidden">

            <div class="box-wrapper relative w-1/2 h-4/5  p-16 select-none">

                <div class="left-circle rounded-full border border-white w-6 h-6 absolute left-0 top-12"></div>

                <div class="two-circle w-10 h-10 absolute right-0 top-0">
                    <div class="rounded-full border border-white w-full h-full absolute right-0 top-0"></div>
                    <div class="rounded-full border-2 border-white w-6 h-6 absolute left-6 top-4"></div>
                </div>



                <div class="box rounded-2xl w-full h-full bg-gray-100 flex flex-wrap shadow-theme-1">

                    <div class="left-side bg-gradient-to-tr from-theme-pink to-theme-blue w-1/2 h-full rounded-2xl transform scale-105 shadow-theme-2">


                        {/* <!-- nike logo end --> */}

                        <div class="big-number absolute -right-12 top-0 leading-none">
                            <span class="text-19xl pt-font bg-gradient-to-tr from-theme-pink to-theme-blue text-transparent bg-clip-text text-shadow">32</span>
                        </div>
                        {/* <!-- big number end --> */}

                        <div class="shoe h-full w-full flex items-end justify-center group">
                            <div class="relative">
                                {/* Ekhane companyer logo thakbe */}
                                {/* <img src="https://i.ibb.co/HgNtS7C/shoe.png" alt="shoe" class="transition-all duration-500 transform group-hover:-rotate-45 group-hover:scale-125" /> */}

                                {/* <div class="dots w-full absolute left-0 bottom-12 flex items-center justify-center space-x-3">
                                    <span class="hover:bg-white transition-all cursor-pointer shadow-2xl w-4 h-4 bg-white rounded-full block"></span>
                                    <span class="hover:bg-white transition-all cursor-pointer shadow-2xl w-4 h-4 bg-gray-300 rounded-full block"></span>
                                    <span class="hover:bg-white transition-all cursor-pointer shadow-2xl w-4 h-4 bg-gray-300 rounded-full block"></span>
                                </div> */}

                                {/* <div class="icon w-10 h-10 cursor-pointer transition-all hover:scale-125 hover:shadow-3xl transform absolute left-32 -top-5 group-hover:left-0 group-hover:top-10 duration-500 bg-theme-pink p-2 text-white rounded-full z-2">
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" /></svg>
                                </div>

                                <div class="icon w-10 h-10 cursor-pointer transition-all hover:scale-125 hover:shadow-3xl transform absolute right-10 bottom-32 group-hover:right-0 group-hover:bottom-48 duration-500 bg-theme-blue p-2 text-white rounded-full z-2">
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" /></svg>
                                </div> */}
                            </div>
                            {/* <!-- shoe end --> */}

                        </div>
                    </div>
                    <div class="left-side bg-gray-200 w-1/2 h-full rounded-2xl pl-20 pr-8 py-6">


                        <div class="paragraph py-3">
                            <span class="font-bold text-2xl text-gray-600">Company Name</span>
                            <p class="leading-6 mt-3 text-gray-700 text-lg">Details thakbe</p>
                        </div>

                        <div class="filter mt-10">
                            <div class="w-full flex flex-col space-y-8 text-xl text-gray-600">


                                {/* <!-- element --> */}

                                <div class="flex leading-none">
                                    <div class="w-1/3">Colour</div>
                                    <div class="w-2/3 flex justify-center space-x-8">



                                    </div>
                                </div>
                                {/* <!-- element --> */}

                                <div class="flex leading-none">
                                    <div class="w-1/3">Amount</div>
                                    <div class="w-2/3 flex space-x-6 justify-center">



                                    </div>
                                </div>
                                {/* <!-- element --> */}

                                <div class="buy-now ">
                                    <button class="relative bg-[#1c1470] text-white p-3 w-4/5 mx-auto flex items-center justify-center shadow-2xl rounded-sm uppercase group transition-all hover:bg-theme-blue-dark">
                                        <span>Review</span>
                                        <span class="shadow-xl bg-theme-blue-dark group-hover:bg-theme-pink transition-all transform group-hover:rotate-90 duration-500 text-white block w-10 h-10 p-2 rounded-full absolute right-2">
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" /></svg>
                                        </span>
                                    </button>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


                <div class="text-center w-full mt-12 uppercase text-xl tracking-more-wide text-white">Learn with aamir</div>
            </div>

        </div>

    );
};

export default aboutDuber;