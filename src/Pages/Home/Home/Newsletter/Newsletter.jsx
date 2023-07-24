import React from 'react';

const Newsletter = () => {
    return (
        <div className='mt-16'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-1'>-- Join Our Newsletter --</h1>
                <p className='text-center mb-0 text-lg'>Join us to get everyday update.</p>
            </div>
            <div className="relative mt-5 w-80 md:w-1/2 mx-auto">
                <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full pr-16" />
                <button className="btn bg-blue-500 text-white hover:bg-blue-700 absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;