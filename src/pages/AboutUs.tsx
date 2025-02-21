import React from 'react';
import {
  Code2, Users, Rocket, Award, Brain, Database, Cloud,
  Server, Lock, Globe, Cpu, Wifi, Monitor, Laptop,
  Smartphone, Cog, GitBranch, Terminal, Briefcase,
  LineChart, Network, Shield
} from 'lucide-react';

const AboutUs = () => {
  const technologies = [
    // Cloud & Infrastructure
    { name: 'AWS', icon: Cloud },
    { name: 'Azure', icon: Cloud },
    { name: 'GCP', icon: Cloud },
    { name: 'Kubernetes', icon: Server },
    { name: 'Docker', icon: Database },
    // Programming Languages
    { name: 'Python', icon: Code2 },
    { name: 'JavaScript', icon: Terminal },
    { name: 'TypeScript', icon: Code2 },
    { name: 'Java', icon: Cpu },
    { name: 'Go', icon: Terminal },
    // Frameworks
    { name: 'React', icon: Monitor },
    { name: 'Node.js', icon: Server },
    { name: 'Spring Boot', icon: Rocket },
    { name: 'Django', icon: Code2 },
    // AI & ML
    { name: 'TensorFlow', icon: Brain },
    { name: 'PyTorch', icon: Brain },
    { name: 'OpenAI', icon: Brain },
    // DevOps
    { name: 'Jenkins', icon: Cog },
    { name: 'GitLab', icon: GitBranch },
    { name: 'Terraform', icon: Globe },
    // Security
    { name: 'OAuth', icon: Lock },
    { name: 'JWT', icon: Lock },
    { name: 'SSL/TLS', icon: Lock }
  ];

  const stats = [
    { number: '200+', label: 'Enterprise Clients' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Tech Experts' },
    { number: '15+', label: 'Years Experience' }
  ];

  const teamMembers = [
    {
      name: 'John',
      position: 'Chief Technology Officer',
      expertise: ['Cloud Architecture', 'Enterprise Solutions', 'Digital Transformation'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      icon: Cloud
    },
    {
      name: 'Peter',
      position: 'Head of AI/ML',
      expertise: ['Machine Learning', 'Neural Networks', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      icon: Brain
    },
    {
      name: 'Ravi',
      position: 'Director of Engineering',
      expertise: ['System Architecture', 'Scalable Systems', 'Tech Strategy'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
      icon: Code2
    },
    {
      name: 'Joseph',
      position: 'Head of Security',
      expertise: ['Cybersecurity', 'Risk Management', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      icon: Shield
    }
  ];

  const featuredCaseStudy = {
    client: 'Global Waste Solutions',
    industry: 'Waste Management',
    description: 'Revolutionized waste management operations through AI-powered logistics optimization and real-time tracking systems.',
    outcomes: [
      'Reduced fleet fuel consumption by 30%',
      'Improved route efficiency by 45%',
      'Real-time tracking of 16,000+ vehicles',
      'Predictive maintenance saving $2.5M annually'
    ],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1920'
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Transforming Ideas into Enterprise Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're a team of passionate technologists dedicated to helping businesses thrive in the digital age through innovative solutions and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experts driving innovation and excellence in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-4">
                        <member.icon className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 font-medium mb-3">
                        {member.position}
                      </p>
                      <div className="space-y-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          
          <div className="relative">
            {/* First row - moving left */}
            <div className="flex space-x-8 animate-scroll-left">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-none group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-40"
                >
                  <div className="flex flex-col items-center">
                    <tech.icon className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - moving right */}
            <div className="flex space-x-8 mt-8 animate-scroll-right">
              {[...technologies.reverse(), ...technologies].map((tech, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-none group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-40"
                >
                  <div className="flex flex-col items-center">
                    <tech.icon className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Case Study */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Success Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={featuredCaseStudy.image}
                alt="Global Waste Solutions Case Study"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {featuredCaseStudy.industry}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {featuredCaseStudy.client}
                </h3>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-600 mb-8">
                {featuredCaseStudy.description}
              </p>
              <div className="space-y-4">
                {featuredCaseStudy.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Innovation First',
                description: "We constantly push the boundaries of what is possible with technology."
              },
              {
                icon: Users,
                title: 'Client Success',
                description: "Your success is our success. We are committed to delivering exceptional results."
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <value.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;