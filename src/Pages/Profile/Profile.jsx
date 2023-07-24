import React, { useEffect, useState } from 'react';
import SingleStudent from '../MyCollage/SingleStudent';

const Profile = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl'>My Profile</h1>
            {
                students.map(student => <SingleStudent
                    key={student._id}
                    student={student}
                ></SingleStudent>)
            }
        </div>
    );
};

export default Profile;