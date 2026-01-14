import { FileSearch, BarChart3, Lightbulb, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "ATS Score Analysis",
    description: "Get an instant compatibility score showing how well your resume matches the job requirements and ATS systems.",
  },
  {
    icon: BarChart3,
    title: "Deep Insights",
    description: "Understand exactly what's working and what's missing with detailed breakdowns of keywords, skills, and formatting.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Suggestions",
    description: "Receive specific, easy-to-implement recommendations to boost your resume's performance immediately.",
  },
  {
    icon: CheckCircle2,
    title: "Keyword Optimization",
    description: "Identify missing keywords from the job description and learn how to naturally incorporate them.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
            Everything You Need to
            <span className="text-gradient"> Stand Out</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Our AI analyzes your resume against the job description to give you a competitive edge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl border border-default bg-gradient-card hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
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

export default Features;