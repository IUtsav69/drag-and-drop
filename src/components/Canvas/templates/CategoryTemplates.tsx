import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const GridCategory = () => {
  const categories = [
    {
      title: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop",
      items: "2,345 items"
    },
    {
      title: "Men's Collection",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&h=500&fit=crop",
      items: "1,892 items"
    },
    {
      title: "Accessories",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&h=500&fit=crop",
      items: "987 items"
    },
    {
      title: "Footwear",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      items: "1,234 items"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Shop by Category</h2>
          <p className="text-gray-600">Discover our wide range of categories</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          animate="animate"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-80">{category.items}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const ListCategory = () => {
  const categories = [
    {
      title: "New Arrivals",
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200&h=400&fit=crop",
      description: "Discover the latest fashion trends"
    },
    {
      title: "Summer Collection",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=400&fit=crop",
      description: "Light and breathable summer styles"
    },
    {
      title: "Autumn Essentials",
      image: "https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=1200&h=400&fit=crop",
      description: "Cozy and stylish autumn wear"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Featured Categories</h2>
          <p className="text-gray-600">Explore our seasonal collections</p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="initial"
          animate="animate"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <motion.button
                    className="flex items-center space-x-2 text-blue-600 group"
                    whileHover={{ x: 10 }}
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};