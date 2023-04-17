import React, { useContext } from 'react';
import { authincation } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { isUser, loading } = useContext(authincation)
    const location = useLocation()
    if (loading) {
        return <div className='mt-20 container mx-auto'>
            <h1 className='text-4xl'> Loading..........</h1>
        </div>
    }
    if (isUser) {
        return children
    }

    return <Navigate to={'/logIn'} state={{ from: location }} replace ></Navigate>
};

export default PrivetRoute;