import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Aspire Leaders Program',
      company: 'Aspire Institute',
      duration: 'Dec 2024 – Present',
      type: 'Leadership Program',
      location: 'Remote',
      description: 'Participating in a comprehensive leadership development program focused on innovation, strategic thinking, and community impact.',
      skills: ['Leadership', 'Strategic Planning', 'Innovation'],
    },
    {
      title: 'SEO & Digital Marketing Intern',
      company: 'Payrchat',
      duration: 'Oct 2023 – Apr 2024',
      type: 'Internship',
      location: 'Remote',
      description: 'Developed and implemented SEO strategies, managed digital marketing campaigns, and analyzed performance metrics to improve online presence.',
      skills: ['SEO', 'Digital Marketing', 'Analytics', 'Content Strategy'],
    },
    {
      title: 'E-Commerce Operations Intern',
      company: 'The MR IT',
      duration: 'May 2021 – Jul 2022',
      type: 'Internship',
      location: 'Dhaka, Bangladesh',
      description: 'Managed e-commerce operations, optimized product listings, and assisted in developing customer engagement strategies.',
      skills: ['E-commerce', 'Operations Management', 'Customer Service', 'Data Analysis'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, learning, and making meaningful contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 card-gradient border-border/50 hover:border-primary/20 smooth-transition group"
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Timeline */}
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{exp.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary smooth-transition">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;