import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import glass from '../../../../public/magnifying-glass-solid.svg'

const Search = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='md:flex justify-between items-center py-10'>
            <div>
                <>
                    <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                </>

            </div>

            {/* log in and log out  */}

            <div className='mt-2 md:mt-0 flex items-center'>
                <button className='text-lg font-semibold text-blue-500'>
                    {
                        user?.email && <Link to='/profile'>Profile</Link>

                    }
                </button>
                <div className='ml-2'>
                    {
                        user ?
                            <> <button onClick={handleLogout} className='badge px-4 py-4 rounded-lg text-base bg-blue-500 text-white hover:text-white font-semibold hover:bg-blue-700'>Logout</button> </>
                            :
                            <> <Link className='badge px-4 py-4 rounded-lg bg-blue-500 text-white text-base hover:text-white font-semibold hover:bg-blue-700' to="/login">Login</Link> </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;