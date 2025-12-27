import React from 'react'
import { RegisterPageUI } from './RegisterPageUI'
import{ useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

const RegisterPageContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [credentials, setCredentials] = useState({
    name:"",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submit(credentials) {
    console.log(credentials);
    setLoading(true);
    setError(false);
    try {
      console.log("starting");
      const response = await register(credentials);
      console.log(response);
      navigate("/login")
    } catch (error) {
      console.log(error)
      setError(true);
      setErrorMsg(error.response?.data?.errors|| error.response?.data?.error || error.response?.data?.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section>
        <RegisterPageUI
        submit={submit}
        loading={loading}
        setLoading={setLoading}
        error={error}
        errorMsg={errorMsg}
        credentials={credentials}
        setCredentials={setCredentials}/>
    </section>
  )
}

export default RegisterPageContainer
