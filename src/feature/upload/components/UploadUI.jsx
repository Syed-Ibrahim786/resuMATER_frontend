import { ResumeInput } from "./ResumeInput";
import JDTextarea from "./JDTextarea";
import { Button } from "@/components/ui/button";
import ScoreChart from "./ScoreChart";
import Feedback from "./Feedback";
import { Spinner } from "@/components/ui/spinner";

const UploadUI = ({
  res,
  analyzeResume,
  loading,
  error,
  errorMsg,
  data,
  setData,
}) => {
  const str =
    "Your resume presents a very strong profile for the Backend / Full-Stack Developer (Node.js) role, demonstrating excellent alignment with most core requirements. The project descriptions effectively showcase your practical experience with Node.js, Express.js, MongoDB, and JWT authentication, alongside a clear focus on performance optimization and scalable application development.\n\nTo further enhance your compatibility score and stand out even more for this specific job description, consider the following actionable improvements:\n\n1.  **Prioritize Node.js/MERN in Summary:** While your summary mentions Java and Python, for this Node.js-focused role, consider rephrasing to immediately highlight your expertise in Node.js, Express, and MongoDB. For example: \"Full-stack Software Developer highly proficient in MERN stack (Node.js, Express.js, React.js, MongoDB), with strong capabilities in designing scalable RESTful APIs...\". You can keep Java/Python in your skills section as secondary languages.\n\n2.  **Explicitly Address Missing Keywords/Concepts:** Review the 'Required Skills' and 'Responsibilities' sections of the job description for exact matches. While you imply many, explicit mentions can help the ATS:\n    *   **Promises:** Add 'Promises' alongside 'async/await' in your 'Core Concepts' skill section or within project descriptions if you used them.\n    *   **Data Validation:** In your project descriptions (e.g., Blood Donor App, URL Shortener), elaborate on how you handled 'data validation securely'. Mention specific libraries if used (e.g., Joi, Express-validator).\n    *   **File Uploads:** If you have any experience with 'file uploads' (even a small demo), try to integrate it into a project description or a separate bullet point, mentioning tools like Multer if applicable.\n    *   **Logging:** If you implemented any logging for your APIs, even basic, mention it in the relevant project (e.g., \"Implemented basic API logging for monitoring and debugging\").\n    *   **CORS & Rate Limiting:** If you have any exposure or understanding of 'CORS' (Cross-Origin Resource Sharing) or 'rate limiting', consider adding it to your 'Core Concepts' or a brief mention in a project's technical description.\n\n3.  **Emphasize 'Good to Have' Skills (If Applicable):**\n    *   You correctly highlight 'React.js' and 'DSA/Problem Solving'. If you have any experience with 'SQL basics', 'Docker', or 'cloud platforms' (AWS, GCP, Azure), even if minimal, add them to your skills section to cover more of the 'Good to Have' criteria.\n\n4.  **Refine Project Details:** For projects like the Blood Donor App, you've mentioned 'secure data flow' and 'error handling'. Be more specific: How did you ensure data validation? What specific HTTP error handling strategies did you implement? This level of detail confirms the experience for the ATS.";

  const str2 = str.split(/\n/g);
  console.log(str2);
  return (
    <div className="w-[90%] mx-auto mt-10 flex flex-col gap-10 ">
      <ResumeInput data={data} setData={setData} />

      <JDTextarea data={data} setData={setData} />

      {error && (
        <p className="text-center text-error font-medium">{errorMsg}</p>
      )}

      <Button
        onClick={() => analyzeResume(data)}
        disabled={loading}
        className="bg-primary hover-bg-primary-dark"
      >
        Analyze
      </Button>

      {loading && 
        <div className="w-full  flex justify-center ">
          <p className="text-accent text-lg">processing</p>
          <Spinner className="size-6 text-accent" />
        </div>}
    
        
      
      {res.feedback ? <><ScoreChart score={res.score} /><Feedback feedback={str2} /></> : ""}
    </div>
  );
};

export default UploadUI;
