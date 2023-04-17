import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authincation } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const {signUpwithEmaiPass} = useContext(authincation)
    const handleSignUp = e =>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value

        console.log(name,email,password)
        signUpwithEmaiPass(email,password)
        .then(()=>{
            setSuccess('Your Account Has Created Successfully')
            from.reset()
        })
        .catch(err=>{
            setError(err.messags)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter a Strong Password" className="input input-bordered" />
                            
                        </div>
                        {
                            success && <p className='label-text-alt text-green-500'>{success}</p>
                        }
                        {
                            error && <p className='label-text-alt text-red-600'>{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <label className="label">
                                <Link to={'/logIn'} className="label-text-alt link link-hover">Already have an account? Log In</Link>
                            </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;