import React, { useState } from 'react';
import { Calendar, Clock, Mail, Phone, MessageSquare, Building, Users, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    country: '',
    message: '',
    date: '',
    time: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute of ['00', '30']) {
        const time = `${hour.toString().padStart(2, '0')}:${minute}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let current = new Date(today);
    
    while (dates.length < 14) {
      if (current.getDay() !== 0 && current.getDay() !== 6) { // Skip weekends
        dates.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    
    return dates;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Let's Talk About Your Project</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule a call with our experts to discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="text"
                          id="name"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="email"
                          id="email"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company Name *
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="text"
                          id="company"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                        <Building className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-gray-700">
                        Number of Employees
                      </label>
                      <div className="mt-1 relative">
                        <select
                          id="employees"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.employees}
                          onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        >
                          <option value="">Select range</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501+">501+</option>
                        </select>
                        <Users className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country *
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="text"
                          id="country"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        />
                        <Globe className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Tell Us About Your Project</h2>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Project Details *
                    </label>
                    <div className="mt-1 relative">
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      <MessageSquare className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Schedule Call */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Schedule a Call</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Preferred Date *
                      </label>
                      <div className="mt-1 relative">
                        <select
                          id="date"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        >
                          <option value="">Select date</option>
                          {getAvailableDates().map((date) => (
                            <option key={date.toISOString()} value={date.toISOString().split('T')[0]}>
                              {date.toLocaleDateString('en-US', { 
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </option>
                          ))}
                        </select>
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                        Preferred Time * ({formData.timezone})
                      </label>
                      <div className="mt-1 relative">
                        <select
                          id="time"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        >
                          <option value="">Select time</option>
                          {generateTimeSlots().map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Schedule Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;