import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle, ArrowRight, Star, Sparkles, Award, Zap } from 'lucide-react';

const BusinessCards = () => {
  const features = [
    'Professional design layouts',
    'Premium paper options',
    'Double-sided designs',
    'Multiple finish options',
    'QR code integration',
    'Brand-consistent styling',
    'Print-ready files',
    'Digital business cards'
  ];

  const styles = [
    {
      title: 'Classic Professional',
      description: 'Timeless designs that convey trust and reliability',
      icon: <Award className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1629832207531-2b1bcd339b0b?auto=format&fit=crop&q=80&w=600',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Modern Creative',
      description: 'Contemporary designs with bold colors and unique layouts',
      icon: <Sparkles className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&q=80&w=600',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Minimalist Clean',
      description: 'Simple, elegant designs that focus on essential information',
      icon: <Star className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Luxury Premium',
      description: 'High-end designs with special finishes and premium materials',
      icon: <Zap className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1629832207531-2b1bcd339b0b?auto=format&fit=crop&q=80&w=600',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const finishes = [
    'Matte Finish',
    'Glossy Finish',
    'Spot UV Coating',
    'Foil Stamping',
    'Embossed Details',
    'Die-Cut Shapes',
    'Textured Paper',
    'Metallic Accents'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-white pt-20">
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 mb-6">
                <CreditCard className="w-5 h-5 mr-2" />
                Business Card Design Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Business Cards
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Make a lasting first impression with professionally designed business cards that reflect your brand and help you stand out in any networking situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/portfolio" 
                  className="btn border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
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
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1629832207531-2b1bcd339b0b?auto=format&fit=crop&q=80&w=800"
                  alt="Business Card Designs"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-2xl" />
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
            <h2 className="text-4xl font-bold mb-6">Design Styles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various design styles that match your personality and professional image.
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
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Premium Finishes</h2>
              <p className="text-xl text-gray-600 mb-8">
                Elevate your business cards with premium finishes and special effects that make them truly memorable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {finishes.map((finish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-50 transition-colors group"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-pink-600 transition-colors">{finish}</span>
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
                  src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&q=80&w=800"
                  alt="Premium Business Card Finishes"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every business card project includes comprehensive design and delivery options.
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
                <p className="font-medium text-gray-800 group-hover:text-pink-600 transition-colors">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CreditCard className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make an Impression?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create business cards that represent you professionally and help you make meaningful connections.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              Start Your Business Card Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCards;