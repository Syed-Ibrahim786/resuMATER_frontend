import React, { useState } from "react";
import UploadUI from "./UploadUI";
import { analyze } from "../service/analyzeService";


const UploadContainer = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  /* **************** Response state ****************** */
  const [res, setRes] = useState()
  const [suggestions, setSuggestions] = useState([]);

  let suggestionsArray;//stores cleansed suggestions field
  


  async function analyzeResume(data) {
    const formData = new FormData();

  formData.append("resume", data.resume);
  formData.append("JD", data.JD);
  // console.log(data);
    setError(false);
    setLoading(true);
    try {
      const response = await analyze(formData);
      console.log(response);
      setRes(response.data);
      
  const responseSuggestions = response.data.suggestions;
  const cleansedSuggestions = responseSuggestions.replace(/\*\*(.*?)\*\*/g,"$1")
  suggestionsArray = cleansedSuggestions?.split(/\n/g);
  setSuggestions(suggestionsArray);
  console.log(suggestionsArray);
    } catch (error) {
      console.log(error);
      setError(true);
      setErrorMsg("error");
    } finally {
      setLoading(false);
    }
  }

  console.log(res);
  const [data, setData] = useState({
    resume: "",
    JD: "",
  });
  
  return (
    <UploadUI
   
    res={res}
      analyzeResume={analyzeResume}
      loading={loading}
      setLoading={setLoading}
      error={error}
      errorMsg={errorMsg}
      data={data}
      setData={setData}
      suggestions={suggestions}
    />
  );
};

export default UploadContainer;
