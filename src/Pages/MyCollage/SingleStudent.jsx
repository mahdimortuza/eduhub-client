import React from 'react';
import { Link } from 'react-router-dom';

const SingleStudent = ({ student }) => {
    const { _id, name, subject, email, address, phone, birth, Image } = student
    return (
        <div>
            <div>
                <img className='w-44 mx-auto rounded-full' src={Image}></img>
                <h1 className='text-blue-500 text-3xl font-semibold text-center mt-3'>{name}</h1>
                <p className='text-center mt-1'><span className='font-semibold'>Subject:</span> {subject}</p>
                <p className='text-center mt-1'><span className='font-semibold'>Contact:</span> {phone}</p>
                <p className='text-center mt-1'><span className='font-semibold'>Email:</span> {email}</p>
                <p className='text-center mt-1'><span className='font-semibold'>Date of birth:</span> {birth}</p>
                <p className='text-center mt-1'><span className='font-semibold'>Address:</span> {address}</p>
            </div>
            <div>
                <Link className='btn bg-blue-500 hover:bg-blue-700 text-white' to={`/update/${_id}`}>Update data</Link>

            </div>
        </div>
    );
};

export default SingleStudent;