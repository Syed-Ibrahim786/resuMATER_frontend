import React from 'react'
import ResumeScoreChart from './ScoreChart'

const Scoreboard = ({res}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-y-2 gap-x-1 z-10 ">
            <ResumeScoreChart
              score={res.overallScore}
              className="col-start-1 col-span-2 md:col-span-4  row-start-1 row-span-1"
              title="Overall Score"
            />
            <ResumeScoreChart
              score={res.skillScore}
              className="col-span-1 row-span-1 "
              title="Skills Score"
            />
            <ResumeScoreChart
              score={res.projectScore}
              className="col-span-1 row-span-1 "
              title="Project Score"
            />
            <ResumeScoreChart
              score={res.keywordMatchScore}
              className="col-span-1 row-span-1 "
              title="Keyword Match Score"
            />
            <ResumeScoreChart
              score={res.experienceScore}
              className="col-span-1 row-span-1 "
              title="Experience score"
            />
          </div>
  )
}

export default Scoreboard
