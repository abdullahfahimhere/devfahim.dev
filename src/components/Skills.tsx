import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, Users, Lightbulb, Database, Globe, Smartphone, Server } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 90, icon: Code },
    { name: 'JavaScript', level: 85, icon: Code },
    { name: 'React', level: 80, icon: Code },
    { name: 'Node.js', level: 75, icon: Server },
    { name: 'MongoDB', level: 70, icon: Database },
    { name: 'Firebase', level: 75, icon: Database },
    { name: 'Tailwind CSS', level: 85, icon: Palette },
    { name: 'Express.js', level: 70, icon: Server },
  ];

  const professionalSkills = [
    { name: 'Communication', level: 95, icon: Users },
    { name: 'Leadership', level: 90, icon: Users },
    { name: 'Public Speaking', level: 85, icon: Users },
    { name: 'Project Management', level: 80, icon: Lightbulb },
    { name: 'Problem Solving', level: 90, icon: Lightbulb },
    { name: 'Strategic Thinking', level: 85, icon: Lightbulb },
    { name: 'Team Collaboration', level: 95, icon: Users },
    { name: 'Event Management', level: 80, icon: Users },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites using cutting-edge technologies',
      icon: Globe,
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Modern Frameworks'],
    },
    {
      title: 'Frontend Development',
      description: 'Interactive user interfaces with exceptional user experience',
      icon: Smartphone,
      features: ['React/Next.js', 'Tailwind CSS', 'TypeScript', 'Component Libraries'],
    },
    {
      title: 'Backend Solutions',
      description: 'Scalable server-side applications and APIs',
      icon: Server,
      features: ['Node.js/Express', 'Database Design', 'API Development', 'Cloud Integration'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise across multiple domains of technology and leadership
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Services I Offer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 card-gradient border-border/50 hover:border-primary/20 smooth-transition group text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 smooth-transition">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Code className="h-6 w-6 text-primary mr-3" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              Professional Skills
            </h3>
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;