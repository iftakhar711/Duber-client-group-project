import React, { useEffect, useState } from 'react';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import Dashboard from '../Dasboard/Dasboard';
import Transportcom from './Transportcom';

const TransportCompany = () => {

    const [company, setCompany] = useState();

    useEffect(() => {
        fetch('https://duber-group-project-server.vercel.app/company')
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])

    console.log(company);
    return (
        <div className="grid mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">User Information</h2>
                </div>
                <div className="">
                    <div
                        className="inline-block w-auto shadow-md rounded-lg "
                    >

                        <table className="w-auto leading-normal">
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



                                </tr>
                            </thead>
                            <tbody>

                                {company?.map((com, i) => <Transportcom key={com._id} com={com} i={i}></Transportcom>)}
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