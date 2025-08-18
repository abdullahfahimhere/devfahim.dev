import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import abdullahPortrait from '@/assets/abdullah-portrait.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="text-gradient">Abdullah Islam Fahim</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Software Engineering Student | Web Developer | Innovator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Turning ideas into impactful solutions through technology, innovation, and creative problem-solving.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
              >
                View Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:abdullah@example.com"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl"></div>
              <img
                src={abdullahPortrait}
                alt="Abdullah Islam Fahim"
                className="relative w-80 h-96 object-cover rounded-3xl card-gradient"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-muted-foreground hover:text-primary smooth-transition"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;