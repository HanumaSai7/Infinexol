import React from 'react';
import { Code2, TrendingUp, Clock, DollarSign } from 'lucide-react';
import ServiceHeader from '../components/ServiceHeader';
import ContactForm from '../components/ContactForm';
import CaseStudyCard from '../components/CaseStudyCard';

const ConsultingService = () => {
  return (
    <div>
      <ServiceHeader
        icon={Code2}
        title="Technical Consulting"
        description="Strategic technology guidance and implementation support to accelerate your digital transformation journey."
        benefits={[
          'Technology Strategy',
          'Architecture Design',
          'Digital Transformation',
          'Security Planning',
          'Performance Optimization',
          'Technical Due Diligence'
        ]}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <div className="space-y-8">
              <CaseStudyCard
                title="Digital Transformation Strategy"
                client="Fortune 500 Retailer"
                description="Developed and executed a comprehensive digital transformation strategy, modernizing legacy systems and processes."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '200%', label: 'Digital Growth' },
                  { icon: Clock, value: '50%', label: 'Process Optimization' },
                  { icon: DollarSign, value: '$15M', label: 'Revenue Impact' }
                ]}
                tags={['Digital Transformation', 'Strategy', 'Enterprise']}
              />

              <CaseStudyCard
                title="Technical Due Diligence"
                client="Investment Firm"
                description="Conducted technical due diligence for multiple acquisition targets, identifying risks and opportunities."
                image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '12', label: 'Acquisitions' },
                  { icon: Clock, value: '3 Weeks', label: 'Avg. Assessment' },
                  { icon: DollarSign, value: '$100M+', label: 'Deal Value' }
                ]}
                tags={['Due Diligence', 'M&A', 'Risk Assessment']}
              />
            </div>
          </div>

          <div>
            <ContactForm serviceType="Technical Consulting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingService;