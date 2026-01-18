import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../services/authService";
import { loginSuccess, authChecked } from "../slice/authSlice";

const useAuthPersist = () => {
  const dispatch = useDispatch();
  const {isAuthChecked} = useSelector((state) => state.auth);

  useEffect(() => { 
    async function refreshToken(){
      
      try {
        const res = await refresh();
        dispatch(loginSuccess({ token: res.data.access_token }))
        console.log("refresh successfull")
        
      } catch (error) {
        console.log(error);
      }finally{
        dispatch(authChecked());
      }
    }

    !isAuthChecked && refreshToken();

    return () => null;
      

  }, []);
};

export default useAuthPersist;
