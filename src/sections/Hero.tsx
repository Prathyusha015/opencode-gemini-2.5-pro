import React from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 p-8 bg-black bg-opacity-30 backdrop-blur-md rounded-xl border border-primary-yellow border-opacity-20 max-w-2xl mx-4">
        <h1 className="text-5xl font-bold mb-6 text-primary-yellow">
          Discover Incredible Journeys
        </h1>
        
        <p className="text-xl mb-8 text-white opacity-80">
          Embark on unforgettable adventures around the world. Explore hidden gems, experience diverse cultures, and create memories that last a lifetime.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Button>Explore Tours</Button>
          <Button variant="secondary">Plan Custom Trip</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;