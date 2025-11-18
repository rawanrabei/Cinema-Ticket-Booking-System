import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFilm, FaGift, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const fullText = "tarts Here";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, fullText]);

  return (
    <section className="relative w-full h-[650px] md:h-[720px] lg:h-[820px] overflow-hidden">
      {/* Background Image with Lighter Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/15 to-black/10 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background%20photo/cinema%20main%20photo.jpeg)"
        }}
      ></div>
      
      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15 z-[15]"></div>
      
      {/* Content */}
      <div className="relative z-20 w-full px-4 md:px-10 h-full flex items-start py-14 md:py-20">
        <div className="w-full max-w-3xl text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 text-white text-xs font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#FF0800' }}>
              Now Showing
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-relaxed text-shadow-lg text-gray-900">
            Your Next Movie Night
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed" style={{ color: '#FF0800' }}>
            S<span className="inline-block min-w-[2ch]">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-700 leading-loose font-medium max-w-2xl">
            Experience cinema like never before. Book your tickets, choose your perfect seats, and enjoy the magic of movies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/movies"
              className="group px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:bg-transparent hover:border-2 hover:border-white transform"
              style={{ backgroundColor: '#FF0800' }}
            >
              <FaFilm className="text-base" />
              <span>Browse Movies</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/offers"
              className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 hover:bg-transparent hover:text-white hover:border-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-sm"
            >
              <FaGift className="text-base" />
              <span>Special Offers</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#FF0800' }}>
          <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: '#FF0800' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

