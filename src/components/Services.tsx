import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Cloud, Users, Code2, Workflow, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI/ML Development',
    description: 'Custom AI solutions, from predictive analytics to generative AI, designed to transform your business operations.',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision'],
    path: '/services/ai-ml'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architectures and migration strategies that optimize performance and reduce costs.',
    features: ['Multi-Cloud Strategy', 'Serverless Architecture', 'Cloud Migration'],
    path: '/services/cloud'
  },
  {
    icon: Users,
    title: 'Augmented Staffing',
    description: 'Access pre-vetted tech talent within 72 hours, perfectly matched to your project needs.',
    features: ['AI Engineers', 'Cloud Architects', 'DevOps Experts'],
    path: '/services/staffing'
  },
  {
    icon: Code2,
    title: 'Technical Consulting',
    description: 'Strategic guidance and implementation support to accelerate your digital transformation.',
    features: ['Technology Roadmap', 'Architecture Design', 'Security Planning'],
    path: '/services/consulting'
  },
  {
    icon: Workflow,
    title: 'DevOps Excellence',
    description: 'Streamline your development pipeline with modern DevOps practices and tools.',
    features: ['CI/CD Implementation', 'Infrastructure as Code', 'Monitoring Setup'],
    path: '/services/devops'
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Comprehensive security measures to protect your applications and infrastructure.',
    features: ['Security Audits', 'Compliance Management', 'Threat Detection'],
    path: '/services/security'
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive Tech Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            End-to-end services to power your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button className="w-full bg-gray-50 hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;