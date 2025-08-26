import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Type, CheckCircle, ArrowRight, Star, Heart, BookOpen, Award } from 'lucide-react';

const ArabicCalligraphy = () => {
  const features = [
    'Traditional and modern styles',
    'Custom Arabic text design',
    'High-resolution artwork',
    'Multiple format delivery',
    'Calligraphy guidelines',
    'Cultural authenticity',
    'Personalized approach',
    'Expert craftsmanship'
  ];

  const styles = [
    {
      title: 'Naskh Style',
      description: 'Classic, readable style perfect for formal documents and books',
      icon: <BookOpen className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=600',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Thuluth Style',
      description: 'Elegant, decorative style ideal for titles and artistic pieces',
      icon: <Award className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Diwani Style',
      description: 'Ornate, flowing style perfect for certificates and invitations',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=600',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Modern Arabic',
      description: 'Contemporary interpretations blending tradition with innovation',
      icon: <Star className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const applications = [
    'Wedding invitations',
    'Religious texts',
    'Corporate branding',
    'Wall art and decor',
    'Book covers',
    'Certificates',
    'Logo design',
    'Digital artwork'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white pt-20">
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 mb-6">
                <Type className="w-5 h-5 mr-2" />
                Arabic Calligraphy Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Beautiful{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Arabic Calligraphy
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your Arabic text into stunning works of art with traditional and contemporary calligraphy styles that honor the beauty of the Arabic script.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/portfolio" 
                  className="btn border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
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
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=800"
                  alt="Arabic Calligraphy Art"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Calligraphy Styles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from traditional and modern Arabic calligraphy styles, each with its unique character and beauty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {styles.map((style, index) => (
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
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${style.color}`}>
                    {style.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{style.title}</h3>
                  <p className="text-white/90">{style.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Perfect For</h2>
              <p className="text-xl text-gray-600 mb-8">
                Arabic calligraphy adds elegance and cultural authenticity to various applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{app}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800"
                  alt="Arabic Calligraphy Applications"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
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
              Every calligraphy project is crafted with attention to detail and cultural authenticity.
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
                <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Type className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Art?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's transform your Arabic text into beautiful calligraphy that honors tradition while meeting modern needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group mr-4"
            >
              Start Your Calligraphy Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              Call for Quote: +91 85 90000 761
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArabicCalligraphy;