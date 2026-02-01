import React from 'react';
import { images } from '../lib/images';

const destinations = [
  { id: 1, name: 'Bali, Indonesia', trips: '24 tours' },
  { id: 2, name: 'Santorini, Greece', trips: '18 tours' },
  { id: 3, name: 'Swiss Alps', trips: '12 tours' },
  { id: 4, name: 'Tokyo, Japan', trips: '20 tours' },
  { id: 5, name: 'Iceland', trips: '14 tours' },
  { id: 6, name: 'Marrakech', trips: '16 tours' },
];

const MapSection: React.FC = () => {
  return (
    <section id="destinations" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-primary-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            Where to Go
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Popular Destinations
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            From iconic cities to untouched nature—find your next escape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <a
              key={dest.id}
              href="#tours"
              className="group relative block rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 hover:border-primary-yellow/30 transition-all duration-300"
            >
              <img
                src={images.destinations[index]}
                alt={dest.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white group-hover:text-primary-yellow transition-colors">
                  {dest.name}
                </h3>
                <p className="text-sm text-white/70">{dest.trips}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
