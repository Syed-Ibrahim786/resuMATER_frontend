import { LayoutDashboard, Building2, FolderSync, Clock } from "lucide-react";

const upcomingFeatures = [
  {
    icon: LayoutDashboard,
    title: "Personal Dashboard",
    description: "Track all your applications, scores, and improvements in one beautiful dashboard.",
    status: "In Development",
  },
  {
    icon: Building2,
    title: "Hiring Platforms",
    description: "Direct integrations with LinkedIn, Indeed, and other major job platforms.",
    status: "Coming Q2",
  },
  {
    icon: FolderSync,
    title: "Resume Maintainer",
    description: "Keep multiple versions of your resume organized and always up-to-date.",
    status: "Coming Q2",
  },
];

const ComingSoon = () => {
  return (
    <section id="coming-soon" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/25 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Coming Soon</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
            The Future of
            <span className="text-gradient"> Resume Building</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            We're building a complete suite of tools to supercharge your job search.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {upcomingFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl border border-dashed border-muted hover:border-primary/30 transition-all duration-300 bg-surface/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {feature.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;