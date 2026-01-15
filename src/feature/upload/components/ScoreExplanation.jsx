import { ChevronDown } from "lucide-react";
import React, { useRef } from "react";

const ScoreExplanation = ({ res }) => {
  const scoreExplanationContainer = useRef(null);
  const chevron = useRef(null);
  function show() {
    if (scoreExplanationContainer.current.style.display === "none") {
      scoreExplanationContainer.current.style.display = "block";

      console.log(scoreExplanationContainer.current.style.display);
    } else {
      scoreExplanationContainer.current.style.display = "none";
    }
    chevron.current.classList.toggle("rotate-180");
     
  }
  return (
    <section>
      <h1 className=" flex justify-between text-muted font-bold p-4 bg-surface">
        Why this Score?
        <button
          ref={chevron}
          className="transition-all duration-300"
          onClick={show}
        >
          <ChevronDown />
        </button>
      </h1>
      <div ref={scoreExplanationContainer} style={{ display: "none" }}>
        {res.scoreExplanation?.map((entry, index) => (
          <p className="text-muted" key={index}>
            <b className="text-lg block">{entry.scoreType}</b>
            <p className="text-sm">{entry.explanation}</p>
          </p>
        ))}
      </div>
    </section>
  );
};

export default ScoreExplanation;
