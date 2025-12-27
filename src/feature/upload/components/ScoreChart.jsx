import React from "react"
import { PieChart, Pie, Label } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const ResumeScoreChart = ({ score = 82 }) => {
  const chartData = [
    { name: "Score", value: score, fill: "green" },
    { name: "Remaining", value: 100 - score, fill: "red " },
  ]
  const chartData2 = [
    { name: "Score", value: score, fill: "#DC2626" },
    { name: "Remaining", value: 100 - score, fill: "#1F2937" },
  ]

  let review;

  if( score <= 75){
    review = "low";
  }else if(score > 75 && score < 85){
    review = "almost";
  }else{
    review = "awesome";
  }



  return (
    <Card className="bg-surface border border-default">
      <CardHeader className="text-center">
        <CardTitle className="text-white">ATS Score</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center">
        <PieChart width={220} height={220}>
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
            strokeWidth={0}
          >
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = viewBox
                return (
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={cx}
                      y={cy}
                      className="fill-white text-3xl font-bold"
                    >
                      {score}%
                    </tspan>
                    <tspan
                      x={cx}
                      y={cy + 22}
                      className="fill-muted text-sm"
                    >
                      {review}
                    </tspan>
                  </text>
                )
              }}
            />
          </Pie>
        </PieChart>
      </CardContent>
    </Card>
  )
}

export default ResumeScoreChart
