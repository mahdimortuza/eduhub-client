import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
        form.reset()
    }

    return (
        <div className='mt-16'>
            <div className="hero ">
                <div className="hero-content">
                    <form onSubmit={handleSubmit}>
                        <div className="card flex-shrink-0 w-82 md:w-96 max-w-sm shadow-2xl bg-base-100">
                            <h2 className='text-center text-3xl font-semibold mt-3 -mb-5'>Please Login.</h2>
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
                                <p className='mt-5 text-sm'>New to EduHub? <span className='badge badge-outline bg-blue-500 text-white hover:bg-blue-700 px-3 py-3'><Link to='/signup'>Register here.</Link></span> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;