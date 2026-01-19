import React, { useEffect, useState } from "react";
import { LoginPageUI } from "./LoginPageUI";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authChecked, loginSuccess } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";


const LoginPageContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submit(credentials, request = "login") {
    console.log(credentials);
    setLoading(true);
    setError(false);
    try {
      console.log("starting");
      const response = await login(credentials);
      dispatch(loginSuccess({ token: response.data.access_token, isAuthenticated:true }));
      console.log(response);
      dispatch(authChecked());
      navigate("/mainPage")
    } catch (error) {
      console.log(error)
      setError(true);
      setErrorMsg(error.response?.data?.errors || error.response?.data?.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <LoginPageUI
        submit={submit}
        loading={loading}
        setLoading={setLoading}
        error={error}
        errorMsg={errorMsg}
        credentials={credentials}
        setCredentials={setCredentials}
      />
    </section>
  );
};

export default LoginPageContainer;
