import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeaturedTours from './sections/FeaturedTours';
import MapSection from './sections/MapSection';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeaturedTours />
        <MapSection />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default App;
