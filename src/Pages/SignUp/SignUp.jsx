import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user 
            console.log(loggedUser)
        })

        form.reset()
    }
    return (
        <div className='mt-16'>
            <div className="hero ">
                <div className="hero-content">
                    <form onSubmit={handleSubmit}>
                        <div className="card flex-shrink-0 w-82 md:w-96 max-w-sm shadow-2xl bg-base-100">
                            <h2 className='text-center text-3xl font-semibold mt-3 -mb-5'>Please register here.</h2>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-blue-500 text-white hover:bg-blue-700">Login</button>
                                </div>
                                <div className='mt-5'>
                                    <button className='flex items-center w-full border border-[#4285F4] rounded px-2 py-1 text-[#4285F4]'><FaGoogle></FaGoogle><span className='ml-3'> Sign Up with Google</span></button>
                                    <button className='flex items-center w-full border border-[#3b5998] rounded px-2 py-1 text-[#3b5998] mt-2'><FaFacebook></FaFacebook> <span className='ml-3'> Sign Up with Facebook</span></button>
                                </div>
                                <p className='mt-5 text-sm'>Already have an account? <span className='badge badge-outline bg-blue-500 text-white hover:bg-blue-700 px-3 py-3'><Link to='/login'>Login here.</Link></span> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;