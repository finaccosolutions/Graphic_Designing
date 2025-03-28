import React from 'react';
import { motion } from 'framer-motion';
import { Palette, PenTool, Image, Layout, Type, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <PenTool />, title: 'Logo Design', description: 'Unique and memorable logos that represent your brand' },
  { icon: <Layout />, title: 'Poster Design', description: 'Eye-catching posters for events and promotions' },
  { icon: <Type />, title: 'Arabic Calligraphy', description: 'Beautiful handwritten Arabic calligraphy' },
  { icon: <Image />, title: 'Mockups', description: 'Realistic mockups for your products and branding' },
  { icon: <Layers />, title: 'Branding', description: 'Complete branding solutions for your business' },
];

const featuredProjects = [
  {
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Arabic Typography',
    category: 'Calligraphy',
    image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Corporate Logo Design',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bringing Your Vision to Life
            </h1>
            <p className="text-xl mb-8">
              Professional graphic design solutions for your brand
            </p>
            <Link to="/contact" className="btn btn-primary text-lg">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover-scale"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="card overflow-hidden hover-scale"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;