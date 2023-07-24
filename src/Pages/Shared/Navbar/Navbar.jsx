import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const menu = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/collage',
        name: 'Collage',
    },
    {
        id: 3,
        path: '/admission',
        name: 'Admission',
    },
    {
        id: 4,
        path: '/my-collage',
        name: 'My Collage',
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex items-center justify-between mx-0 sticky top-0 z-20 py-5 bg-blue-500 text-white px-5'>
            <Link className='text-2xl font-semibold' to='/'>EduHub</Link>

            <div>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true ? <FaTimes className='h-5 w-5 text-[#000] mr-3'></FaTimes>
                                :
                                <FaBars className='h-5 w-5 text-[#000] mr-3'></FaBars>
                        }
                    </span>
                </div>

                {/* for pc  */}

                <div className=''>
                    <ul className="hidden md:flex">
                        {
                            menu.map(({ path, name, id }) => <li className='mx-2 px-4 py-2 hover:bg-blue-700 rounded' onClick={() => setOpen(!open)} key={id}> <Link to={path}>{name}</Link> </li>)
                        }
                    </ul>
                </div>


                {/* for mobile  */}
                <div className='fixed md:hidden'>
                    <ul className={`absolute text-white mt-3 ${open ? ' -right-16 top-0 items-center bg-blue-500 w-60 h-screen' : '-right-56 hidden'}`}>
                        {
                            menu.map(({ path, name, id }) => <li className='mx-2 mb-2 pl-5' onClick={() => setOpen(!open)} key={id}> <Link to={path}>{name}</Link> </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;