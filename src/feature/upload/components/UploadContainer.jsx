import  {  useEffect, useState } from "react";
import UploadUI from "./UploadUI";
import { analyze } from "../service/analyzeService";
import { cleansSuggestion } from "@/util/cleanseAIData";

const UploadContainer = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  /* **************** Response state ****************** */
  const [res, setRes] = useState({
  skillScore: 85,
  projectScore: 95,
  keywordMatchScore: 80,
  experienceScore: 20,
  overallScore: 55,
  scoreExplanation: [
    {
      scoreType: 'Skills',
      explanation: "The candidate explicitly lists MERN Stack components (React.js, Node.js, Express.js, MongoDB), debugging, and problem-solving, which are directly requested by the job description. The only missing skill is 'excellent communication skills', which is a significant soft skill mentioned in the JD. The candidate also lists a broad range of relevant programming languages, frameworks, and tools."        
    },
    {
      scoreType: 'Projects',
      explanation: "The candidate's projects are excellent and directly showcase MERN stack development. They are well-described, include specific technologies, and some even feature quantifiable achievements (Lighthouse scores, load time reduction). The projects clearly demonstrate the practical application of the required technical skills. They are production-ready in concept and execution quality."
    },
    {
      scoreType: 'keywordMatch',
      explanation: "Key phrases like 'MERN Stack Developer', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'debugging', and 'problem-solving' are present in the resume. The resume effectively matches most of the explicit keywords from the job description. The absence of 'communication skills' is the primary keyword gap, preventing a perfect score. However, given the extreme brevity of the job description, the resume performs well on keyword density for the technical aspects."
    },
    {
      scoreType: 'experience',
      explanation: "This is the most critical mismatch. The job description requests '1-2 yrs' of experience. The candidate's education section indicates an anticipated graduation date of June 2025, implying they are currently a student or a very recent graduate without 1-2 years of full-time professional experience. While the projects are strong, they do not equate to professional work experience for an ATS looking for explicit 'years' in full-time roles. This will almost certainly trigger an automatic filter for insufficient experience."
    },
    {
      scoreType: 'Overall Score',
      explanation: "The overall score reflects a strong candidate on technical skills, projects, and keyword matching, but a critical failure on the experience requirement. The ATS is highly likely to filter out this resume due to the explicit '1-2 yrs' experience requirement contrasting with the candidate's graduation date. While the quality of technical work is high, the non-negotiable experience threshold significantly impacts the overall compatibility. The job description's brevity also makes it harder to assess nuanced fit beyond the explicit keywords."
    }
  ],
  'Best Suggestion': {
    'PROFESSIONAL SUMMARY': 'Highly motivated MERN Stack Developer with a strong foundation in React.js, Node.js, Express.js, and MongoDB, honed through intensive full-stack project development. Demonstrated expertise in API development, debugging, and complex problem-solving. Adept at building production-ready applications, seeking to leverage 1-2 years equivalent project experience in a dynamic professional environment. Committed to clean, efficient code and continuous learning.',
    SKILLS: 'Programming Languages: Java, Python, JavaScript (ES6+)\n' +
      'Frameworks: React.js, Node.js, Express.js, TailwindCSS.\n' +
      'Database: MongoDB\n' +
      'Developer Tools: Git, GitHub, VS Code, Postman\n' +  
      'Core Concepts: OOP, DSA, REST APIs, Problem-Solving, Debugging, SQL, Agile Methodologies (if applicable from projects), Effective Communication (if demonstrable with examples)',
    PROJECTS: 'BloodNet - Blood Donor Finder App | ReactJs, ExpressJs, Mongoose, JWT, TailwindCSS | GitHub | LIVE\n' +  
      'Engineered a full-stack system to efficiently match blood donors and recipients, leveraging optimized REST APIs and ensuring secure data flow.\n' +
      'Implemented robust JWT authentication and real-time donor filtering by city and blood group, enhancing user experience and data integrity.\n' +
      'Optimized backend performance with Express.js and MongoDB (Mongoose) for fast querying and scalability, simulating production environment demands.\n' +
      '\n' +
      'resuMATER – AI Resume Analyzer | GEMINI, ReactJs, ExpressJs, Mongoose | GitHub | LIVE\n' +
      'Developed a comprehensive resume analysis platform evaluating resumes against job descriptions, implementing sophisticated scoring logic with AI-powered improvement suggestions.\n' +
      'Architected a responsive and modern user interface using React.js with a modular component architecture, prioritizing user experience.\n' +
      'Achieved 99% scores on Lighthouse for Performance, Accessibility, and SEO, demonstrating a commitment to web best practices.\n' +
      'Reduced initial load time by 40% through strategic lazy loading of components and advanced image optimization techniques.\n' +
      '\n' +
      'URL Shortener Web Application | React, Express, MongoDB | GITHUB | LIVE\n' +
      'Built a full-stack URL shortening service featuring custom aliases, a user-friendly copy-to-clipboard function, and robust error handling.\n' +
      'Achieved a 99% Lighthouse score for performance and best practices via optimized frontend architecture and lazy loading implementation.\n' +
      'Enhanced system reliability and user experience through proper HTTP error handling and secure API implementation, mirroring industry standards.',
    'Achievements and Responsibilities': 'Solved 200+ complex coding problems across LeetCode and other platforms, consistently improving algorithmic thinking, data structures proficiency, and coding fluency.\n' +
      'Coordinated large-scale inter-college coding contests (Codeathon, CodePuzzle) involving 100+ students across 23 teams, developing strong organizational, leadership, and under-pressure problem-solving skills, and demonstrating effective communication.\n' +
      'Actively contributed to open-source projects (if applicable) or significant academic group projects, fostering collaborative development and communication skills.',
    Education: 'Apollo Engineering College, Chennai, TN, India\n' +
      'Bachelor of Engineering – Computer Science and Engineering\n' +
      'CGPA: 8.23/10.0 | August 2021 – June 2025\n' +       
      'Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, Object-Oriented Programming.'
  },
  'critical issues': "The most critical issue is the mismatch between the job's stated experience requirement ('1-2 yrs') and the candidate's current academic status (graduating June 2025). This indicates a lack of formal professional experience, which is a common hard filter for ATS. Additionally, 'excellent communication skills' is a key requirement not explicitly addressed or demonstrated in the resume.",
  'minor issues': "The resume format is clean and professional, and there are no significant minor issues other than the absence of explicit examples or statements regarding 'excellent communication skills'. For a student, the resume is very well-structured and detailed.",
  'best things': "The resume's best aspects include its clear focus on MERN stack, detailed and impactful project descriptions with quantifiable results (e.g., Lighthouse scores, load time reduction), and a strong demonstration of problem-solving abilities through LeetCode and contest organization. The professional summary is concise and highlights key technical skills. The overall technical proficiency is very high for someone at this stage.",
  suggestions: "1. **Address Experience Mismatch Directly (Strategically):** Since you don't have 1-2 years of *professional* experience, you must reframe your strong project work and academic achievements as 'equivalent experience'. In your summary and cover letter, explicitly state how your intensive project development and contributions have equipped you with skills comparable to someone with 1-2 years of industry experience. For example: 'Possessing a robust skill set developed through significant full-stack projects, equivalent to 1-2 years of professional MERN stack development.'\n" +   
    "2. **Incorporate 'Communication Skills':** Find opportunities to demonstrate 'excellent communication skills'. This can be done by:\n" +
    '    *   Adding a soft skills section.\n' +
    '    *   Mentioning presentations, team collaborations, or documentation efforts within your project descriptions.\n' +
    "    *   Elaborating on your role in coordinating coding contests, focusing on communication aspects (e.g., 'effectively communicated with 100+ students', 'managed logistics through clear communication').\n" +
    "3. **Tailor Summary to the JD:** While your current summary is good, slightly rephrase it to directly align with the JD's exact wording. For example, explicitly mentioning 'MERN Stack Developer with strong knowledge of React.js, Node.js, Express.js, and MongoDB, combined with proven debugging and problem-solving skills, developed over [X amount of intensive project work/academic period]'.\n" +
    "4. **Add a 'Soft Skills' or 'Professional Attributes' Section:** This is a good place to explicitly list 'Effective Communication', 'Teamwork', 'Collaboration', etc., and briefly link them to experiences if possible. While the job description is short, soft skills are often implied.\n" +       
    "5. **Consider a Cover Letter:** Given the experience gap, a compelling cover letter is crucial. Use it to explain why you are a strong candidate despite not meeting the strict '1-2 years' professional experience, by highlighting the depth and breadth of your project work and enthusiasm for the role and MERN stack."
})

// const [res, setRes] = useState({})

  const [suggestions, setSuggestions] = useState(["1.  **Tailor for Detailed JDs:** While this resume is excellent for 'mern stack dev', for future, more detailed job descriptions, customize the 'Professional Summary' and project descriptions to incorporate specific keywords and requirements from each unique JD (e.g., cloud platforms, testing frameworks, specific methodologies like Agile).",
    "2.  **Elaborate on Impact:** For each project, consider adding a 'Problem-Solution-Impact' structure to show not just *what* was built, but *why* and *what value* it delivered.",
    "3.  **Refine 'Achievements':** If a JD emphasizes soft skills, consider moving the 'event coordination' achievement to a dedicated 'Leadership' or 'Extracurricular' section. The coding problems can remain, or be integrated more directly into a 'Technical Skills' or 'Challenge Solving' subsection.",
    "4.  **Add a 'Deployed Link' section:** Ensure 'LIVE' links for projects are clearly clickable and visible, perhaps as a separate 'Deployed Application' link alongside GitHub. (The current 'LIVE' might be interpreted as a keyword, not a link indicator by some ATS).",
    "5.  **Consider a 'Technologies Used' breakdown for Projects:** For clarity, a small bulleted list of 'Technologies Used:' under each project title (e.g., 'React.js, Express.js, MongoDB, JWT') makes it even easier for an ATS to parse." ]);
  
  // const [suggestions, setSuggestions] = useState([])
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


      const cleanSuggestion = cleansSuggestion(response.data.suggestions);
      setSuggestions(cleanSuggestion);
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
