import React, { useContext } from 'react';
import { authincation } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({childern}) => {
    const {isUser} = useContext(authincation)
    if(isUser){
        return childern
    }
    
    return <Navigate to={'/logIn'}></Navigate>
};

export default PrivetRoute;