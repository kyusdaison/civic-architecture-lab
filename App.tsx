import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import WhatWeDoPage from './components/WhatWeDoPage';
import CapabilitiesPage from './components/CapabilitiesPage';
import CapabilityDetailPage from './components/CapabilityDetailPage';
import InsightsPage from './components/InsightsPage';
import ContactPage from './components/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => (
  <LanguageProvider>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/capabilities/:slug" element={<CapabilityDetailPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  </LanguageProvider>
);

export default App;
