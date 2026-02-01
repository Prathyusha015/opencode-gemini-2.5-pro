import React, { useState } from 'react';
import Button from '../components/Button';
import { images } from '../lib/images';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We’ll send travel inspiration to ${email}`);
    setEmail('');
  };

  return (
    <section
      id="newsletter"
      className="relative py-20 px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${images.newsletterBg})`,
        }}
      />
      <div className="absolute inset-0 bg-primary-black/85" />

      <div className="relative z-10 container mx-auto max-w-2xl text-center">
        <p className="text-primary-yellow font-semibold text-sm uppercase tracking-widest mb-2">
          Stay in the Loop
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get Travel Inspiration
        </h2>
        <p className="text-white/80 mb-8">
          Join our newsletter for destination guides, exclusive deals, and tips from fellow travelers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-yellow focus:ring-1 focus:ring-primary-yellow transition-colors"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
