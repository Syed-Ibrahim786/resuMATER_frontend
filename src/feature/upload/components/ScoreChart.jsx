import React from "react"
import { PieChart, Pie, Label } from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Info } from "lucide-react"



const ResumeScoreChart = ({ score , className = "", title, aboutScore}) => {
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

  const cardStyle = "flex gap-0 bg-gradient-card border border-default" + " " +  className;



  return (
    <Card className={cardStyle} >
      <CardHeader className="text-center  ">
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center p-0 ">
        <PieChart width={150} height={150}>
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={50}
            outerRadius={65}
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
                      y={cy - 5}
                      className="fill-white text-md font-bold"
                    >
                      {score}%
                    </tspan>
                    <tspan
                      x={cx}
                      y={cy + 12}
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
        {aboutScore && <CardFooter ><a href="#AboutScore" className="w-full flex justify-center items-center text-[12px] text-gray-500"><Info size={12}/>How is this calculated?</a></CardFooter>}
    </Card>
  )
}

export default ResumeScoreChart
