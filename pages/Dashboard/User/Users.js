import React, { useEffect, useState } from 'react';
import Dashboard from '../Dasboard/Dasboard';
import { RiUserFollowLine } from 'react-icons/ri'
import User from './User';

const Users = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		fetch('http://localhost:5000/passenger')
			.then(res => res.json())
			.then(data => setUsers(data))
	}, [])

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
										className="lg:px-12 md:px-8 px-3 py-3 border-b-2 w-auto border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
									>
										ID
									</th>
									<th
										className=" lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
									>
										Name
									</th>
									<th
										className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
									>
										Email
									</th>
									<th
										className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
									>
										<RiUserFollowLine></RiUserFollowLine>
									</th>



								</tr>
							</thead>
							<tbody>
								{users?.map((data, i) => <User data={data} i={i} ></User>)}

							</tbody>
						</table>


					</div>
				</div>
			</div>
		</div>


	);
};

Users.Layout = Dashboard;

export default Users;