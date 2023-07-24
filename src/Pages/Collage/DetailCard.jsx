import React, { useState } from 'react';

const DetailCard = ({ collage }) => {
    const { image, collegeName, admissionDate, events, researchHistory, sports, collegeDetails, admissionProcess, sportsCategories, researchWorks, eventDetails } = collage

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{collegeName}</h1>
                        <p><span className='font-bold'>About us:</span> {collegeDetails}</p>
                        <p><span className='font-bold'>Admission date:</span> {admissionDate}</p>
                        <p><span className='font-bold'>Research:</span> {researchWorks.length}</p>

                        {/* Modal to show data  */}
                        <div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
                                onClick={openModal}
                            >
                                Details
                            </button>

                            {isOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="bg-white rounded-lg p-8">
                                        <h2 className="text-xl font-semibold mb-4">Extra facilities we offer</h2>
                                        <p className="text-gray-600"> <span className='font-bold'>Sports & Games: </span>
                                       
                                            <span> {sports[0]}</span>
                                            <span>, {sports[1]}</span>
                                            <span>, {sports[2]}.</span>
                                        
                                        </p>


                                        <p className="text-gray-600"> <span className='font-bold'>Events & Fests:</span> 
                                       
                                            <span> {events[0]}</span>
                                            <span>, {events[1]}</span>
                                            <span>, {events[2]}.</span>
                                        
                                        </p>
                                        <div className="flex justify-end mt-6">
                                            <button
                                                className="text-gray-600 hover:text-gray-900"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;