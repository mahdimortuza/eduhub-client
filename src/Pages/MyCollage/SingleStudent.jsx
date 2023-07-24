import React from 'react';

const SingleStudent = ({student}) => {
    const {name, subject, email, address, phone, birth, Image} = student
    return (
        <div>
            <img className='w-44 mx-auto rounded-full' src={Image}></img>
            <h1 className='text-blue-500 text-3xl font-semibold text-center mt-3'>{name}</h1>
            <p className='text-center mt-1'><span className='font-semibold'>Subject:</span> {subject}</p>
            <p className='text-center mt-1'><span className='font-semibold'>Contact:</span> {phone}</p>
            <p className='text-center mt-1'><span className='font-semibold'>Email:</span> {email}</p>
            <p className='text-center mt-1'><span className='font-semibold'>Date of birth:</span> {birth}</p>
            <p className='text-center mt-1'><span className='font-semibold'>Address:</span> {address}</p>
        </div>
    );
};

export default SingleStudent;