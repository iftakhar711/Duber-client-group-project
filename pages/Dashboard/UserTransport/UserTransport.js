import React from 'react';
import Dashboard from '../Dasboard/Dasboard';
import transport from '../../transports.json'
import UserTranspor from './UserTranspor';
const UserTransport = () => {
    return (
        <div className="flex flex-col w-full sm:w-full   dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Your Transport</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 sm:w-full">
                {transport?.map(data => <UserTranspor data={data}></UserTranspor>)}
            </div>

        </div>

    );
};

UserTransport.Layout = Dashboard

export default UserTransport;