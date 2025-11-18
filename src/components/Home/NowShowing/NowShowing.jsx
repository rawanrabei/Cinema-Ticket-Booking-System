import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';

const NowShowing = () => {
  const movies = [
    {
      id: 1,
      title: 'The Dark Knight',
      genre: 'Action, Thriller',
      duration: '152 min',
      rating: 9.0,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    },
    {
      id: 2,
      title: 'Inception',
      genre: 'Sci-Fi, Thriller',
      duration: '148 min',
      rating: 8.8,
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    },
    {
      id: 3,
      title: 'Interstellar',
      genre: 'Sci-Fi, Drama',
      duration: '169 min',
      rating: 8.6,
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80',
    },
    {
      id: 4,
      title: 'The Matrix',
      genre: 'Action, Sci-Fi',
      duration: '136 min',
      rating: 8.7,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe0e0] overflow-hidden">
      <div className="absolute -left-20 top-10 w-72 h-72 bg-[#FF0800]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -right-32 bottom-0 w-80 h-80 bg-[#FF0800]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.4em] text-gray-900 ">
              Now Showing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF0800]  mb-2">
              Book your tickets for these blockbusters
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover curated picks playing this week – premium seats, immersive sound, and unforgettable stories.
            </p>
          </div>
          <Link
            to="/movies"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 text-gray-800 font-semibold shadow-md bg-white hover:border-[#FF0800] hover:text-[#FF0800] hover:bg-transparent transition-all duration-300"
          >
            View All
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="group relative flex flex-col h-full bg-white/90 backdrop-blur rounded-[28px] border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-[#FF0800] font-semibold">
                    ▶
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow-lg">
                  <FaStar className="text-[#FFBF00]" />
                  <span>{movie.rating}</span>
                </div>
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#FF0800] transition-colors duration-300">
                    {movie.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {movie.genre.split(',').map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#FF0800]/10 group-hover:text-[#FF0800] transition-colors duration-300"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaClock className="text-[#FF0800]" />
                  <span>{movie.duration}</span>
                </div>
                <button
                  type="button"
                  className="w-full mt-2 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 border-2 border-transparent bg-[#FF0800] hover:bg-transparent hover:text-[#FF0800] hover:border-[#FF0800] shadow"
                 
                >
                  Book Ticket
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowShowing;

