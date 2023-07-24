import React, { useEffect, useState } from 'react';
import AddReview from './AddReview';

const MyCollage = () => {
   
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('https://collage-management-application-server-mahdiwebx-gmailcom.vercel.app/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div className='mt-16'>
            {
                students.map(student => <p className='text-center text-2xl' key={student._id}>Welcome to <span className='font-semibold text-3xl'>{student.collage_name}</span> Our goal is to help you to build your future. </p>)
            }
            <AddReview></AddReview>
        </div>
    );
};

export default MyCollage;