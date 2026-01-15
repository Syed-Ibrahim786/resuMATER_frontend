import React from 'react'

const AboutScore = () => {
  return (
        
    <section id="AboutScore" className="bg-surface border border-default rounded-2xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-accent">
        How ResuMATER Calculates Scores
      </h2>

      <p className="text-muted">
        ResuMATER follows a <span className="font-medium text-white">rule-based evaluation framework</span>,
        executed by an AI model under strict, non-creative constraints.
      </p>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-white">1️⃣ Resume & Job Description Parsing</h3>
          <ul className="list-disc ml-5 text-muted">
            <li>Resume text is extracted and normalized</li>
            <li>Job Description is treated as the single source of truth</li>
            <li>No assumptions are made beyond the JD</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">2️⃣ Controlled Evaluation Prompt</h3>
          <ul className="list-disc ml-5 text-muted">
            <li>Fixed scoring categories</li>
            <li>Clear scoring criteria</li>
            <li>Explicit instructions to avoid hallucination</li>
            <li>Mandatory explanations for every score</li>
          </ul>
          <p className="text-muted mt-1">
            Scores must be justified — not guessed.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">3️⃣ Dimension-wise Scoring</h3>
          <ul className="list-disc ml-5 text-muted">
            <li>Skills</li>
            <li>Projects</li>
            <li>Keywords</li>
            <li>Experience</li>
            <li>Role alignment</li>
          </ul>
          <p className="text-muted mt-1">
            Each dimension is evaluated independently to prevent inflated or biased scoring.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">4️⃣ Explanation Requirement</h3>
          <ul className="list-disc ml-5 text-muted">
            <li>What matched the JD</li>
            <li>What was missing</li>
            <li>Why the score increased or decreased</li>
          </ul>
          <p className="text-error mt-1">
            If explanation quality is low, the score is rejected.
          </p>
        </div>
      </div>
   
  

   </section>
    
  )
}

export default AboutScore
