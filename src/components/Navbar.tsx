import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Code2, Brain, Cloud, Users, ChevronDown, Workflow, Shield, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerButton = document.getElementById('hamburger-button');
      
      if (mobileMenu && hamburgerButton && 
          !mobileMenu.contains(event.target as Node) && 
          !hamburgerButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { name: 'AI/ML Development', href: '/services/ai-ml', icon: Brain },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud },
    { name: 'Augmented Staffing', href: '/services/staffing', icon: Users },
    { name: 'Technical Consulting', href: '/services/consulting', icon: Code2 },
    { name: 'DevOps Excellence', href: '/services/devops', icon: Workflow },
    { name: 'Security Solutions', href: '/services/security', icon: Shield }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Infinexol</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* What We Do Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                  isActive('/services')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                What We Do
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown menu */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute left-0 w-72 mt-1 bg-white rounded-lg shadow-lg py-2 z-50 transform transition-all duration-200 ease-out"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className={`flex items-center px-4 py-3 transition-colors ${
                        isActive(service.href)
                          ? 'bg-blue-50 text-blue-600'
                          : 'hover:bg-blue-50'
                      }`}
                    >
                      <service.icon className={`h-5 w-5 mr-3 ${
                        isActive(service.href) ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <div>
                        <p className={`text-sm font-medium ${
                          isActive(service.href) ? 'text-blue-600' : 'text-gray-900'
                        }`}>{service.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Who We Are
            </Link>

            {/* We're Hiring Button */}
            <Link
              to="/careers"
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 animate-pulse"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              We're Hiring!
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              id="hamburger-button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } fixed top-16 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          {/* What We Do Section */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 rounded-md transition-colors"
            >
              What We Do
              <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`space-y-1 mt-2 transition-all duration-200 ease-in-out ${isServicesOpen ? 'block' : 'hidden'}`}>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className={`flex items-center px-3 py-2 text-base font-medium pl-6 rounded-md transition-colors ${
                    isActive(service.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <service.icon className={`h-5 w-5 mr-3 ${
                    isActive(service.href) ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive('/about')
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Who We Are
          </Link>

          {/* Mobile We're Hiring Button */}
          <Link
            to="/careers"
            className="flex items-center mx-2 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
          >
            <Briefcase className="h-4 w-4 mr-2" />
            We're Hiring!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;