import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionCard = ({ collage }) => {
    const { id, image, collegeName, admissionDate, events, researchHistory, sports, collegeDetails, admissionProcess, sportsCategories, researchWorks, eventDetails } = collage

    return (
        <div>
            <div className="bg-base-100 my-4 shadow-xl">
                <div className="card-body">
                    <div className="card-actions flex justify-between items-center">
                        <h1 className='text-x md:text-2xl font-bold'>{collegeName}</h1>
                        <Link to={`/admit/${collage._id}`}>
                            <button className="badge bg-blue-500 text-white px-4 py-3 md:btn md:bg-blue-500 md:text-white md:hover:bg-blue-700">
                                Admission
                            </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCard;