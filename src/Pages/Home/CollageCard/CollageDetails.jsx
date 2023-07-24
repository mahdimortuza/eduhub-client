import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollageDetails = () => {
    const collage = useLoaderData()
    const { image, collegeName, admissionDate, events, researchHistory, sports, collegeDetails, admissionProcess, sportsCategories, researchWorks, eventDetails } = collage
    return (
        <div>
            <div className="hero rounded">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{collegeName}</h1>
                        <p className="py-2 mt-16"><span className='font-bold'>About our collage:</span> {collegeDetails}</p>
                        <p className="py-2"><span className='font-bold'>Admission process:</span> {admissionProcess}</p>
                        <p className="py-2"><span className='font-bold'>Event details:</span> {eventDetails}</p>
                        <p className="py-2"><span className='font-bold'>Research works:</span> {researchWorks}</p>
                        <p className="py-2"><span className='font-bold'>Sports:</span> {sportsCategories}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollageDetails;