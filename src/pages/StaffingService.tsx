import React from 'react';
import { Users, TrendingUp, Clock, DollarSign } from 'lucide-react';
import ServiceHeader from '../components/ServiceHeader';
import ContactForm from '../components/ContactForm';
import CaseStudyCard from '../components/CaseStudyCard';

const StaffingService = () => {
  return (
    <div>
      <ServiceHeader
        icon={Users}
        title="Augmented Staffing"
        description="Access world-class tech talent within 72 hours, perfectly matched to your project requirements and company culture."
        benefits={[
          'Pre-vetted Tech Talent',
          'Rapid Team Scaling',
          'Flexible Engagement Models',
          'Cultural Fit Assessment',
          'Skill Gap Analysis',
          'Continuous Performance Monitoring'
        ]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <div className="space-y-8">
              <CaseStudyCard
                title="Rapid Team Expansion"
                client="Tech Unicorn Startup"
                description="Scaled development team from 10 to 50 engineers in 3 months while maintaining high code quality and team cohesion."
                image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '5x', label: 'Team Growth' },
                  { icon: Clock, value: '72h', label: 'Avg. Placement' },
                  { icon: DollarSign, value: '40%', label: 'Cost Savings' }
                ]}
                tags={['Team Scaling', 'Tech Talent', 'Rapid Growth']}
              />

              <CaseStudyCard
                title="Specialized AI Team Formation"
                client="Healthcare Innovation Lab"
                description="Assembled a specialized team of AI researchers and engineers for a breakthrough medical imaging project."
                image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '100%', label: 'Project Success' },
                  { icon: Clock, value: '2 Weeks', label: 'Team Formation' },
                  { icon: DollarSign, value: '60%', label: 'Time Saved' }
                ]}
                tags={['AI Specialists', 'Healthcare', 'Research']}
              />
            </div>
          </div>

          <div>
            <ContactForm serviceType="Augmented Staffing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffingService;