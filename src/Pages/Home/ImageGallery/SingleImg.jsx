import React from 'react';

const SingleImg = ({ image }) => {
    const { imageUrl, partyDate, collegeName } = image
    return (
        <div>
            <div className="w-96 glass">
                <figure><img src={imageUrl} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-blue-500'>{collegeName}</span> graduation party.</h2>
                    <p>Date: <span>{partyDate}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleImg;