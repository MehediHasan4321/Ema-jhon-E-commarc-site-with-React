import React, { useContext, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { authincation } from '../../AuthProvider/AuthProvider';

const LogIn = () => {
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')
    const {logInWithEmailPassword} = useContext(authincation)
    const handleLogIN =e=>{
        setTimeout(()=>{
            setSuccess('')
            setError('')
        },7000)
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value
        logInWithEmailPassword(email,password)
        .then(()=>{
            setSuccess("Your Log-In successful")
        })
        .catch(err=>{
            setError(err.message)
            console.log(err)
        })
        console.log(email,password)
    }


    return (


        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleLogIN} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            success && <p className='label-text-alt text-green-600 '>{success}</p>
                        }
                        {
                            error && <p className='label-text-alt text-red-600'>{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                        <label className="label">
                                <Link to={'/signUp'} className="label-text-alt link link-hover">Don't have an account ? Sign Up</Link>
                            </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;