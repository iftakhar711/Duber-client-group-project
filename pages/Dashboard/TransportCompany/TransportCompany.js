import React from 'react';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import Dashboard from '../Dasboard/Dasboard';

const TransportCompany = () => {
    return (
        <div className="grid mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">Company Information</h2>
                </div>
                <div className="-mx-4 sm:-mx-8  sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block w-full shadow-md rounded-lg overflow-hidden"
                    >

                        <table className="w-full grid  leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ID
                                    </th>
                                    <th
                                        className=" lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        className="lg:px-12 md:px-8 px-3 py-3 border-b-2  border-gray-200 bg-gray-100  text-lg font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        <MdOutlineEmojiTransportation></MdOutlineEmojiTransportation>
                                    </th>

                                    <th
                                        className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Delete
                                    </th>

                                </tr>
                            </thead>
                            <tbody>


                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>


    );
};

TransportCompany.Layout = Dashboard;

export default TransportCompany;