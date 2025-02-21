import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Users,
  Workflow,
  Shield,
  Code,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'AI/ML Development', href: '/services/ai-ml', icon: Brain },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud },
    { name: 'Augmented Staffing', href: '/services/staffing', icon: Users },
    { name: 'Technical Consulting', href: '/services/consulting', icon: Code },
    { name: 'DevOps Excellence', href: '/services/devops', icon: Workflow },
    { name: 'Security Solutions', href: '/services/security', icon: Shield }
  ];

  const locations = [
    {
      city: 'Hyderabad',
      address: 'Infinexol, Krishe Emerald, Ground floor, Kondapur Main Road',
      area: 'Laxmi Cyber City, Whitefields, Kondapur',
      postal: 'Hyderabad, Telangana 500081'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Instagram', href: '#', icon: Instagram }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/infinexol-logo.png" alt="Infinexol" className="h-8" />
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering businesses with cutting-edge technology solutions for digital transformation and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <service.icon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  {locations.map((location) => (
                    <div key={location.city}>
                      <p className="text-white font-medium">{location.city}</p>
                      <p className="text-gray-400">{location.address}</p>
                      <p className="text-gray-400">{location.area}</p>
                      <p className="text-gray-400">{location.postal}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:info@infonexol.com"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@infonexol.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Infinexol. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;