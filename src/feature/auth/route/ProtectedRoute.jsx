
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';


import Loading from '@/components/ui/Loading';
import useAuthPersist from '../hooks/useAuthPersist';

const ProtectedRoute = () => {
    useAuthPersist();
    const {isAuthenticated, isAuthChecked, token} = useSelector(state => state.auth);
    console.log(isAuthenticated, isAuthChecked, token)
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(isAuthChecked && !isAuthenticated){
    //         navigate("/login");
    //     }
    //     return () => null;

    // },[isAuthChecked, isAuthenticated])

    if(!isAuthChecked){
        console.log("loading...");
        return <Loading/>
    }


    
    else if(isAuthenticated){

        return <Outlet/> 
    }

    // return  <Outlet/> 
    
}

export default ProtectedRoute
 