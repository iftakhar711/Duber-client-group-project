import Link from "next/link";
import React, { useContext, useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { BsGlobe2 } from "react-icons/bs";
import styles from "./Navigation.module.css";
import { DuberContext } from "@/ContextProvider/ContextProvider";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { user, userLogout } = useContext(DuberContext);
  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <li className="mr-5 flex items-center">
        <Link
          className="hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150"
          href="/companies/companies"
        >
          Company
        </Link>
      </li>
      <li className="mr-5 flex items-center">
        <Link
          className="hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150"
          href="/"
        >
          Sefty
        </Link>
      </li>
      <li className="mr-5 flex items-center">
        <Link
          className="hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150"
          href="/"
        >
          Help
        </Link>
      </li>
    </>
  );

  return (
    <div className={`${styles.mainNav}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 text-white h-[70px]">
        <div className="flex items-center">

          <Link className="text-[24px] font-semibold mr-6" href="/">Duber</Link>

          <ul className="lg:flex hidden items-center text-[16px]">
            {menuItems}
          </ul>
        </div>
        <div className="flex items-center">
          <button className="lg:mr-5 mr-4 text-[16px] lg:flex items-center hidden hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
            <BsGlobe2 className="mr-2" size={15} />
            EN
          </button>
          <Link href='/Proudacts/Products' className="lg:mr-5 mr-4 text-[16px] lg:block hidden hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
            Transports
          </Link>
          {
            user?.uid ?
              <>
                <Link className="lg:mr-5 mr-2" href='/Dashboard/Dasboard/Dasboard'>Dashboard</Link>
                < button onClick={() => userLogout()} className="lg:mr-5 mr-2 text-[16px] hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
                  Logout
                </button>
                <span title="profile">{user?.displayName}</span>
              </>
              :
              <>
                <Link href='/signin/signin'>
                  <button className="lg:mr-5 mr-2 text-[16px] hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
                    Login
                  </button>
                </Link>

                <Link href='/signup/signup'>
                  <button className="lg:mr-5 mr-4 bg-white text-black rounded-2xl lg:px-3 px-2 py-1 font-semibold duration-150">
                    Sign Up
                  </button>
                </Link>
              </>

          }
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-[#333333] p-2 rounded-[50%] duration-150 text-white font-bold lg:hidden block"
          >
            {open ? (
              <RxCross2
                className="text-white font-bold lg:hidden block"
                size={25}
              />
            ) : (
              <HiBars2
                className="text-white font-bold lg:hidden block"
                size={25}
              />
            )}
          </button>
        </div>
        <div
          className={` ${styles.phoneNav} ${open ? styles.phoneDisplay : ""}`}
        >
          <ul>{menuItems}</ul>
          <button className="lg:mr-5 mr-4 text-[16px] w-full bg-[#EEEEEE] px-4 py-2 rounded-[5px] mt-20 duration-150">
            Products
          </button>

          <button className="lg:mr-5 mr-4 mt-5 text-[16px] flex items-center hover:bg-[#333333] px-4 py-2 rounded-2xl duration-150">
            <BsGlobe2 className="mr-2" size={15} />
            EN
          </button>
        </div>
      </div>
    </div >
  );
};

export default Navigation;
