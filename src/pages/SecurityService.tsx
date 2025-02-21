import React from 'react';
import { Shield, TrendingUp, Clock, DollarSign } from 'lucide-react';
import ServiceHeader from '../components/ServiceHeader';
import ContactForm from '../components/ContactForm';
import CaseStudyCard from '../components/CaseStudyCard';

const SecurityService = () => {
  return (
    <div>
      <ServiceHeader
        icon={Shield}
        title="Security Solutions"
        description="Protect your digital assets with comprehensive security solutions that safeguard your business against evolving cyber threats."
        benefits={[
          'Security Assessments',
          'Threat Detection',
          'Compliance Management',
          'Identity & Access Control',
          'Security Architecture',
          'Incident Response'
        ]}
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <div className="space-y-8">
              <CaseStudyCard
                title="Enterprise Security Overhaul"
                client="Global Insurance Provider"
                description="Implemented comprehensive security infrastructure protecting sensitive customer data and ensuring regulatory compliance."
                image="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '100%', label: 'Compliance' },
                  { icon: Clock, value: '95%', label: 'Threat Detection' },
                  { icon: DollarSign, value: 'Zero', label: 'Breaches' }
                ]}
                tags={['Security', 'Compliance', 'Enterprise']}
              />

              <CaseStudyCard
                title="Zero Trust Implementation"
                client="Tech Industry Leader"
                description="Designed and implemented a zero trust security architecture for a distributed workforce environment."
                image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
                metrics={[
                  { icon: TrendingUp, value: '99.9%', label: 'Access Control' },
                  { icon: Clock, value: '90%', label: 'Risk Reduction' },
                  { icon: DollarSign, value: '60%', label: 'Incident ↓' }
                ]}
                tags={['Zero Trust', 'Access Control', 'Security']}
              />
            </div>
          </div>

          <div>
            <ContactForm serviceType="Security Solutions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityService;