import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-dark/95 text-white sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">DesignNest</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg hover:text-primary transition-colors ${
                isActive('/') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`text-lg hover:text-primary transition-colors ${
                isActive('/portfolio') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'text-primary' : 'text-gray-300 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/portfolio') ? 'text-primary' : 'text-gray-300 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary-dark"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;