import React from 'react';

const User = ({ data, i }) => {
    return (
        <tr>
            <td
                className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200   text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
                {i + 1}
            </td>
            <td
                className=" lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200   text-xs font-semibold text-gray-700  tracking-wider"
            >
                {data?.fullName}
            </td>
            <td
                className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-700  tracking-wider"
            >
                {data?.email}
            </td>
            <td
                className="lg:px-12 md:px-8 px-3 py-3 border-b-2  border-gray-200   text-lg font-semibold text-gray-700 uppercase tracking-wider"
            >
                {/* <MdOutlineEmojiTransportation></MdOutlineEmojiTransportation> */}
            </td>



        </tr>
    );
};

export default User;