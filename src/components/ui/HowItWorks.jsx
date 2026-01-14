import { Upload, Wand2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Resume",
    description: "Simply drag and drop your resume or paste your content. We support PDF, DOCX, and plain text.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "Add Job Description",
    description: "Paste the job description you're targeting. Our AI will analyze the requirements and keywords.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Get Your Results",
    description: "Receive your ATS score, detailed insights, and personalized suggestions to improve your chances.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
            How It
            <span className="text-gradient"> Works</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Get your resume optimized in three simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
                
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                    {/* Inner circle */}
                    <div className="absolute inset-2 rounded-full bg-gradient-card border border-default flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;