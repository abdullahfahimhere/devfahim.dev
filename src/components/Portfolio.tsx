import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award, Users, Trophy } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'EcoRanger',
      subtitle: 'NASA Space Apps Challenge 2024',
      description: 'A gamified educational platform designed to raise climate awareness among youth. Developed as part of the NASA Space Apps Challenge where we achieved Global Finalist status.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Game Design'],
      achievement: 'Global Finalist',
      icon: Award,
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Innovator Youth Platform',
      subtitle: 'Community Building Initiative',
      description: 'Co-founded and developed a national youth tech community platform that fosters innovation and collaboration among young technologists across Bangladesh.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Community Management'],
      achievement: 'Co-Founder & Organizer',
      icon: Users,
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Student Collaboration App',
      subtitle: 'Standup Hackathon 2024',
      description: 'Champion-winning concept for a student collaboration application that streamlines academic project management and peer-to-peer learning.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Express.js', 'PostgreSQL', 'Real-time Chat'],
      achievement: 'Hackathon Champion',
      icon: Trophy,
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that address real-world challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-gradient border-border/50 hover:border-primary/20 smooth-transition group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <project.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-6 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {project.achievement}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="default" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on exciting projects?
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;