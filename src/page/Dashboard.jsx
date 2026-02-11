import {
  Award,
  BarChart3,
  CloudUpload,
  FileSearchCorner,
  History,
  Sparkle,
  Sparkles,
  TrendingUp,
  Upload,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { NavLink } from "react-router-dom";
import { CustomTooltip } from "@/components/ui/CustomTooltip";

const Dashboard = () => {
  const statsCardStyle =
    "p-4 bg-surface rounded-2xl leading-10 hover:scale-104 transition-all duration-500 border border-default";
  // const resumeChartData = [
  //   { date: "Jun 1", resumeA: 72, resumeB: 55, resumeC: 88 },
  //   { date: "Jun 5", resumeA: 78, resumeB: 60, resumeC: 90 },
  //   { date: "Jun 10", resumeA: 82, resumeB: 67, resumeC: 92 },
  // ];

  // const resumes = [
  //   { key: "resumeA", label: "Frontend Resume", color: "#ef4444" },
  //   { key: "resumeB", label: "Backend Resume", color: "#3b82f6" },
  //   { key: "resumeC", label: "ML Resume", color: "#22c55e" },
  // ];

  const topResumes = [
    {rank:1, resume:"software engineer resume", score:85},
    {rank:2, resume:"mern stack dev resume", score:75},
    
    {rank:3, resume:"mern stack dev resume", score:75}

  ];
  


  const recentActivity = [
    {id:1, type:"analyzed", resume:"full stack resume", score:80, createdAt:"1 day"},
    {id:2, type:"created", resume:"full stack resume", score:80, createdAt:"1 day"},
    {id:3, type:"analyzed", resume:"full stack resume", score:80, createdAt:"2 day"},
    {id:4, type:"uploaded", resume:"full stack resume", score:80, createdAt:"1 day"},
  ]

  const activityIcons = {
    "analyzed":BarChart3,
    "created":Sparkle,
    "uploaded":Upload
  };
  const [tip, setTip] = useState(0);
  const tipTimer = useRef(null);

  useEffect(() => {
    const tipsLength = tips.length; 
    console.log(tipsLength)
    tipTimer.current = setInterval(() => setTip(prev => (prev + 1) % tipsLength), 5000);

    return () => {
      console.log(tipTimer,"flushed")
      return clearInterval(tipTimer.current);
    }
  },[])

  const tips = ["Add quantifiable metrics to boost your ATS score by up to 15%!","Add quantifiable metrics to boost your ATS score by up to 10%!","Add quantifiable metrics to boost your ATS score by up to 1%!"]
  return (
    <main className="p-6">
      <article className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1   gap-2 text-gray-400 mb-6">
        <div className={statsCardStyle}>
          <p className=" text-sm sm:text-[16px]">total resumes</p>
          <p className="pl-2 text-accent brightness-75 font-semibold text-xl  sm:text-3xl">
            5
          </p>
        </div>
        <div className={statsCardStyle}>
          <p className="text-sm sm:text-[16px]">average ATS score</p>
          <p className=" pl-2 text-accent brightness-85 font-semibold text-xl  sm:text-3xl">
            78%
          </p>
        </div>
        <div className={statsCardStyle}>
          <p className="text-sm sm:text-[16px]">best score</p>
          <p className=" pl-2 text-accent brightness-85 font-semibold text-xl sm:text-3xl">
            85%
          </p>
        </div>
        <div className={statsCardStyle}>
          <p className="text-sm sm:text-[16px]">Total Analyses</p>
          <p className=" pl-2 text-accent brightness-85 font-semibold text-xl sm:text-3xl">
            12
          </p>
        </div>
      </article>
      <section className="mb-10">
        <div className="grid grid-cols-3 gap-2">
          <NavLink
            className="flex flex-col justify-center items-center gap-2 p-4 bg-surface rounded-lg border border-default hover:scale-108 hover:border-amber-400 transition-all duration-500"
            title="upload new resume "
            to="/resume"
          >
            <CloudUpload className="size-10 opacity-50 text-success" />
            <p className="text-wrap text-center capitalize text-[12px] text-gradient">
              upload new resume
            </p>
          </NavLink>
          <NavLink
            className="flex flex-col justify-center items-center gap-2 p-4 bg-surface rounded-lg border border-default hover:scale-108 hover:border-amber-400 transition-all duration-500"
            title=" analyze resume "
            to="/applications"
          >
            <TrendingUp className="size-10 opacity-50 text-primary" />
            <p className="text-wrap text-center capitalize text-[12px] text-gradient">
              analyze resume
            </p>
          </NavLink>
          <NavLink
            className="flex flex-col justify-center items-center gap-2 p-4 bg-surface rounded-lg border border-default hover:scale-108 hover:border-amber-400 transition-all duration-500"
            title="browse template"
            to="/resume"
          >
            <FileSearchCorner className="size-10 opacity-50 text-accent" />
            <p className="text-wrap text-center capitalize text-[12px] text-gradient">
              browse template
            </p>
          </NavLink>
        </div>
      </section>

      <div className="grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-1 ">
        <section className="p-4 bg-surface rounded-2xl ">
          <div className="text-muted">
            <div className="pb-4 flex justify-between">
              <h2 className="flex gap-2 items-center text-[20px]">
                <Award />
                top performing resume
              </h2>
              
            </div>
            <div className="flex flex-col gap-2">
              {
                topResumes.map((item) => (
                  <div className="p-4 flex justify-between items-center bg-surface brightness-95 border border-default rounded-2xl">
                    <b className="font-semibold">#{item.rank}</b>
                    <p className="text-wrap">{item.resume}</p>
                    <p className=" leading-tight text-center"><b className=" block font-bold text-primary">{item.score}%</b><span className="font-normal text-sm">ATS</span></p>
                  </div>
                ))
              }
            </div>
            <p className="pt-4 text-center text-sm">view all</p>
          </div>
        </section>
        <section className="p-4  bg-surface rounded-2xl border border-default">
          <h2 className="flex gap-2 items-center justify-start pb-2 text-gray-400 brightness-95 border-b-2 border-default text-[20px]">
            <History />
            recent activity
          </h2>
          <ul className=" text-muted h-[240px] overflow-y-scroll custom-scrollbar">
            {
              recentActivity.map((activity) => {
                const iconType = activity.type.toLowerCase();
                const Icon = activityIcons[iconType];
                return (
                <li key={activity.id} className="mt-2 p-4 flex justify-start items-center gap-4 bg-surface brightness-95 border border-default rounded-2xl">
                  <div>
                    {<Icon/>}
                  </div>
                  <div className="font-bold">

                  <p className="brightness-85">{activity.resume}</p>
                  {activity.score && <p className="brightness-75">{activity.score}%</p>}
                  
                  <p className="leading-10 text-sm brightness-50">{activity.createdAt} ago</p>
                  </div>
                </li>
              )})
            }
          </ul>
        </section>

        {/* <div className="w-full rounded-2xl border border-default bg-surface p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-500">
        Resume Score Progress
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Higher line = stronger resume score
      </p>

      <div className="h-[300px] ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={resumeChartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} />
            <Tooltip content={<CustomTooltip />} />

            {resumes.map((resume) => (
              <Line
                key={resume.key}
                type="monotone"
                dataKey={resume.key}
                stroke={resume.color}
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div> */}
      </div>

      <section className="mt-4 p-4 flex flex-col gap-4 bg-surface border border-default rounded-2xl text-muted">
        <h2 className="flex gap-4 font-bold text-[16px]">
          <div className="">
            <Sparkles className="text-primary size-6"/>
          </div>
           💡pro tips & tricks
        </h2>
        <p  className="p-4 border border-primary rounded-2xl text-accent">
          <span key={tip} className="animate-tip">
            {
            tips[tip]
          }
            </span>
        </p>
      </section>
    </main>
  );
};

export default Dashboard;
