import { Button } from "@/components/ui/button";
import { Check, Copy, Lightbulb } from "lucide-react";
import React, { useState } from "react";

const Enhancement = ({ enhancement }) => {

    const[copied, setCopied] = useState([]);

    function copyToClipboard(text, section){
        navigator.clipboard.writeText(text);
        setCopied(copied.includes(section) ? [...copied]: [...copied, section] )
        setTimeout(() => {
            setCopied(copied.filter((each) => each !== section))
        }, 4000);

    }



  return (
    <section className="flex flex-col gap-8 bg-surface p-6 rounded-2xl border border-default">
      <div className="flex items-center gap-3 text-white mb-4 font-bold text-2xl capitalize">
        <Lightbulb size={30} />
        <h2>best Suggestions (Enhanced)</h2>
      </div>
      {Object.entries(enhancement).map(([section, content]) => {
        return (
          <div
            className=" bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg p-4 border-2 border-amber-400"
            key={section}
          >
            <div className="flex flex-wrap justify-between items-center mb-4 text-white">
              <b className="text-lg font-semibold">{section}</b>
              <Button
              onClick={() => copyToClipboard(content, section)}
              title={`copy button for generated ${section}`}
                variant="outline"
                className={`border border-default  ${copied.includes(section)? "bg-success": "bg-accent"} hover:bg-orange-600 duration-700 transition-all`}
              >
                {
                    copied.includes(section) ? <>copied <Check/></> : <><Copy/> copy</>
                }
                
              </Button>
            </div>
            <p className="rounded p-4 text-muted text-sm font-mono bg-gray-900/50">
              {content}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Enhancement;
