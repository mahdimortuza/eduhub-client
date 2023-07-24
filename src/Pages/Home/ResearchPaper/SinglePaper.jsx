import React from 'react';
import './SinglePaper.css'
import { Link } from 'react-router-dom';

const SinglePaper = ({ paper }) => {
    const { researchPaper, authorName, authorImg, link, universityName, publishedDate } = paper
    return (
        <Link to={link} className="card">
            <div className="cardBody shadow-lg p-2">
                <h2 className=""> <span className='font-bold'>Title: </span>{researchPaper}</h2>
                <p className='text-xs'><span className='text-blue-500'>Publish date:</span> {publishedDate}</p>
                <div className='flex mt-2'>
                    <img className='author-img' src={authorImg}></img>
                    <div className='ml-3'>
                    <h6 className='font-bold'>{authorName}</h6>
                    <p>{universityName}</p>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default SinglePaper;