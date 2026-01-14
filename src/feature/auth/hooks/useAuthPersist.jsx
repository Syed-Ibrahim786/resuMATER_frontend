import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../services/authService";
import { loginSuccess } from "../slice/authSlice";

const useAuthPersist = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => { 
    refresh()
      .then((res) => dispatch(loginSuccess({ token: res.data.access_token })))
      .catch((e) => {
        console.log(e);
      });

      console.log("refresh successfull")
  }, [dispatch]);
};

export default useAuthPersist;
