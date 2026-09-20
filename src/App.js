import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import CertificationsSection from "./components/CertificationsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import PrivacyPolicy from './components/PrivacyPolicy.js';
import CookieBanner from './components/CookieBanner.js';
import CookiePolicy from './components/CookiePolicy.js';
import ScrollToTop from './utils/ScrollToTop.js';

import './App.css';

function HomePage() {
  return (
    <main className="main-content" id="home">
      <LandingSection />

      <section id='certifications-section'>
        <CertificationsSection />
      </section>

      <div className="projects-section" id="projects">
        <ProjectsSection />
      </div>
    </main>
  );
}

function App() {
  return (
    <Router
        future ={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <ScrollToTop />
      <div className="app-layout">
        <Header />
        <Routes>
          <Route path="/" element={
            <HomePage />
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />

        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
