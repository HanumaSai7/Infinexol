import React from 'react';
import { Workflow, TrendingUp, Clock, DollarSign } from 'lucide-react';
import ServiceHeader from '../components/ServiceHeader';
import ContactForm from '../components/ContactForm';
import CaseStudyCard from '../components/CaseStudyCard';

const DevOpsService = () => {
  return (
    <div>
      <ServiceHeader
        icon={Workflow}
        title="DevOps Excellence"
        description="Streamline your development pipeline with modern DevOps practices and tools for faster, more reliable software delivery."
        benefits={[
          'CI/CD Implementation',
          'Infrastructure as Code',
          'Container Orchestration',
          'Monitoring & Logging',
          'Automated Testing',
          'Release Management'
        ]}
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <div className="space-y-8">
              <CaseStudyCard
                title="DevOps Transformation"
                client="Enterprise SaaS Provider"
                description="Implemented complete DevOps transformation, reducing deployment time and increasing release frequency."
                image="https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '10x', label: 'Deploy Frequency' },
                  { icon: Clock, value: '90%', label: 'Lead Time ↓' },
                  { icon: DollarSign, value: '70%', label: 'Error Reduction' }
                ]}
                tags={['DevOps', 'CI/CD', 'Automation']}
              />

              <CaseStudyCard
                title="Cloud-Native Migration"
                client="Financial Technology Firm"
                description="Migrated monolithic application to microservices architecture with full DevOps implementation."
                image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '99.9%', label: 'Availability' },
                  { icon: Clock, value: '15min', label: 'MTTR' },
                  { icon: DollarSign, value: '45%', label: 'Cost Reduction' }
                ]}
                tags={['Microservices', 'Cloud-Native', 'DevOps']}
              />
            </div>
          </div>

          <div>
            <ContactForm serviceType="DevOps Excellence" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsService;