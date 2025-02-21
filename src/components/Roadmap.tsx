import React, { useEffect, useRef } from 'react';
import { Lightbulb, Code2, Rocket, Shield, Users, Award } from 'lucide-react';

const roadmapSteps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Planning',
    description: 'We analyze your needs and create a comprehensive project strategy.',
    date: 'Week 1-2',
    metrics: ['Requirements Analysis', 'Technology Stack Selection', 'Timeline Planning']
  },
  {
    icon: Code2,
    title: 'Development Sprint',
    description: 'Our expert team begins building your solution with agile methodology.',
    date: 'Week 3-8',
    metrics: ['Daily Updates', 'Weekly Demos', 'Continuous Integration']
  },
  {
    icon: Shield,
    title: 'Testing & Security',
    description: 'Rigorous testing and security audits ensure quality and protection.',
    date: 'Week 9-10',
    metrics: ['Security Audits', 'Performance Testing', 'User Acceptance']
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Your solution goes live with our deployment and monitoring setup.',
    date: 'Week 11',
    metrics: ['Zero-Downtime Deploy', '24/7 Monitoring', 'Backup Systems']
  },
  {
    icon: Users,
    title: 'Training & Handover',
    description: 'We ensure your team is fully equipped to utilize the new solution.',
    date: 'Week 12',
    metrics: ['Team Training', 'Documentation', 'Knowledge Transfer']
  },
  {
    icon: Award,
    title: 'Ongoing Support',
    description: 'Continuous support and optimization for peak performance.',
    date: 'Ongoing',
    metrics: ['Regular Updates', 'Performance Reports', '24/7 Support']
  }
];

const Roadmap = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-title">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Project Roadmap
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our proven process for delivering exceptional results
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Center Line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div className="w-px h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
          </div>

          <div className="relative">
            {roadmapSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const StepIcon = step.icon;

              return (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={`timeline-item flex items-center mb-24 last:mb-0 opacity-0 ${
                    isEven ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                    <div className="w-full h-full bg-blue-500 rounded-full transform scale-0 transition-transform duration-500 timeline-node"></div>
                  </div>

                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-700">
                      {/* Decorative elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-50"></div>
                      
                      <div className="relative">
                        <div className="flex items-center mb-6">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <StepIcon className="h-7 w-7 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                            <span className="text-sm text-blue-600 font-medium">
                              {step.date}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6 text-lg">
                          {step.description}
                        </p>
                        <div className="space-y-3">
                          {step.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;