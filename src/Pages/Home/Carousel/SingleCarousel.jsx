import React from 'react';
import { Link } from 'react-router-dom';


const SingleCarousel = ({ slider = {} }) => {
    const { bg, title } = slider

    return (
        <div>
            <div className='bg-cover bg-center h-72 sm:h-96 md:h-[600px] bg-no-repeat '
                style={{ backgroundImage: `url(${bg})` }}
            ></div>

            <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white inset-0 bg-slate-900 opacity-60">
                <h1 className="font-bold mt-10 text-xl md:text-4xl lg:text-5xl">{title}</h1>

                <p className='text-3xl mt-10 mb-4'>Join our team today</p>

                <Link className='border border-white px-2 py-1 rounded' to="/classes">See More...</Link>
            </div>
        </div>
    );
};

export default SingleCarousel;