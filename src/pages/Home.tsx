import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Type, Image, Layers, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Unique and memorable logos that represent your brand identity',
    link: '/portfolio/logo',
    image: 'https://images.unsplash.com/photo-1626785774625-8a0b6e5db497?auto=format&fit=crop&q=80&w=2000',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Poster Design',
    description: 'Eye-catching posters that grab attention and deliver your message',
    link: '/portfolio/poster',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
  },
  {
    icon: <Type className="w-8 h-8" />,
    title: 'Arabic Calligraphy',
    description: 'Beautiful handwritten Arabic calligraphy for your special projects',
    link: '/portfolio/calligraphy',
    image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=2000',
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: 'Mockups',
    description: 'Professional mockups that bring your designs to life',
    link: '/portfolio/mockup',
    image: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=2000',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Branding',
    description: 'Complete branding solutions to establish your unique identity',
    link: '/portfolio/branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2000',
  },
];

const featuredProjects = [
  {
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'Arabic Typography',
    category: 'Calligraphy',
    image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'Corporate Logo Design',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'Event Poster Series',
    category: 'Poster Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'Product Packaging',
    category: 'Mockups',
    image: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'Luxury Brand Design',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806608-78638898c5b9?auto=format&fit=crop&q=80&w=2000',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-30"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2000"
          >
            <source
              src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Professional design solutions that elevate your brand and captivate your audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Start a Project
              </Link>
            </div>
          </motion.div>
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
                  className="service-card"
                >
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <p className="text-gray-600">{service.description}</p>
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

          <div className="grid grid-cols-gallery gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card-base group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-secondary">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/portfolio" className="btn btn-primary">
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
              className="btn bg-white text-primary hover:bg-opacity-90 inline-flex items-center gap-2"
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