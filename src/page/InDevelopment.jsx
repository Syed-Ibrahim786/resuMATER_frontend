import React from 'react';
import { 
  Wrench, 
  Sparkles, 
  ArrowLeft, 
  Code2,
  Zap,
  Target
} from 'lucide-react';

const InDevelopment = ({ featureName = "This Feature" }) => {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        
        {/* Animated Icon */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none"></div>
          <div className="relative p-8 bg-surface border-2 border-default rounded-2xl animate-pulse-glow">
            <Wrench className="w-20 h-20 text-accent mx-auto" />
          </div>
          <div className="absolute -top-2 -right-2 p-2 bg-primary rounded-full animate-bounce">
            <Code2 className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 animate-fade-in-up">
          {featureName} is Cooking! 🔥
        </h1>
        
        <p className="text-xl text-muted mb-8 animate-fade-in-up">
          We're building something amazing for you
        </p>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-in">
          <div className="bg-surface border-2 border-default rounded-xl p-6 hover:border-accent transition-all duration-300">
            <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">In Progress</h3>
            <p className="text-sm text-muted">Actively developing this feature</p>
          </div>
          
          <div className="bg-surface border-2 border-default rounded-xl p-6 hover:border-accent transition-all duration-300">
            <Zap className="w-8 h-8 text-warning mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Coming Soon</h3>
            <p className="text-sm text-muted">Expected in next update</p>
          </div>
          
          <div className="bg-surface border-2 border-default rounded-xl p-6 hover:border-accent transition-all duration-300">
            <Target className="w-8 h-8 text-success mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Worth the Wait</h3>
            <p className="text-sm text-muted">Built with care & quality</p>
          </div>
        </div>

        {/* Feature Preview */}
        <div className="bg-surface border-2 border-default rounded-xl p-8 mb-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-white mb-4">What's Coming?</h2>
          <p className="text-muted leading-relaxed mb-6">
            We're crafting an exceptional experience for this feature. Our team is working hard to ensure 
            it meets the high standards you deserve. Stay tuned for something special!
          </p>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted">Development Progress</span>
              <span className="text-accent font-semibold">5%</span>
            </div>
            <div className="h-3 bg-bg rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: '5%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover-bg-primary-dark rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <a
            href="/applications"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border-2 border-default hover:border-accent rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            Back to Home
          </a>
        </div>

        {/* Footer Message */}
        <div className="mt-12 p-6 bg-gradient-to-br from-orange-900/10 to-red-900/10 border-2 border-accent/30 rounded-xl animate-fade-in">
          <p className="text-sm text-muted">
            Want to know when this feature launches?{' '}
            <a 
              href="mailto:asyedibrahim7860@gmail.com?subject=Notify me about new features"
              className="text-accent hover:text-warning transition-colors font-semibold"
            >
              Drop us an email
            </a>
            {' '}and we'll keep you posted!
          </p>
        </div>

      </div>
    </div>
  );
};

export default InDevelopment;