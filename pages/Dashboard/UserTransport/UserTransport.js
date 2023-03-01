import React from 'react';
import Dashboard from '../Dasboard/Dasboard';
import transport from '../../transports.json'
import UserTranspor from './UserTranspor';
const UserTransport = () => {
    return (
        <div className="flex flex-col max-w-5xl sm:w-full p-0 md:p-6  lg:p-6  dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Your Transport</h2>
            <ul className="grid md:grid-cols-1 lg:grid-cols-1 lg:gap-5 sm:w-full divide-y divide-gray-700">
                {transport?.map(data => <UserTranspor data={data}></UserTranspor>)}
            </ul>
            <button type="button" className="px-6 py-2 border rounded-md dark:bg-orange-400 dark:text-gray-900 dark:border-orange-400">
                <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
            </button>

        </div>
    );
};

UserTransport.Layout = Dashboard

export default UserTransport;