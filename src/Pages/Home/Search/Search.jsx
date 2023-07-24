import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Search = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='flex justify-between items-center py-10'>
            <div>
                Search
            </div>

            {/* log in and log out  */}

            <div className='flex items-center'>
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