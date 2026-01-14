import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
            Ready to
            <span className="text-gradient"> Optimize Your Resume?</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Join thousands of job seekers who are landing more interviews with AI-optimized resumes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Start Free Analysis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <span className="text-sm text-muted">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;