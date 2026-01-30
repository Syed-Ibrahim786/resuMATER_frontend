import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";
import React from "react";

const Insights = ({ label, insight }) => {
  const insightsStyle = {
    "critical issue": {
      icon: AlertCircle,
      border: "border-primary",
      bg: "bg-red-900/30",
    },
    "minor issue": {
      icon: AlertTriangle,
      border: "border-amber-400",
      bg: "bg-amber-900/30",
    },
    "best things": {
      icon: CheckCircle,
      border: "border-green-400",
      bg: "bg-green-900/30",
    },
  };
  const lowerCaseLabel = label.toLowerCase();
  const currentStyles = {
    border: insightsStyle[lowerCaseLabel].border,
    bg: insightsStyle[lowerCaseLabel].bg,
    icon: insightsStyle[lowerCaseLabel].icon,
  };
  return (
    <section className="p-6 bg-surface border-2 border-default rounded-2xl">
        <div className="flex gap-2  items-center mb-4 text-white text-xl font-bold ">
          {<currentStyles.icon />}
          <h2>{label}</h2>
        </div>
      <div
        className={`p-6 border-l-4 rounded ${currentStyles.border} ${currentStyles.bg}`}
      >
        <p className="text-muted leading-relaxed">{insight}</p>
      </div>
    </section>
  );
};

export default Insights;
