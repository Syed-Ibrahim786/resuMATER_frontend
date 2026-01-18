
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  NavLink, Outlet, useNavigate } from 'react-router-dom';


import Loading from '@/components/ui/Loading';

const ProtectedRoute = () => {
    
    const {isAuthenticated, isAuthChecked} = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthChecked && !isAuthenticated){
            navigate("/login");
        }
    },[isAuthChecked, isAuthenticated])

    if(!isAuthChecked){
        console.log("loading...");
        return <Loading/>
    }


    
    else if(isAuthenticated){

        return <Outlet/> 
    }
    
}

export default ProtectedRoute
 