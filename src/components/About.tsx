import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and driven by innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am Abdullah Islam Fahim, a software engineering student at Daffodil International University with a passion for technology, innovation, and impactful problem-solving. My key achievements include being a Global Finalist in the NASA Space Apps Challenge 2024, where I contributed to the development of an educational gamified solution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I value collaboration, leadership, and using technology to address real-world challenges. My goal is to create meaningful solutions that make a positive impact on society.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Creative solutions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">Team work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6">
            <Card className="p-6 card-gradient border-border/50 hover:border-primary/20 smooth-transition">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <h4 className="font-medium text-primary">BSc in Software Engineering</h4>
                  <p className="text-muted-foreground">Daffodil International University</p>
                  <p className="text-sm text-muted-foreground">July 2023 – June 2027</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50 hover:border-primary/20 smooth-transition">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Achievement</h3>
                  <h4 className="font-medium text-primary">NASA Space Apps Challenge 2024</h4>
                  <p className="text-muted-foreground">Global Finalist</p>
                  <p className="text-sm text-muted-foreground">Educational gamified solution development</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50 hover:border-primary/20 smooth-transition">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                  <h4 className="font-medium text-primary">Community Building</h4>
                  <p className="text-muted-foreground">Co-Founder, Innovator Youth</p>
                  <p className="text-sm text-muted-foreground">National youth tech community</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;