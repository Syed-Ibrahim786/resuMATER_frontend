import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";

const JDTextarea = ({ data, setData }) => {
  return (
    <section className="bg-surface text-muted p-4 rounded-2xl border border-default">
      <Label htmlFor="JD" className="mb-6 text-lg">
        Paste JD
      </Label>
      <Textarea
        onChange={(e) => {
          setData({ ...data, JD: e.target.value });
        }}
        
        id="JD"
        className=" 
        bg-surface
      text-white
        border border-default
        rounded-xl
        resize-vertical"
        placeholder="paste your job description here..."
      />
    </section>
  );
};

export default JDTextarea;
