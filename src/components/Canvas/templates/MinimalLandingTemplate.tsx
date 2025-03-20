import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function MinimalLandingTemplate() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Navigation */}
      <motion.nav 
        className="px-6 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-light tracking-wider">MINIMAL</h1>
          <div className="flex items-center space-x-8">
            {['Shop', 'Collection', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-light leading-tight mb-6">
              Minimal Design,
              <br />
              Maximum Impact
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Discover our curated collection of minimalist fashion pieces designed for the modern individual.
            </p>
            <motion.button
              className="bg-black text-white px-8 py-3 rounded-none inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=800&h=1000&fit=crop"
              alt="Minimal Fashion"
              className="w-full h-[600px] object-cover"
            />
            <motion.div
              className="absolute -left-8 -bottom-8 bg-white p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-sm text-gray-500 mb-2">New Collection</p>
              <h3 className="text-xl font-medium">Spring Essentials</h3>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: 'Curated Selection', desc: 'Handpicked items for quality' },
              { icon: Star, title: 'Premium Quality', desc: 'Finest materials and craftsmanship' },
              { icon: TrendingUp, title: 'Trending Styles', desc: 'Always ahead in fashion' }
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 inline-block p-4 bg-gray-50 rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-light mb-8">Featured Products</h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop"
          ].map((src, index) => (
            <motion.div
              key={src}
              className="group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt="Product"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg mb-1">Essential {index + 1}</h3>
                <p className="text-gray-600">$199</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}