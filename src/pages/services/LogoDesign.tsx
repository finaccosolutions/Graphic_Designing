import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenTool, CheckCircle, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

const LogoDesign = () => {
  const features = [
    'Unique and memorable designs',
    'Multiple concept variations',
    'Vector files (AI, EPS, SVG)',
    'High-resolution formats',
    'Brand guidelines included',
    'Unlimited revisions',
    'Commercial usage rights',
    'Fast turnaround time'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your brand, values, and target audience to create the perfect foundation.',
      icon: <Users className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Concept',
      description: 'Multiple creative concepts are developed based on your requirements and feedback.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Refinement',
      description: 'We refine the chosen concept with your input until it perfectly represents your brand.',
      icon: <Award className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final logo delivered in all formats with comprehensive brand guidelines.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const portfolio = [
    {
      title: 'Tech Startup Logo',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
      category: 'Technology'
    },
    {
      title: 'Restaurant Brand',
      image: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&q=80&w=600',
      category: 'Food & Beverage'
    },
    {
      title: 'Fashion Brand',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600',
      category: 'Fashion'
    },
    {
      title: 'Healthcare Logo',
      image: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&q=80&w=600',
      category: 'Healthcare'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-orange-50 to-white pt-20">
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-rose-200/30 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-orange-100 text-rose-600 mb-6">
                <PenTool className="w-5 h-5 mr-2" />
                Logo Design Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Create Your Perfect{' '}
                <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  Logo
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stand out from the competition with a unique, memorable logo that perfectly represents your brand identity and values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:shadow-lg hover:shadow-rose-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/portfolio" 
                  className="btn border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-100 to-orange-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
                  alt="Logo Design Process"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-orange-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-rose-400/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive logo design package includes everything you need to establish a strong brand presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-medium text-gray-800 group-hover:text-rose-600 transition-colors">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your logo perfectly captures your brand essence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-rose-500">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-rose-500 transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Recent Logo Designs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our latest logo design projects across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-rose-500 transition-colors">{item.title}</h3>
                    <p className="text-gray-600">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Star className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Logo?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's design a logo that perfectly represents your brand and helps you stand out from the competition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-rose-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              Start Your Logo Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LogoDesign;