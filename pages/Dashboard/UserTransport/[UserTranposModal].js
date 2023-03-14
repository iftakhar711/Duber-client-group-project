import { DuberContext } from '@/ContextProvider/ContextProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillMoneyCollect } from 'react-icons/ai';
import { GiCrossMark } from 'react-icons/gi';

const UserTranposModal = ({ visibel, onClose, data }) => {
    // const stripe = useStripe();
    // const elements = useElements();
    // const { cost, email, name, _id } = data;
    // const [cardError, setCardError] = useState('');
    // const [success, setSuccess] = useState('');
    // const [processing, setProcessing] = useState(false);
    // const [transactionId, setTransactionId] = useState('');
    // const [clientSecret, setClientSecret] = useState("");
    // // const router = useRouter()



    // console.log(data);



    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("https://duber-group-project-server.vercel.app/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",

    //         },
    //         body: JSON.stringify({ cost }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, [cost]);


    const { user } = useContext(DuberContext);
    if (!visibel) return null

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     const card = elements.getElement(CardElement);

    //     if (card == null) {
    //         return;
    //     }

    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card
    //     });

    //     if (error) {
    //         console.log(error);
    //         setCardError(error.message);
    //     }
    //     else {
    //         setCardError('');
    //     }
    //     setSuccess('');
    //     setProcessing(true);
    //     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //             payment_method: {
    //                 card: card,
    //                 billing_details: {
    //                     name: name,
    //                     email: email
    //                 },
    //             },
    //         },
    //     );

    //     if (confirmError) {
    //         setCardError(confirmError.message);
    //         return;
    //     }

    //     if (paymentIntent.status === "succeeded") {
    //         console.log('card info', card);
    //         // store payment info in the database
    //         const payment = {
    //             cost,
    //             transactionId: paymentIntent.id,
    //             email,
    //             bookingId: _id
    //         }
    //         fetch('https://duber-group-project-server.vercel.app/payments', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',

    //             },
    //             body: JSON.stringify(payment)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.insertedId) {
    //                     setSuccess('Congrats! your payment completed');
    //                     setTransactionId(paymentIntent.id);
    //                     router.push('/')
    //                 }
    //             })
    //     }
    //     setProcessing(false);


    // }



    return (
        <>
            <div className=" fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white rounded w-[500px] h-auto p-10">
                    <GiCrossMark onClick={onClose} className='mb-3 w-5 h-5'></GiCrossMark>
                    <div className=' font-bold '>
                        <span className=' flex items-center justify-center text-lg'>
                            <AiFillMoneyCollect></AiFillMoneyCollect>
                            {data?.cost}
                        </span>
                    </div>
                    <form className='p-3'>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                        {/* <button className=" mt-5 w-full rounded-lg bg-[#1c1470] p-2 text-[12px] lg:text-[16px] font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2" type="submit" disabled={!stripe || !clientSecret || processing}>
                            Pay
                        </button> */}
                        <button className=" mt-5 w-full rounded-lg bg-[#1c1470] p-2 text-[12px] lg:text-[16px] font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2" type="submit" >
                            Pay
                        </button>
                    </form>
                    {/* <button className=" w-full rounded-lg bg-[#1c1470] p-2 text-[12px] lg:text-[16px] font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-[#332c84] focus:scale-105 focus:bg-blue-600 focus:ring-2"> CONFIRM</button> */}

                    {/* <p className="text-red-500">{cardError}</p>
                    {
                        success && <div>
                            <p className='text-green-500'>{success}</p>
                            <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                        </div>
                    } */}
                </div>
            </div>

        </>
    );
};

export default UserTranposModal;