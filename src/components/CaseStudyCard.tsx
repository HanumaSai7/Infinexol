import React from 'react';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  image: string;
  metrics: Metric[];
  tags: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  client,
  description,
  image,
  metrics,
  tags
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 bg-opacity-90"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white">{client}</h3>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
              >
                <Icon className="h-5 w-5 text-blue-600 mb-2" />
                <span className="text-lg font-bold text-gray-900">{metric.value}</span>
                <span className="text-xs text-gray-600 text-center">{metric.label}</span>
              </div>
            );
          })}
        </div>

        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;