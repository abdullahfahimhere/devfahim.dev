import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Abdullah Islam Fahim</h3>
            <p className="text-muted-foreground mb-4">
              Software Engineering Student passionate about creating impactful technological solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdullah-islam-fahim-328671231/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }}
  className="text-muted-foreground hover:text-primary smooth-transition"
>
  <Mail className="h-5 w-5" />
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Skills', href: '#skills' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Dhaka, Bangladesh</p>
              <p>abdullahfahimhere@gmail.com</p>
              <p>+880 130 405 9616</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Abdullah Islam Fahim. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;