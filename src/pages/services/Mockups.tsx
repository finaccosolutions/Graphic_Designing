import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image, CheckCircle, ArrowRight, Star, Monitor, Smartphone, Package } from 'lucide-react';

const Mockups = () => {
  const features = [
    'Photorealistic presentations',
    'Multiple angle variations',
    'High-resolution outputs',
    'Smart object integration',
    'Professional lighting',
    'Customizable backgrounds',
    'Brand-ready formats',
    'Quick turnaround'
  ];

  const types = [
    {
      title: 'Digital Mockups',
      description: 'Websites, apps, and digital interfaces in realistic device frames',
      icon: <Monitor className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=600',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Mobile Mockups',
      description: 'Smartphone and tablet presentations for app and mobile designs',
      icon: <Smartphone className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Product Mockups',
      description: 'Packaging, labels, and product presentations in real environments',
      icon: <Package className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=600',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Print Mockups',
      description: 'Business cards, brochures, and print materials in context',
      icon: <Star className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&q=80&w=600',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white pt-20">
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 mb-6">
                <Image className="w-5 h-5 mr-2" />
                Mockup Design Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Mockups
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bring your designs to life with photorealistic mockups that showcase your work in the best possible light and help clients visualize the final result.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/portfolio" 
                  className="btn border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300"
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
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=800"
                  alt="Professional Mockups"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Types of Mockups</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital interfaces to physical products, we create mockups that make your designs shine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${type.color}`}>
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                  <p className="text-white/90">{type.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Mockups</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-quality mockups that elevate your designs and impress your clients.
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
                className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Showcase Your Work?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create stunning mockups that bring your designs to life and impress your audience.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              Start Your Mockup Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mockups;