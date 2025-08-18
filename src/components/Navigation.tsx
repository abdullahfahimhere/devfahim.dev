import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
      scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold text-gradient hover:scale-105 smooth-transition"
            >
              Abdullah
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-foreground hover:text-primary smooth-transition font-medium group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full smooth-transition"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
  <a
    href="https://drive.google.com/file/d/19-OKT1bgsL5Ov3PpCdGX4befNjL7hWP6/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="sm" className="hover:glow-effect">
      <Download className="mr-2 h-4 w-4" />
      Resume
    </Button>
  </a>
</div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-primary/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-xl rounded-xl mt-2 shadow-xl border border-border/50">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg smooth-transition"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 px-2">
  <a
    href="https://drive.google.com/file/d/19-OKT1bgsL5Ov3PpCdGX4befNjL7hWP6/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="sm" className="w-full">
      <Download className="mr-2 h-4 w-4" />
      Resume
    </Button>
  </a>
</div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;