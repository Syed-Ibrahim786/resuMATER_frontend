import { Lightbulb } from "lucide-react";
import React from "react";

const SuggestionSection = ({suggestions}) => {
  return (
    <section className="p-6 rounded-2xl border border-default bg-surface">
      <div className="mb-6 flex gap-2 items-center text-white text-xl font-bold ">
        
        <Lightbulb />
      <h1>Quick Solution</h1>
        </div>
      <ul className="py-4 px-6 border-l-4 border-amber-400 leading-7  bg-gradient-to-br from-orange-900/10 to-red-900/10">
        {suggestions.map((s, i) => (
          <>
            <li className="text-muted my-4" key={i}>
              {s}
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default SuggestionSection;
