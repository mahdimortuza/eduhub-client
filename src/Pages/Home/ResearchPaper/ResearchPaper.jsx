import React, { useEffect, useState } from 'react';
import SinglePaper from './SinglePaper';

const ResearchPaper = () => {
    const [papers, usePapers] = useState([])

    useEffect(() => {
        fetch('research.json')
            .then(res => res.json())
            .then(data => usePapers(data))
    }, [])


    return (

        <div className='mt-16'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-1'>-- Our research projects --</h1>
                <p className='text-center mb-0 text-lg'>Explore our research projects to know more.</p>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div className="card-body">

                            <div>
                                {
                                    papers.map(paper => <SinglePaper
                                        key={paper.id}
                                        paper={paper}
                                    ></SinglePaper>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResearchPaper;