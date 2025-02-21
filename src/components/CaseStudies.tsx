import React, { useRef, useEffect } from 'react';
import { TrendingUp, Clock, DollarSign, Truck, Route, PenTool as Tool } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Risk Assessment Platform',
    industry: 'Banking',
    client: 'Leading Banks',
    description: 'Developed an AI-driven risk assessment system that processes loan applications in real-time.',
    results: [
      { icon: TrendingUp, metric: '85%', description: 'Faster loan processing' },
      { icon: Clock, metric: '60%', description: 'Reduction in manual reviews' },
      { icon: DollarSign, metric: '$2.5M', description: 'Annual cost savings' }
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Adaptive Learning Platform',
    industry: 'EduTech',
    client: 'EdTech Leaders',
    description: 'Created an AI-powered adaptive learning system that personalizes education paths.',
    results: [
      { icon: TrendingUp, metric: '45%', description: 'Improved completion rates' },
      { icon: Clock, metric: '2x', description: 'Faster skill acquisition' },
      { icon: DollarSign, metric: '1M+', description: 'Active students' }
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Asset Management Solutions',
    industry: 'Financial Services',
    client: 'Global Asset Managers',
    description: 'Implemented comprehensive asset management platform with real-time portfolio tracking and analytics.',
    results: [
      { icon: TrendingUp, metric: '99.9%', description: 'System uptime' },
      { icon: Clock, metric: '75%', description: 'Faster reporting' },
      { icon: DollarSign, metric: '$5M', description: 'Cost optimization' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'E-Commerce Platform Transformation',
    industry: 'Retail',
    client: 'Leading Retailers',
    description: 'Built scalable e-commerce platform with advanced personalization and real-time inventory management.',
    results: [
      { icon: TrendingUp, metric: '300%', description: 'Revenue growth' },
      { icon: Clock, metric: '50ms', description: 'Response time' },
      { icon: DollarSign, metric: '40%', description: 'Cart conversion' }
    ],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Supply Chain Management System',
    industry: 'Logistics',
    client: 'Global Enterprises',
    description: 'Revolutionized supply chain operations through AI-powered optimization and real-time tracking.',
    results: [
      { icon: Truck, metric: '30%', description: 'Logistics optimization' },
      { icon: Route, metric: '45%', description: 'Route efficiency' },
      { icon: Tool, metric: '$2.5M', description: 'Annual savings' }
    ],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  }
];

const CaseStudies = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);
  const currentScrollPosition = useRef(0);
  const activeIndex = useRef(0);

  const getCardWidth = (container: HTMLDivElement): number => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      return 600; // md:w-[600px]
    }
    if (windowWidth >= 640) {
      return 400; // sm:w-[400px]
    }
    return container.offsetWidth * 0.85; // 85vw for mobile
  };

  const snapToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth(container);
    const newScrollLeft = index * (cardWidth + 24); // 24px is the gap
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
    
    activeIndex.current = index;
    updateScrollIndicators(index);
  };

  const updateScrollIndicators = (index: number) => {
    const dots = document.querySelectorAll('.scroll-indicator');
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('bg-blue-600');
        dot.classList.remove('bg-blue-200');
      } else {
        dot.classList.remove('bg-blue-600');
        dot.classList.add('bg-blue-200');
      }
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartTime.current = Date.now();
      currentScrollPosition.current = container.scrollLeft;
      
      // Prevent default to avoid Chrome pull-to-refresh
      if (container.scrollLeft <= 0 && e.touches[0].clientY < e.touches[0].clientX) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX.current) return;
      
      const touchX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchX;
      
      // Add resistance at the edges
      if (
        (container.scrollLeft <= 0 && deltaX < 0) ||
        (container.scrollLeft >= container.scrollWidth - container.clientWidth && deltaX > 0)
      ) {
        container.scrollLeft += deltaX * 0.3; // Add resistance
      } else {
        container.scrollLeft += deltaX;
      }
      
      touchStartX.current = touchX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime.current;
      const deltaScroll = container.scrollLeft - currentScrollPosition.current;
      
      // Calculate velocity (pixels per millisecond)
      const velocity = Math.abs(deltaScroll / touchDuration);
      
      // Determine direction
      const direction = deltaScroll > 0 ? 1 : -1;
      
      // If the swipe was fast enough, move to next/previous card
      if (velocity > 0.5) {
        const targetIndex = direction > 0 
          ? Math.min(activeIndex.current + 1, caseStudies.length - 1)
          : Math.max(activeIndex.current - 1, 0);
        snapToCard(targetIndex);
      } else {
        // Otherwise snap to nearest card
        const cardWidth = getCardWidth(container);
        const nearestIndex = Math.round(container.scrollLeft / (cardWidth + 24));
        snapToCard(nearestIndex);
      }

      touchStartX.current = 0;
      touchStartTime.current = 0;
    };

    const handleScroll = () => {
      const cardWidth = getCardWidth(container);
      const index = Math.round(container.scrollLeft / (cardWidth + 24));
      if (index !== activeIndex.current) {
        activeIndex.current = index;
        updateScrollIndicators(index);
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results from real clients across the globe
          </p>
        </div>

        <div className="relative">
          {/* Scroll indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Mobile scroll hint */}
          <div className="md:hidden text-center text-sm text-gray-500 mb-4">
            Swipe to see more stories
          </div>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 flex gap-6 no-scrollbar"
            style={{ 
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="flex-none w-[85vw] sm:w-[400px] md:w-[600px] transform transition-transform duration-300 ease-out"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="h-full bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48 sm:h-64">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 bg-opacity-90">
                          {study.industry}
                        </span>
                      </div>
                      <div className="font-medium text-lg text-white">{study.client}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-2 text-sm sm:text-base">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex flex-col items-center p-2 sm:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                          <result.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mb-2" />
                          <span className="text-base sm:text-lg font-bold text-gray-900">{result.metric}</span>
                          <span className="text-xs sm:text-sm text-gray-600 text-center">{result.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll progress dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => snapToCard(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 scroll-indicator ${
                  index === 0 ? 'bg-blue-600' : 'bg-blue-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;