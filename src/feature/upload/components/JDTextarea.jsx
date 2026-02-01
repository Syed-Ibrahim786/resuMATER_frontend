import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";

import React from "react";

const JDTextarea = ({ data, setData }) => {
  return (
    <section className="bg-surface text-muted py-6 px-6 rounded-2xl border border-default">

      <Label htmlFor="JD" className="flex flex-col items-start text-lg">
        <div className="flex gap-2">

          <FileText/>Job Description
        </div>
      <span className="text-sm font-light">paste the complete job posting</span>
      </Label>
      <Textarea
        onChange={(e) => {
          setData({ ...data, JD: e.target.value });
        }}
        
        id="JD"
        className="
        w-full
        h-[270px] 
        p-4
        mt-2
        bg-bg
      text-white
        border border-default
        rounded-xl
        resize-none"
        required
        placeholder="paste your job description here..."
      />
    </section>
  );
};

export default JDTextarea;
