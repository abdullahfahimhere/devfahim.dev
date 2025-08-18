import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Rocket } from 'lucide-react';
import fahimProfile from '@/assets/fahim-profile.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    { icon: Rocket, text: "NASA Space Apps Global Finalist", color: "text-yellow-400" },
    { icon: Code, text: "Full-Stack Developer", color: "text-blue-400" },
    { icon: Sparkles, text: "Innovation Leader", color: "text-purple-400" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl floating-element"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        {/* Mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none smooth-transition"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting with typing effect */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm animate-fade-in">
                <Sparkles className="mr-2 h-4 w-4" />
                Available for opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient block lg:inline">
                  Abdullah Islam Fahim
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-xl md:text-3xl text-muted-foreground font-light">
                  Software Engineering Student | Web Developer | Innovator
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Turning ideas into impactful solutions through technology, innovation, and creative problem-solving.
                </p>
              </div>
            </div>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 smooth-transition"
                >
                  <achievement.icon className={`h-4 w-4 ${achievement.color}`} />
                  <span className="text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] smooth-transition"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="hover:bg-primary/5 hover:border-primary/30"
              >
                Contact Me
              </Button>
            </div>

            {/* Social links with enhanced styling */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:abdullah@example.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 smooth-transition"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 smooth-transition"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image with Circular Mask */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl group-hover:blur-3xl smooth-transition pulse-glow"></div>
              
              {/* Main image container with circular mask */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full"></div>
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 smooth-transition border-4 border-primary/20">
                  <img
                    src={fahimProfile}
                    alt="Abdullah Islam Fahim - Software Engineer and Web Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Floating tech icons */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 flex items-center justify-center floating-element">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 flex items-center justify-center floating-element">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 flex items-center justify-center floating-element">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <button 
            onClick={() => scrollToSection('#about')}
            className="group w-10 h-16 border border-border/50 rounded-full flex items-end justify-center pb-2 hover:border-primary/30 smooth-transition"
          >
            <ArrowDown className="h-4 w-4 text-muted-foreground group-hover:text-primary animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;