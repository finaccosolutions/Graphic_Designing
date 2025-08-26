import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Type, Image, Layers, CreditCard, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 8 }).map((_, i) => ({
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: i * 0.5,
  }));

  return (
    <>
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="floating-bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </>
  );
};

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Unique and memorable logos that represent your brand identity',
    link: '/services/logo-design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Poster Design',
    description: 'Eye-catching posters that grab attention and deliver your message',
    link: '/services/poster-design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: <Type className="w-8 h-8" />,
    title: 'Arabic Calligraphy',
    description: 'Beautiful handwritten Arabic calligraphy for your special projects',
    link: '/services/arabic-calligraphy',
    image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: 'Mockups',
    description: 'Professional mockups that bring your designs to life',
    link: '/services/mockups',
    image: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Branding',
    description: 'Complete branding solutions to establish your unique identity',
    link: '/services/branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Business Cards',
    description: 'Professional business card designs that make lasting impressions',
    link: '/services/business-cards',
    image: 'https://images.unsplash.com/photo-1629832207531-2b1bcd339b0b?auto=format&fit=crop&q=80&w=800',
    color: 'from-pink-500 to-rose-500',
  },
];

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-white">
        <div className="hero-pattern absolute inset-0 opacity-5" />
        <FloatingBubbles />
        
        {/* Additional animated shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                Professional Design Solutions
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-dark">
                Create Your{' '}
                <span className="gradient-text">Perfect Design</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-600">
                Professional design solutions that elevate your brand and captivate your audience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/portfolio" 
                  className="btn btn-primary shine-effect flex items-center justify-center gap-2 group"
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="btn bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors shine-effect"
                >
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
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8">
                <img
                  src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Creative Design Process"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
                
                {/* Geometric Shapes */}
                <div className="absolute top-0 right-0 w-20 h-20 border-4 border-primary/20 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-4 border-secondary/20 transform -translate-x-1/2 translate-y-1/2 rotate-45" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 right-20 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-secondary/20 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-bounce" style={{ animationDuration: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
              Our Services
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Design Solutions for{' '}
              <span className="gradient-text">Every Need</span>
            </h2>
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
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{service.description}</p>
                    <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                  
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10" />
        <div className="hero-pattern absolute inset-0 opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white text-primary mb-6">
              Get Started Today
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{' '}
              <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Let's create something amazing together. Get in touch with us today!
            </p>
            <Link
              to="/contact"
              className="btn btn-primary shine-effect inline-flex items-center gap-2 group"
            >
              <Send className="w-5 h-5" />
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;