import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <header>
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-default bg-surface/50 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted">AI-Powered Resume Optimization</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in text-white" style={{ animationDelay: '0.1s' }}>
            Beat the ATS.
            <br />
            <span className="text-gradient">Land Your Dream Job.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Upload your resume, paste the job description, and get instant ATS scores, 
            deep insights, and actionable suggestions to make your resume stand out.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={() => navigate("/mainPage")}>
              Analyze My Resume
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See Demo
            </Button>
          </div>
          
          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-2xl md:text-3xl font-display font-bold text-white">95%</span>
              </div>
              <span className="text-xs md:text-sm text-muted">ATS Pass Rate</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-2xl md:text-3xl font-display font-bold text-white">30s</span>
              </div>
              <span className="text-xs md:text-sm text-muted">Instant Analysis</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-2xl md:text-3xl font-display font-bold text-white">10k+</span>
              </div>
              <span className="text-xs md:text-sm text-muted">Resumes Optimized</span>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from- to-transparent pointer-events-none" />
    </section>
      </header>
  )
}

export default Hero
