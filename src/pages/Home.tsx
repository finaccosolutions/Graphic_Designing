import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Type, Image, Layers, CreditCard, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Unique and memorable logos that represent your brand identity',
    link: '/portfolio/logo',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=2000',
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Poster Design',
    description: 'Eye-catching posters that grab attention and deliver your message',
    link: '/portfolio/poster',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: <Type className="w-8 h-8" />,
    title: 'Arabic Calligraphy',
    description: 'Beautiful handwritten Arabic calligraphy for your special projects',
    link: '/portfolio/calligraphy',
    image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=2000',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: 'Mockups',
    description: 'Professional mockups that bring your designs to life',
    link: '/portfolio/mockup',
    image: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=2000',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Branding',
    description: 'Complete branding solutions to establish your unique identity',
    link: '/portfolio/branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2000',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Business Cards',
    description: 'Professional business card designs that make lasting impressions',
    link: '/portfolio/business-cards',
    image: 'https://images.unsplash.com/photo-1589041127168-9b1915731dc6?auto=format&fit=crop&q=80&w=2000',
    color: 'from-pink-500 to-rose-500',
  },
];

const featuredProjects = [
  {
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2000',
    color: 'from-orange-500 to-pink-500',
  },
  {
    title: 'Arabic Typography',
    category: 'Calligraphy',
    image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=2000',
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Corporate Logo Design',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=2000',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Event Poster Series',
    category: 'Poster Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Product Packaging',
    category: 'Mockups',
    image: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=2000',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Business Card Collection',
    category: 'Business Cards',
    image: 'https://images.unsplash.com/photo-1589041127168-9b1915731dc6?auto=format&fit=crop&q=80&w=2000',
    color: 'from-red-500 to-pink-500',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-dark pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">
                Crafting Digital Excellence
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                Professional design solutions that elevate your brand and captivate your audience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="btn btn-primary shine-effect">
                  View Portfolio
                </Link>
                <Link to="/contact" className="btn btn-secondary shine-effect">
                  Start a Project
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2000"
                alt="Design Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elevate your brand with our comprehensive design solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="service-card group h-[400px]"
                >
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 transition-opacity duration-300 group-hover:opacity-90`} />
                  </div>
                  <div className="service-card-content group-hover:translate-y-[-8px]">
                    <div className="text-white mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-100">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest and most impactful design work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card hover-lift"
              >
                <div className="relative h-[400px] overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image h-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`} />
                  <div className="project-card-overlay">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200">{project.category}</p>
                      <button className="mt-4 px-6 py-2 rounded-full bg-white text-dark font-medium hover:bg-opacity-90 transition-all duration-300">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/portfolio" className="btn btn-primary shine-effect">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Let's create something amazing together. Get in touch with us today!
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-opacity-90 inline-flex items-center gap-2 shine-effect"
            >
              <Send className="w-5 h-5" />
              <span>Get Started</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;