import React from "react";

const Feedback = ({feedback}) => {
  return (
    <section>
      <p className="text-white">
        {feedback.map((text, i) => (
          <>
            <br />
            <p>{text}</p>
          </>
        ))}
      </p>
    </section>
  );
};

export default Feedback;
