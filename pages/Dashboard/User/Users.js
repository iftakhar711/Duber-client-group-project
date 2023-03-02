import React from 'react';
import Dashboard from '../Dasboard/Dasboard';
import { RiUserFollowLine } from 'react-icons/ri'

const Users = () => {
	return (
		<div className="grid mx-auto px-4 sm:px-8">
			<div className="py-8">
				<div>
					<h2 className="text-2xl font-semibold leading-tight">User Information</h2>
				</div>
				<div className="overflow-x-auto">
					<div
						className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
					>

						<table className="min-w-full grid gap-x-10 leading-normal">
							<thead>
								<tr>
									<th
										className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
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

									<th
										className="lg:px-12 md:px-8 px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
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

Users.Layout = Dashboard;

export default Users;