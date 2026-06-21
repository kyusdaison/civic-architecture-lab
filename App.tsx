import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';

const WhatWeDoPage = lazy(() => import('./components/WhatWeDoPage'));
const CapabilitiesPage = lazy(() => import('./components/CapabilitiesPage'));
const CapabilityDetailPage = lazy(() => import('./components/CapabilityDetailPage'));
const InsightsPage = lazy(() => import('./components/InsightsPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteFallback: React.FC = () => <div className="min-h-[48vh]" aria-hidden="true" />;

const App: React.FC = () => (
  <LanguageProvider>
    <ScrollToTop />
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/capabilities/:slug" element={<CapabilityDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  </LanguageProvider>
);

export default App;
