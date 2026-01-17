
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useAuthPersist from '../hooks/useAuthPersist';
import { Spinner } from '@/components/ui/spinner';
import Loading from '@/components/ui/Loading';

const ProtectedRoute = () => {
    
    const {isAuthenticated, authChecked} = useSelector(state => state.auth);
    const navigate = useNavigate();


    if(!authChecked){
        console.log("loading...");
        return <Loading/>
    }

    if(!isAuthenticated){
        return navigate("/login");
    }
    return <Outlet/> 
    
}

export default ProtectedRoute
 