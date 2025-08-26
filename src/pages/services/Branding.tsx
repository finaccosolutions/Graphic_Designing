import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, CheckCircle, ArrowRight, Star, Palette, Target, Award, Zap } from 'lucide-react';

const Branding = () => {
  const features = [
    'Complete brand identity',
    'Logo design & variations',
    'Color palette & typography',
    'Brand guidelines document',
    'Business card design',
    'Letterhead & stationery',
    'Social media templates',
    'Brand application examples'
  ];

  const services = [
    {
      title: 'Brand Strategy',
      description: 'Define your brand positioning, values, and unique selling proposition',
      icon: <Target className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Visual Identity',
      description: 'Create cohesive visual elements that represent your brand consistently',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Brand Guidelines',
      description: 'Comprehensive documentation for consistent brand application',
      icon: <Award className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Brand Applications',
      description: 'Apply your brand across various touchpoints and materials',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business, audience, and competitive landscape'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Developing brand positioning and messaging framework'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Creating visual identity elements and brand assets'
    },
    {
      step: '04',
      title: 'Guidelines',
      description: 'Documenting brand standards and usage guidelines'
    },
    {
      step: '05',
      title: 'Implementation',
      description: 'Applying the brand across all relevant touchpoints'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-white pt-20">
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-600 mb-6">
                <Layers className="w-5 h-5 mr-2" />
                Complete Branding Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Build Your{' '}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Brand Identity
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create a cohesive and memorable brand identity that resonates with your audience and sets you apart from the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/portfolio" 
                  className="btn border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300"
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
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800"
                  alt="Brand Identity Design"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Branding Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive branding solutions that cover every aspect of your brand identity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{service.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Our Branding Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building brands that resonate and endure.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    {/* Connector dot for large screens */}
                    <div className="absolute top-8 left-1/2 w-4 h-4 bg-white border-4 border-amber-300 rounded-full transform -translate-x-1/2 hidden lg:block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Complete Brand Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to establish and maintain a consistent brand presence.
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
                <p className="font-medium text-gray-800 group-hover:text-amber-600 transition-colors">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Layers className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a powerful brand identity that connects with your audience and drives business growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-amber-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              Start Your Branding Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Branding;