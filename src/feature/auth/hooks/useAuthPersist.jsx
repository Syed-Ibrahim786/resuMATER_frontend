import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../services/authService";
import { loginSuccess, authChecked } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthPersist = () => {
  const dispatch = useDispatch();
  const {isAuthChecked, isAuthenticated} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => { 
    async function refreshToken(){
      
      try {
        const res = await refresh();
        dispatch(loginSuccess({ token: res.data.access_token, isAuthenticated:true }))
        console.log("refresh successfull")
        
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
      finally{
        dispatch(authChecked())
      }
    }

    // !isAuthChecked && refreshToken();
    !isAuthenticated && refreshToken();

    
      

  }, []);
};

export default useAuthPersist;
