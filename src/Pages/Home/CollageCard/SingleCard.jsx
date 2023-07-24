import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ collage }) => {
    const { id, image, collegeName, admissionDate, events, researchHistory, sports } = collage
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>

                    <div>
                        <div className='flex justify-between'>
                            <div>
                                <span className='font-bold'>Next event:</span> {events[0]}
                            </div>

                            <div><span className='font-bold'>Next sport event:</span> {sports[0]}</div>
                        </div>
                        <br></br>
                        <div>
                            <span className='font-bold'>Last published research: </span> {researchHistory[0]}
                        </div>
                    </div>
                    <div className="card-actions flex justify-between">
                        <div><span className='font-bold'>Admission date:</span> <span className='bg-yellow-200 rounded'>{admissionDate}</span></div>

                        <Link to={`/collage/${collage._id}`}>
                            <button className="badge badge-outline py-3 px-4 hover:bg-blue-500 hover:text-white">See details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;