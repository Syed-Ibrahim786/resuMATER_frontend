
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const token = useSelector(state => state.auth.token);
    console.log(token);
    return (
        token === null ? <Navigate to="/login" replace/> : <Outlet/> 
    )
}

export default ProtectedRoute
 