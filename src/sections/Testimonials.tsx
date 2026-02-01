import React from 'react';
import { images } from '../lib/images';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    quote:
      'An incredible journey that exceeded all my expectations. The guides were knowledgeable and every detail was taken care of.',
    location: 'New York, USA',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    quote:
      'The cultural immersion was mind-blowing. I came back with a new perspective and memories I’ll treasure forever.',
    location: 'London, UK',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophie Chen',
    quote:
      'Every moment was magical. From the landscapes to the local food—truly an exceptional travel experience.',
    location: 'Singapore',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-primary-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-primary-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            Real Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Travelers Say
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Join thousands of happy adventurers who’ve explored the world with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary-yellow/20 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-primary-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={images.avatars[index]}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-yellow/50"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/60">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
