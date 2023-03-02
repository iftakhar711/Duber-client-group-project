
import { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { DiProlog } from "react-icons/di";
import { FaOpencart } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { RxAvatar } from "react-icons/rx";
import { SiInstructables } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import { TbDoorExit } from "react-icons/tb";
import Link from "next/link";


const Dashboard = ({ children }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className="lg:flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-slate-200 h-screen p-5  pt-8 relative duration-300 min-h-screen`}
            >
                <TbDoorExit
                    className={`absolute cursor-pointer -right-3 top-9  w-6 h-6 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                ></TbDoorExit>
                <div className="flex gap-x-4 items-center">

                    <MdDashboardCustomize
                        className={`cursor-pointer duration-500 w-6 h-6 ${open && "rotate-[360deg]"
                            }`}
                    ></MdDashboardCustomize>
                    <h1
                        className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Duber
                    </h1>
                </div>
                <ul className="mt-8">

                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <FaOpencart className=" w-5 h-5"></FaOpencart>
                        <Link href='/Dashboard/UserTransport/UserTransport' className={`${!open && "hidden"} origin-left duration-200`}>
                            Transport
                        </Link>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <DiProlog className=" w-5 h-5"></DiProlog>
                        <Link href='/Dashboard/AddTransport/vehichleSelection' className={`${!open && "hidden"} origin-left duration-200`}>
                            Add Transport
                        </Link>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <VscGitPullRequestCreate className=" w-5 h-5"></VscGitPullRequestCreate>
                        <Link href='/dashboardComponents' className={`${!open && "hidden"} origin-left duration-200`}>
                            Company Req
                        </Link>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <RxAvatar className=" w-5 h-5"></RxAvatar>
                        <Link href='/Dashboard/User/Users' className={`${!open && "hidden"} origin-left duration-200`}>
                            Passenger
                        </Link>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <SiInstructables className=" w-5 h-5"></SiInstructables>
                        <Link href='/Dashboard/TransportCompany/TransportCompany' className={`${!open && "hidden"} origin-left duration-200`}>
                            Company
                        </Link>
                    </li>

                    <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-3 text-black">
                        <IoLogOutOutline className=" w-5 h-5"></IoLogOutOutline>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className=" min-h-screen mx-auto p-7">
                {children}
            </div>
        </div>
    );
};
export default Dashboard;