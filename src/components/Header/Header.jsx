import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaSearch, 
  FaHome, 
  FaFilm, 
  FaMapMarkerAlt, 
  FaGift, 
  FaUtensils, 
  FaInfoCircle, 
  FaPhone,
  FaQuestionCircle,
  FaEnvelope,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/movies', label: 'Movies', icon: FaFilm },
    { path: '/cinemas', label: 'Cinemas', icon: FaMapMarkerAlt },
    { path: '/snacks', label: 'Food & Drinks', icon: FaUtensils },
    { path: '/offers', label: 'Offers', icon: FaGift }
  ];

  return (
    <header className="bg-gray-900/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-2xl border-b border-gray-800/50">
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:bg-red-500/30 transition-all duration-300"></div>
              <FaFilm className="relative text-2xl md:text-2xl text-red-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Star
              </span>
              <span className="text-lg md:text-xl font-bold" style={{ color: '#FF0800' }}>
                View
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-all duration-300 transform ${
                    active 
                      ? 'bg-red-500 text-white font-semibold shadow-lg scale-105' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/80 hover:scale-105'
                  }`}
                >
                  <Icon 
                    className={`text-base transition-all duration-300 ${
                      active ? 'text-white' : 'text-gray-400 group-hover:text-red-400'
                    }`}
                  />
                  <span className={`transition-colors duration-300 ${
                    active ? 'text-white' : 'group-hover:text-red-400'
                  }`}>
                    {link.label}
                  </span>
                  {active && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <FaSearch className="absolute left-3 text-gray-400 z-10 text-sm" />
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300 w-56 hover:bg-gray-800"
              />
            </div>

            {/* Utility Icons */}
            <div className="hidden md:flex items-center gap-1.5">
              <Link
                to="/about"
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-300 text-sm"
                title="About Us"
              >
                <FaInfoCircle />
              </Link>
              <Link
                to="/contact"
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-300 text-sm"
                title="Contact"
              >
                <FaPhone />
              </Link>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-300 text-sm"
                title="Toggle Theme"
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            {/* Profile Button */}
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-sm bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-red-500 hover:bg-gray-700/80 rounded-lg transition-all duration-300 group transform hover:scale-105"
            >
              <FaUser className="text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
              <span className="text-white group-hover:text-red-400 transition-colors duration-300 font-medium">Profile</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-300"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-700 mt-4 pt-4">
            {/* Mobile Search */}
            <div className="mb-4 flex items-center relative">
              <FaSearch className="absolute left-3 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-300 ${
                      active 
                        ? 'bg-red-500 text-white font-semibold' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon 
                      className={`text-base transition-colors duration-300 ${
                        active ? 'text-white' : 'text-gray-400'
                      }`}
                    />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Utility Icons */}
              <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-700 mt-2 pt-2">
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all text-sm"
                  title="About Us"
                >
                  <FaInfoCircle />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all text-sm"
                  title="Contact"
                >
                  <FaPhone />
                </Link>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all text-sm"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
              </div>

              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 rounded-lg transition-all mt-2"
              >
                <FaUser />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
