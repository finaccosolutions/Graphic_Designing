import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2 hover-lift">
              <Palette className="h-8 w-8 text-primary animate-float" />
              <span className="text-2xl font-bold text-white">DesignNest</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-8"
            >
              <Link
                to="/"
                className={`text-lg ${isActive('/') ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className={`text-lg ${isActive('/portfolio') ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="btn btn-primary hover-glow shine-effect"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-sm rounded-2xl mt-2"
            >
              <div className="px-4 py-4 space-y-3">
                <Link
                  to="/"
                  className={`block px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive('/') ? 'bg-primary/20 text-primary' : 'text-white hover:bg-primary/10 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/portfolio"
                  className={`block px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive('/portfolio') ? 'bg-primary/20 text-primary' : 'text-white hover:bg-primary/10 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;