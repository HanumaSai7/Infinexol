import React from 'react';
import { Cloud, TrendingUp, Clock, DollarSign } from 'lucide-react';
import ServiceHeader from '../components/ServiceHeader';
import ContactForm from '../components/ContactForm';
import CaseStudyCard from '../components/CaseStudyCard';

const CloudService = () => {
  return (
    <div>
      <ServiceHeader
        icon={Cloud}
        title="Cloud Solutions"
        description="Accelerate your digital transformation with scalable, secure, and cost-effective cloud solutions designed for your business needs."
        benefits={[
          'Cloud Migration Strategy',
          'Multi-Cloud Architecture',
          'Cloud-Native Development',
          'Serverless Solutions',
          'DevOps Integration',
          'Performance Optimization'
        ]}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <div className="space-y-8">
              <CaseStudyCard
                title="Enterprise Cloud Migration"
                client="Global Financial Services"
                description="Successfully migrated a legacy banking system to a multi-cloud architecture, improving scalability and reducing operational costs."
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '99.99%', label: 'Uptime' },
                  { icon: Clock, value: '40%', label: 'Faster Deploy' },
                  { icon: DollarSign, value: '$3M', label: 'Annual Savings' }
                ]}
                tags={['Multi-Cloud', 'Migration', 'DevOps']}
              />

              <CaseStudyCard
                title="Serverless E-commerce Platform"
                client="Retail Giant"
                description="Built a scalable serverless e-commerce platform handling millions of transactions during peak shopping seasons."
                image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '10M+', label: 'Daily Users' },
                  { icon: Clock, value: '200ms', label: 'Avg Response' },
                  { icon: DollarSign, value: '65%', label: 'Cost Reduction' }
                ]}
                tags={['Serverless', 'E-commerce', 'High-Scale']}
              />
            </div>
          </div>

          <div>
            <ContactForm serviceType="Cloud Solutions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudService;