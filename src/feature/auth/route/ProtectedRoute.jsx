
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import useAuthPersist from '../hooks/useAuthPersist';

const ProtectedRoute = () => {
    useAuthPersist();
    const token = useSelector(state => state.auth.token);
    console.log(token);
    return (
        !token ? <Navigate to="/login" replace/> : <Outlet/> 
    )
}

export default ProtectedRoute
 