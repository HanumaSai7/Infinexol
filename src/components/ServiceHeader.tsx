import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  icon: Icon,
  title,
  description,
  benefits,
  image
}) => {
  return (
    <div className="relative overflow-hidden bg-blue-900 py-24">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-blue-800/50 rounded-xl">
                <Icon className="h-8 w-8 text-blue-400" />
              </div>
              <h1 className="text-4xl font-bold text-white">{title}</h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:ml-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Success Rate', value: '98%' },
                    { label: 'Projects Delivered', value: '500+' },
                    { label: 'Expert Team', value: '50+' },
                    { label: 'Global Clients', value: '200+' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;