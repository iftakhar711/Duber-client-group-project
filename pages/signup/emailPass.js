import { DuberContext } from "@/ContextProvider/ContextProvider";
import { Password } from "@/redux/slies/signupSlice";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

const EmailPass = () => {
  const { userRegister, user, updateUser } = useContext(DuberContext);
  const [loading, setLoading] = useState(false)
  const [inputPassword, setInputPassword] = useState("")
  const dispatch = useDispatch();
  const route = useRouter();

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  const { firstName, lastName, email, password, role } = useSelector(state => state.signup);
  const fullName = firstName + ' ' + lastName;

  const handelSignup = () => {
    setLoading(true)
    userRegister(email, password)
      .then(result => {
        console.log(result.user);
        userUpdate(fullName)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      })
  };

  const userUpdate = (name) => {
    updateUser(name)
      .then(() => {
        route.push("/signup/drive/thankyou")
      })
      .catch(error => console.log(error))
  }

  /* For password validation */
  const [checks, setChecks] = useState({
    lesThenEightCharacter: false,
    oneDigit: false,
    oneLetter: false
  })
  const [validationCheck, setValidationCheck] = useState(false)

  const handleOnFocus = () => {
    setValidationCheck(true)
  }
  const handleOnBlur = () => {
    setValidationCheck(false)
  }

  const handleOnkeyUp = (e) => {
    const { value } = e.target
    const lesThenEightCharacter = value.length >= 8
    const oneDigit = /[0-9]/.test(value)
    const oneLetter = /[A-Z]/.test(value)

    setChecks({
      lesThenEightCharacter,
      oneDigit,
      oneLetter
    })
  }


  const router = useRouter()

  const handlePreview = (e) => {
    e.preventDefault()
    router.push("/signup/roleSelection")
  }


  return (
    <div className="md:w-[360px] lg:h-[90vh] h-auto mx-auto w-full flex justify-center items-center px-3 md:pt-0 pt-2">
      <div>
        <div>
          <h2 className="text-[24px] leading-[30px] py-2">Enter your password</h2>
          <p>Your passwords must be at least 8 characters long, and contain at least one letter and one digit</p>
        </div>
        <div className="relative py-7">
          <input
            onChange={(e) => {
              dispatch(Password(e.target.value))
              setInputPassword(e.target.value)
            }}
            onKeyUp={handleOnkeyUp}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            className="w-full py-2.5 bg-gray-200 bg-opacity-50 px-4 rounded-lg border focus:outline-none focus:border-gray-900 focus:bg-gray-100 focus:bg-opacity-70"
            type={changePassword ? "password" : "text"}
            name="password"
            id=""
            placeholder="*********"
            required
          />
          {
            changePassword ? <>
              <AiFillEye
                onClick={() => {
                  setChangePassword(changeIcon);
                }}
                className="absolute right-3 top-[41px] text-lg cursor-pointer" />

            </> : <>
              <AiFillEyeInvisible
                onClick={() => {
                  setChangePassword(changeIcon);
                }}
                className="absolute right-3 top-[41px] text-lg cursor-pointer" />
            </>
          }

        </div>
        <div>
          {
            checks.lesThenEightCharacter ?
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-green-600 text-white rounded-full" />
                  Has At least 8 characters?
                </p>
              </>
              :
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-red-600 text-white rounded-full" />
                  Has At least 8 characters?
                </p>
              </>
          }
          {
            checks.oneLetter ?
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-green-600 text-white rounded-full" />
                  Has one uppercase letter?
                </p>
              </>
              :
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-red-600 text-white rounded-full" />
                  Has one uppercase letter?
                </p>
              </>
          }
          {
            checks.oneDigit ?
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-green-600 text-white rounded-full" />
                  Has one digit?
                </p>
              </>
              :
              <>
                <p className="flex items-center gap-3">
                  <TiTick className="bg-red-600 text-white rounded-full" />
                  Has one digit?
                </p>
              </>
          }

        </div>
        <div className="flex justify-between items-center md:mt-10 mt-24">
          <div
            onClick={handlePreview}
            className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 transition ease-in-out duration-500 ">
            <BiLeftArrowAlt className="text-3xl" />
          </div>
          <div className="">
            <button
              disabled={!inputPassword.length && checks.lesThenEightCharacter && checks.oneDigit && checks.oneLetter
              }
              onClick={() => handelSignup()}
              className={`${inputPassword.length && checks.lesThenEightCharacter && checks.oneDigit && checks.oneLetter ? "bg-gray-900 hover:bg-gray-900 hover:cursor-pointer text-white" : "bg-gray-100 text-gray-800 cursor-not-allowed"} px-4 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition ease-in-out duration-500 `}

            >
              <span>
                {loading ? "Loading..." : "Submit"}
              </span>
              {/* <BiRightArrowAlt className="text-3xl" /> */}
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default EmailPass;
