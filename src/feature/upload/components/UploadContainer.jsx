import  {  useEffect, useState } from "react";
import UploadUI from "./UploadUI";
import { analyze } from "../service/analyzeService";

const UploadContainer = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  /* **************** Response state ****************** */
  // const [res, setRes] = useState({"skillScore": 92, "projectScore": 95, "keywordMatchScore": 88, "experienceScore": 90, "overallScore": 91, "scoreExplanation": [{"scoreType": "Skills", "explanation": "The candidate demonstrates strong proficiency in nearly all 'Required Skills' including JavaScript (ES6+), Node.js, Express.js, MongoDB, Mongoose (implied via projects), React.js, REST APIs, JWT authentication (implied via projects), Git/GitHub, DSA, and HTTP methods/error handling. The resume also covers 'Good to Have' skills like SQL. Areas for improvement are in specific 'Good to Have' skills like Docker, cloud platforms, logging/monitoring, and CI/CD, which are not mentioned."}, {"scoreType": "Projects", "explanation": "All three listed projects are highly relevant, showcasing full-stack MERN development. They demonstrate practical application of designing RESTful APIs, implementing authentication (JWT), working with MongoDB/Mongoose, optimizing performance, and handling errors – directly aligning with the job's responsibilities. The projects are well-detailed with technologies and quantifiable achievements like Lighthouse scores."}, {"scoreType": "keywordMatch", "explanation": "The resume has a very high keyword overlap with core requirements like MERN stack, Node.js, Express.js, MongoDB, React.js, JavaScript (ES6+), REST APIs, JWT, Git, GitHub, authentication, error handling, performance optimization, and full-stack development. Keywords like 'Mongoose' are found in project descriptions. Fewer matches are found for specific security practices (CORS, rate limiting), specific file upload technologies (Multer), cloud platforms (AWS, GCP, Azure), Docker, logging, monitoring, and CI/CD pipelines."}, {"scoreType": "experience", "explanation": "The candidate's academic timeline (graduating 2025) perfectly aligns with the 0-2 years experience requirement, positioning them as an ideal entry-level candidate. The 'PROFESSIONAL SUMMARY' and detailed 'PROJECTS' effectively demonstrate 'hands-on experience building scalable web applications using the MERN stack,' fulfilling the core experience requirement. Achievements further showcase problem-solving abilities relevant to an engineering role."}, {"scoreType": "Overall Score", "explanation": "The resume exhibits strong compatibility with the job description, particularly excelling in core MERN stack skills, relevant project experience, and alignment with the required experience level. The candidate's summary and project details clearly demonstrate the foundational knowledge and practical application sought for a Backend/Full-Stack Node.js developer. The primary areas for improvement are in the 'Good to Have' skills not directly covered, which are less critical for an initial ATS pass for this experience level."}], "suggestions": "To maximize the overall score against this job description, consider the following actionable improvements:\n1.  **Integrate 'Good to Have' Skills:** If you have any experience or basic familiarity with Docker, cloud platforms (AWS, GCP, Azure), logging, monitoring, or CI/CD pipelines, explicitly list them in your 'SKILLS' section, even if it's 'Basic Knowledge of...'.\n2.  **Elaborate on Security Practices:** In your project descriptions, explicitly mention the implementation of security practices like CORS (Cross-Origin Resource Sharing), rate limiting, and specific data validation techniques if you used them.\n3.  **Specify File Upload Experience:** If any of your projects involved file uploads, mention the specific libraries or methods used (e.g., Multer if applicable) in the project description or skills section.\n4.  **Quantify More Backend Impact:** For projects, add more metrics or specific challenges overcome related to backend scalability, database query optimization, or API performance beyond just 'optimized backend.' For example, 'Reduced API response time by X% for Y operation.'\n5.  **Explicitly Mention Mongoose in Skills:** While Mongoose is present in projects, explicitly listing it under the 'Database' or 'Frameworks' section in 'SKILLS' would improve keyword matching."}
  const [res, setRes] = useState();

  const [suggestions, setSuggestions] = useState([]);
  const [previewURL, setPreviewURL] = useState(null);

  
  async function analyzeResume(data) {
    const formData = new FormData();

    formData.append("resume", data.resume);
    formData.append("JD", data.JD);
    setError(false);
    setLoading(true);
    try {
      const response = await analyze(formData);
      console.log(response);
      setRes(response.data);

      const responseSuggestions = response.data.suggestions;
      const cleansedSuggestions = responseSuggestions.replace(
        /\*\*(.*?)\*\*/g,
        "$1"
      );
	  let suggestionsArray; //stores cleansed suggestions field

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

  
  const [data, setData] = useState({
    resume: "",
    JD: "",
  });

  useEffect(() => {
    return () => {
      console.log("url flushed")
      if(previewURL)  URL.revokeObjectURL(previewURL);
    }
  },[previewURL])


 

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
      previewURL={previewURL}
      setPreviewURL={setPreviewURL}
    />
  );
};

export default UploadContainer;
