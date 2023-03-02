import ContextProvider from '@/ContextProvider/ContextProvider';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const CompaniesDetails = () => {
    // const { user } = useContext(ContextProvider)
    const [loading, setLoading] = useState(false)
    const data = new Date()

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const message = form.review.value
        const reviewInfo = {
            message,
            // userName: user,
            data
        }

        fetch("http://localhost:5000/add-review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Successfully review added")
                setLoading(false)
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            })
    }


    return (
        <div className='lg:w-[900px] w-full mx-auto px-3'>
            <h2>Dynamic page</h2>

            <div>
                <h2>Review</h2>
                <form onSubmit={handleSubmit}>
                    <textarea name="review" id="" className='w-full h-20 border'></textarea>
                    <button type="submit" className='px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white transition-all duration-500'>
                        {loading ? "Loading..." : "Add a Review"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CompaniesDetails;