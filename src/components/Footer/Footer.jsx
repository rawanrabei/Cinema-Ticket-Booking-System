import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/movies', label: 'Movies' },
    { path: '/cinemas', label: 'Cinemas' },
    { path: '/offers', label: 'Offers' }
  ];

  const supportLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/booking', label: 'Book Tickets' },
    { path: '/snacks', label: 'Snacks & Drinks' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold" style={{ color: '#FF0800' }}>StarView</div>
              <span className="text-white text-sm">Cinema</span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              Experience the magic of cinema with the latest blockbusters, premium comfort, and state-of-the-art technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#1F2937' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF0800'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1F2937'}
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#1F2937' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF0800'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1F2937'}
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#1F2937' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF0800'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1F2937'}
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#1F2937' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF0800'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1F2937'}
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 transition-colors text-sm hover:opacity-80"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => e.target.style.color = '#FF0800'}
                    onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 transition-colors text-sm hover:opacity-80"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => e.target.style.color = '#FF0800'}
                    onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: '#FF0800' }} />
                <span className="text-gray-400 text-sm">
                  123 Cinema Street, Entertainment District, City 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0" style={{ color: '#FF0800' }} />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0" style={{ color: '#FF0800' }} />
                <span className="text-gray-400 text-sm">info@starviewcinema.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} StarView Cinema. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                to="/" 
                className="text-gray-400 transition-colors hover:opacity-80"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => e.target.style.color = '#FF0800'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/" 
                className="text-gray-400 transition-colors hover:opacity-80"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => e.target.style.color = '#FF0800'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

