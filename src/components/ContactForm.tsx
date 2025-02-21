import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  serviceType: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ serviceType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Discuss Your {serviceType} Requirements
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            id="company"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
            Project Requirements
          </label>
          <textarea
            name="requirements"
            id="requirements"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.requirements}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget Range
            </label>
            <select
              name="budget"
              id="budget"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select a range</option>
              <option value="10-50k">$10,000 - $50,000</option>
              <option value="50-100k">$50,000 - $100,000</option>
              <option value="100-500k">$100,000 - $500,000</option>
              <option value="500k+">$500,000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
              Expected Timeline
            </label>
            <select
              name="timeline"
              id="timeline"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Select timeline</option>
              <option value="1-3">1-3 months</option>
              <option value="3-6">3-6 months</option>
              <option value="6-12">6-12 months</option>
              <option value="12+">12+ months</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Request
          <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;