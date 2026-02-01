import React from 'react';
import Button from '../components/Button';
import { images } from '../lib/images';

const tours = [
  {
    id: 1,
    title: 'Tropical Paradise',
    description: 'Pristine beaches, palm trees, and crystal-clear waters. Perfect for sun-seekers and snorkeling.',
    price: 1299,
    duration: '7 Days',
    image: images.tours.tropical,
    tag: 'Beach',
  },
  {
    id: 2,
    title: 'Mountain Explorer',
    description: 'Trek through alpine trails and wake up to breathtaking peaks. For hikers and nature lovers.',
    price: 1599,
    duration: '10 Days',
    image: images.tours.mountain,
    tag: 'Adventure',
  },
  {
    id: 3,
    title: 'Cultural Heritage',
    description: 'Ancient temples, local traditions, and UNESCO sites. Immerse yourself in history and culture.',
    price: 1099,
    duration: '5 Days',
    image: images.tours.cultural,
    tag: 'Culture',
  },
];

const FeaturedTours: React.FC = () => {
  return (
    <section id="tours" className="py-20 px-4 bg-primary-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-primary-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            Curated Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Tours
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Hand-picked itineraries designed to show you the best of each destination.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-yellow/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-yellow/5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-yellow/90 text-primary-black text-xs font-semibold">
                  {tour.tag}
                </span>
                <span className="absolute bottom-4 left-4 text-white font-semibold">
                  {tour.duration}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {tour.title}
                </h3>
                <p className="text-white/70 text-sm mb-5 line-clamp-2">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-yellow">
                      ${tour.price}
                    </span>
                    <span className="text-white/60 text-sm ml-1">per person</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
