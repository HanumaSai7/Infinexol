import React, { useState } from 'react';
import { 
  Briefcase, Code2, Brain, Cloud, Database, Shield,
  GitBranch, Terminal, Globe, Server, Monitor, Cpu
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  icon: any;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    id: 'swe-001',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Singapore / Remote',
    type: 'Full-time',
    experience: '5+ years',
    icon: Code2,
    description: 'Join our core engineering team to build scalable enterprise solutions using cutting-edge technologies.',
    requirements: [
      "Bachelor\u2019s degree in Computer Science or related field",
      'Strong experience with React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure/GCP)',
      'Strong understanding of software design patterns',
      'Experience with microservices architecture',
      'Excellent problem-solving skills'
    ],
    responsibilities: [
      'Design and implement scalable software solutions',
      'Lead technical design discussions and code reviews',
      'Mentor junior developers',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable, and well-tested code'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Remote work flexibility',
      'Health and dental insurance',
      'Professional development budget',
      'Annual learning allowance'
    ]
  },
  {
    id: 'ml-001',
    title: 'Machine Learning Engineer',
    department: 'AI/ML',
    location: 'Singapore',
    type: 'Full-time',
    experience: '3+ years',
    icon: Brain,
    description: 'Build and deploy machine learning models to solve complex business problems.',
    requirements: [
      "Master\u2019s degree in Computer Science, AI, or related field",
      'Strong experience with Python and ML frameworks',
      'Deep understanding of machine learning algorithms',
      'Experience with deep learning frameworks',
      'Knowledge of MLOps practices'
    ],
    responsibilities: [
      'Develop and deploy ML models',
      'Optimize model performance and accuracy',
      'Work with data scientists to implement solutions',
      'Maintain ML infrastructure',
      'Research and implement new ML techniques'
    ],
    benefits: [
      'Competitive salary package',
      'Research publication support',
      'Conference attendance sponsorship',
      'High-performance computing resources',
      'Flexible working hours'
    ]
  },
  {
    id: 'devops-001',
    title: 'Senior DevOps Engineer',
    department: 'Infrastructure',
    location: 'Singapore / Remote',
    type: 'Full-time',
    experience: '4+ years',
    icon: Server,
    description: 'Lead our infrastructure and deployment automation initiatives.',
    requirements: [
      'Strong experience with Kubernetes and Docker',
      'Expertise in CI/CD pipelines',
      'Knowledge of Infrastructure as Code',
      'Cloud platform expertise (AWS/Azure/GCP)',
      'Security best practices understanding'
    ],
    responsibilities: [
      'Design and implement CI/CD pipelines',
      'Manage cloud infrastructure',
      'Optimize deployment processes',
      'Implement monitoring solutions',
      'Ensure system reliability and security'
    ],
    benefits: [
      'Competitive compensation',
      'Remote work options',
      'Health coverage',
      'Professional certifications support',
      'Regular team events'
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
    linkedin: ''
  });

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
      portfolio: '',
      linkedin: ''
    });
    setShowApplicationForm(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Build the future of enterprise technology with us. We're looking for passionate individuals who love solving complex problems.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <job.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="mt-1 flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleApply(job)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>

                  <p className="mt-4 text-gray-600">{job.description}</p>

                  <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Apply for {selectedJob.title}</h2>
                  <p className="text-gray-600 mt-1">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                  />
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
                    Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;