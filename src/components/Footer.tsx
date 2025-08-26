import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Naqaad</h3>
            <p className="text-gray-400">
              Professional graphic design solutions for your brand. Creating unique and memorable designs that make your business stand out.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Logo Design</li>
              <li>Poster Making</li>
              <li>Branding</li>
              <li>Arabic Calligraphy</li>
              <li>Mockups</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>officialnaqaad@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>Contact us for inquiries</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Naqaad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;