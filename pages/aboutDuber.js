import React, { useState } from 'react';
import AboutDub from './aboutdub';

const AboutDuber = () => {

    const [showModal, setShowModal] = useState(false)

    const CloseModal = () => setShowModal(false)

    return (

        <>
            <div className="bg-blue-400 bg-opacity-30">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center py-3">
                        <button
                            onClick={() => setShowModal(true)} className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
                            Open Modal
                        </button>
                    </div>
                    <AboutDub onClose={CloseModal} visibel={showModal}></AboutDub>
                </div>
            </div>
        </>
    );
};

export default AboutDuber;