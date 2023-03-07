import React, { useContext } from 'react';
import Dashboard from '../Dasboard/Dasboard';
import UserTranspor from './UserTranspor';
import { useQuery } from '@tanstack/react-query';
import { DuberContext } from '@/ContextProvider/ContextProvider';
const UserTransport = () => {
    const { user } = useContext(DuberContext);
    const url = `http://localhost:5000/bookings/${user?.email}`
    const { data: transport = [] } = useQuery({
        queryKey: ['transport', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

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