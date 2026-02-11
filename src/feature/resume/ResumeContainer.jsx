import React, { useState } from 'react'
import ResumeUI from './ResumeUI';

const ResumeContainer = () => {
    const [myResumes, setMyResumes] = useState([
    {
      id: 1,
      name: "Software Engineer Resume",
      lastModified: "2 hours ago",
      favorite: true,
      atsScore: 85
    },
    {
      id: 2,
      name: "Full Stack Developer",
      lastModified: "1 day ago",
      favorite: false,
      atsScore: 82
    },
    {
      id: 3,
      name: "Internship Application",
      lastModified: "3 days ago",
      favorite: true,
      atsScore: 75
    }
  ]);

   // Templates
  const [templates,setTemplates] = useState([
    {
      id: 'temp1',
      name: 'Modern Professional',
      category: 'Professional',
      popular: true
    },
    {
      id: 'temp2',
      name: 'Minimal Clean',
      category: 'Minimal',
      popular: false
    },
    {
      id: 'temp3',
      name: 'Creative Bold',
      category: 'Creative',
      popular: true
    },
    {
      id: 'temp4',
      name: 'Executive',
      category: 'Professional',
      popular: false
    },
    {
      id: 'temp5',
      name: 'Student Friendly',
      category: 'Student',
      popular: false
    },
    {
      id: 'temp6',
      name: 'Tech Industry',
      category: 'Tech',
      popular: true
    }
  ]);
  return (
    <ResumeUI myResumes={myResumes} templates={templates}/>
  )
}

export default ResumeContainer
