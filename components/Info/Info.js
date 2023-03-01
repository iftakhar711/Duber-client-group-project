import { BiGroup } from "react-icons/bi";
import { ImFileText } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import styles from "./Info.module.css";
import Link from "next/link";

const Info = () => {
  return (
    <div className=" text-[#333333] xl:pt-24 ">


      {/* .............about info section ...............*/}

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-3 xl:pb-16 ">
        <div className=" p-3 lg:p-0 w-[376px] mx-auto">
          <BiGroup className="my-2" size={30}></BiGroup>
          <h3 className=" text-xl my-4">About us</h3>
          <p className=" mb-10">
            {" "}
            Find out how we started, what drives us, and how we’re reimagining
            how the world moves.
          </p>
          <Link href="/" className={`${styles.effect} py-1`}>
            Learn more about Duber
          </Link>
        </div>
        <div className=" p-3 lg:p-0 w-[376px] mx-auto">
          <TbNotes className="my-2" size={30}></TbNotes>
          <h3 className=" text-xl my-4">Newsroom</h3>
          <p className=" mb-10">
            {" "}
            See announcements about our latest releases, initiatives, and
            partnerships.
          </p>
          <Link href="/" className={`${styles.effect} py-1`}>
            Go to Newsroom
          </Link>
        </div>

        <div className=" p-3 lg:p-0 w-[376px] mx-auto">
          <AiOutlineHome className="my-2" size={30}></AiOutlineHome>
          <h3 className=" text-xl my-4">Global citizenship</h3>
          <p className=" mb-10">
            Read about our commitment to making a positive impact in the cities
            we serve.
          </p>
          <Link href="/" className={`${styles.effect} py-1`}>
            See our partnerships
          </Link>
        </div>
      </div>

      <div className=" border bg-[#f0f0f0] my-12 py-8 px-2 transparent">
        <div className="max-w-screen-xl py-8 mx-auto">
          <h2 className=" text-4xl font-bold pb-6 my-3">
            There’s more to love in the apps
          </h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div
              id={styles.div1}
              className="flex cursor-pointer justify-center items-center bg-[#ffffff] w-[340px] h-[116px] lg:w-[598px] lg:h-[218px] my-3"
            >
              <div className=" bg-black h-[80px] w-[100px] lg:h-[150px]  lg:w-[150px] flex relative m-4 justify-center items-center  text-white">
                <div>
                  <h2 className="text:3xl lg:text-5xl">Duber</h2>
                  <BsArrowRightShort className=" relative lg:text-[70px] text-3xl  -left-2"></BsArrowRightShort>
                </div>
              </div>
              <div>
                <h2 className=" text-2xl lg:text-[28px] lg:mr-3 font-bold">
                  Download the Driver app
                </h2>
              </div>
              <BsArrowRightShort
                id={styles.arrow1}
                className=" relative top-1 font-bold"
                size={38}
              ></BsArrowRightShort>
            </div>

            <div
              id={styles.div2}
              className="flex cursor-pointer justify-center items-center bg-[#ffffff] w-[340px] h-[116px] lg:w-[598px] lg:h-[218px] my-3 "
            >
              <div className=" bg-black h-[80px] w-[100px] lg:h-[150px]  lg:w-[150px] flex relative m-4 justify-center items-center text-white">
                <div>
                  <h2 className="text:3xl lg:text-5xl">Duber</h2>
                </div>
              </div>
              <div>
                <h2 className=" text-2xl lg:text-[28px] lg:mr-3 font-bold">
                  Download the Duber app
                </h2>
              </div>
              <BsArrowRightShort
                id={styles.arrow2}
                className="relative top-1 font-bold"
                size={38}
              ></BsArrowRightShort>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
