import Message from '@/components/Message/Message';
import React from 'react';
import { AiOutlineSend } from "react-icons/ai";

const chat = () => {
    return (
        <div className=' max-w-lg mx-auto pb-4 bg-slate-100 shadow-lg '>

            {/* this is chatbox */}

            <div className='h-screen max-w-lg p-4 overflow-y-scroll overflow-x-hidden  '>
                <Message></Message>
                <Message own={true}></Message>
                <Message></Message>
                <Message own={true}></Message>
                <Message></Message>
                <Message own={true}></Message>
                <Message ></Message>
                <Message own={true}></Message>
                <Message own={true}></Message>
                <Message ></Message>
                <Message own={true}></Message>

                <Message own={true}></Message>
            </div>

            {/* this is message send box */}

            <div>
                <form className=''>
                    <div className=" flex px-2">
                        <textarea placeholder="Write your message" className="p-2 h-11 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 "></textarea>
                        <div>
                            <button type="button" className="px-3 py-1 font-semibold rounded  bg-blue-800 text-white text-[24px]"><AiOutlineSend className=' inline-flex pb-[4px]'></AiOutlineSend></button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default chat;