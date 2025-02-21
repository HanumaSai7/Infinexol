import React from 'react';
import { Brain, TrendingUp, Clock, DollarSign } from 'lucide-react';
import ServiceHeader from '../components/ServiceHeader';
import ContactForm from '../components/ContactForm';
import CaseStudyCard from '../components/CaseStudyCard';

const AIMLService = () => {
  return (
    <div>
      <ServiceHeader
        icon={Brain}
        title="AI/ML Development"
        description="Transform your business with cutting-edge artificial intelligence and machine learning solutions tailored to your specific needs."
        benefits={[
          'Custom AI Model Development',
          'Natural Language Processing',
          'Computer Vision Solutions',
          'Predictive Analytics',
          'AI Integration Services',
          'MLOps & Model Deployment'
        ]}
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <div className="space-y-8">
              <CaseStudyCard
                title="AI-Powered Risk Assessment Platform"
                client="Leading Singapore Bank"
                description="Developed an AI-driven risk assessment system that processes loan applications in real-time, significantly reducing processing time and improving accuracy."
                image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '85%', label: 'Faster Processing' },
                  { icon: Clock, value: '60%', label: 'Manual Review ↓' },
                  { icon: DollarSign, value: '$2.5M', label: 'Annual Savings' }
                ]}
                tags={['Banking', 'Risk Assessment', 'AI/ML']}
              />

              <CaseStudyCard
                title="Predictive Maintenance System"
                client="Global Manufacturing Corp"
                description="Implemented a predictive maintenance system using IoT sensors and machine learning to predict equipment failures before they occur."
                image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '92%', label: 'Accuracy' },
                  { icon: Clock, value: '45%', label: 'Downtime ↓' },
                  { icon: DollarSign, value: '$4M', label: 'Cost Savings' }
                ]}
                tags={['Manufacturing', 'IoT', 'Predictive AI']}
              />
            </div>
          </div>

          <div>
            <ContactForm serviceType="AI/ML Development" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLService;