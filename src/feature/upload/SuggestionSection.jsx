import React from "react";

const SuggestionSection = ({suggestions}) => {
  return (
    <section>
      <h1 className="text-accent font-bold ">Quick Solution</h1>
      <ul className="leading-7">
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
