import React from "react";
import { FaTicketAlt, FaStar } from "react-icons/fa";

const ExperienceHighlight = () => {
  return (
    <section className="bg-gradient-to-r from-white via-rose-50 to-red-50/80 py-16 md:py-20 border-t border-b border-red-100 my-16 md:my-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-6">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-red-500 bg-white shadow-sm">
          <FaStar className="text-red-400" /> Premium Experience
        </p>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready for Your Next
          </h2>
          <h3
            className="text-3xl md:text-4xl font-bold mt-2"
            style={{ color: "#FF0800" }}
          >
            Cinema Experience?
          </h3>
        </div>

        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Book your tickets now, select the perfect seats, and unlock exclusive
          member rewards with every visit. Enjoy premium comfort, gourmet
          treats, and immersive sound that brings every story to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 bg-[#FF0800] text-white border-2 border-[#FF0800] hover:bg-transparent hover:text-[#FF0800]"
          >
            <FaTicketAlt />
            Book Tickets Now
          </button>

          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-800 bg-white shadow-sm transition-all duration-300 hover:bg-transparent hover:border-red-500 hover:text-red-500"
          >
            <FaStar />
            Join Rewards Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlight;
