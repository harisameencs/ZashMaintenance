import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Add custom styles to the body
  useEffect(() => {
    document.body.classList.add('font-sans', 'text-gray-800');
    return () => {
      document.body.classList.remove('font-sans', 'text-gray-800');
    };
  }, []);

  // Simple router logic
  const getPage = () => {
    if (currentPath === '/') {
      return <HomePage />;
    } else if (currentPath === '/services') {
      return <ServicesPage />;
    } else if (currentPath === '/contact') {
      return <ContactPage />;
    } else if (currentPath === '/about') {
      return <AboutPage />;
    } else if (currentPath.startsWith('/services/')) {
      const serviceId = currentPath.split('/services/')[1];
      return <ServiceDetailPage serviceId={serviceId} />;
    } else {
      return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {getPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;