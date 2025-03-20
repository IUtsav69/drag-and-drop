import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Heart, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPageTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        className="px-6 py-4 border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Wearvia</h1>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              placeholder="Search Wearvia"
              className="px-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 hover:text-blue-500 transition-colors cursor-pointer" />
              <Heart className="w-5 h-5 hover:text-red-500 transition-colors cursor-pointer" />
              <ShoppingCart className="w-5 h-5 hover:text-green-500 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Categories */}
      <motion.div 
        className="flex justify-center space-x-8 py-4 border-b"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {['Men', 'Women', 'Kids', 'Beauty', 'Accessories', 'Explore'].map((item) => (
          <motion.button
            key={item}
            variants={fadeIn}
            className="text-gray-600 hover:text-black transition-colors"
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-6xl font-serif mb-4">
              Experience the <span className="text-orange-500">Art</span>
              <br />
              of <span className="text-orange-500">Fine Fashion</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">Discover the latest trends in fashion</p>
            <motion.button
              className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&h=700&fit=crop",
              "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&h=700&fit=crop",
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=700&fit=crop"
            ].map((src, index) => (
              <motion.div
                key={src}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt="Fashion"
                  className="w-full h-[500px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Collection Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-8 text-center">Top Collection</h3>
        <motion.div 
          className="grid grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=300&h=400&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=400&fit=crop",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop"
          ].map((src, index) => (
            <motion.div
              key={src}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt="Collection"
                className="w-full h-80 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}