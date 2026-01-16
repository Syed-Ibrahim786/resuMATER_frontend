import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../services/authService";
import { loginSuccess, authChecked } from "../slice/authSlice";

const useAuthPersist = () => {
  const dispatch = useDispatch();

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

    refreshToken();
      

  }, []);
};

export default useAuthPersist;
