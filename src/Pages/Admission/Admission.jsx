import React, { useEffect, useState } from 'react';
import AdmissionCard from './AdmissionCard';

const Admission = () => {
    const [collages, setCollages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/collages')
        .then(res => res.json())
        .then(data => setCollages(data))
    }, [])
    return (
        <div className=''>
            {
                collages.map(collage => <AdmissionCard
                key={collage.id}
                collage={collage}
                ></AdmissionCard>)
            }
        </div>
    );
};

export default Admission;