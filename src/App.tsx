import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AIMLService from './pages/AIMLService';
import CloudService from './pages/CloudService';
import StaffingService from './pages/StaffingService';
import ConsultingService from './pages/ConsultingService';
import DevOpsService from './pages/DevOpsService';
import SecurityService from './pages/SecurityService';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <CaseStudies />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/ai-ml" element={<AIMLService />} />
            <Route path="/services/cloud" element={<CloudService />} />
            <Route path="/services/staffing" element={<StaffingService />} />
            <Route path="/services/consulting" element={<ConsultingService />} />
            <Route path="/services/devops" element={<DevOpsService />} />
            <Route path="/services/security" element={<SecurityService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;