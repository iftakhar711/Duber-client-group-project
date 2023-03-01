import React from 'react';
import Dashboard from '../Dasboard/Dasboard';

const Users = () => {
	return (
		<div className=" p-2 w-full  sm:p-4 dark:text-gray-100">
			<h2 className="mb-4 text-2xl font-semibold leading-tight">Users</h2>
			<div >
				<table className="min-w-full text-xs">

					<thead className="dark:bg-gray-700 justify-evenly">
						<tr className="text-left">
							<th className="p-3">Name</th>
							<th className="p-3">Email Address</th>
							<th className="p-3">Admin</th>
							<th className="p-3">Verify</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">

							{/* {users?.map(data =>
								<td className="p-3">
									<p>{users.name}</p>
								</td>
								<td className="p-3">
									<p>{users.email}</p>
								</td>
								 <td>className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Admin</button>}</td>
						<td> className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Verify</button>}</td>
							} */}
						</tr>

					</tbody>
				</table>
			</div >
		</div >
	);
};

Users.Layout = Dashboard;

export default Users;