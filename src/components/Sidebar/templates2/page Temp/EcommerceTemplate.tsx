import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ChevronRight, Filter, ArrowUpDown, ArrowLeft } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function EcommerceTemplate() {
  // Handle back button click
  const handleBack = () => {
    // Clear the selected template from localStorage
    localStorage.removeItem('selectedPageTemplate');
    // Navigate back or reload the page to show template selection
    window.location.reload();
  };
  
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      rating: 4.8,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      price: 299.99,
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
    }
  ];

  const categories = [
    'Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports', 'Books', 'Toys', 'Automotive'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <motion.button
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-4 transition-colors"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to Templates</span>
      </motion.button>
      <motion.header 
        className="bg-white shadow-sm py-4 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">ShopHub</h1>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search products..." className="w-64 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div className="mb-8 overflow-x-auto pb-2 flex space-x-4" initial="initial" animate="animate">
          {categories.map((category, index) => (
            <motion.button 
              key={index} 
              className="px-4 py-2 bg-white shadow rounded-full border text-gray-700 hover:bg-blue-500 hover:text-white transition"
              variants={fadeIn}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" variants={staggerContainer}>
          {products.map(product => (
            <motion.div key={product.id} className="bg-white p-4 shadow rounded-lg" variants={fadeIn}>
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className="flex items-center mt-2">
                {[...Array(Math.round(product.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500" />
                ))}
                <span className="ml-2 text-gray-500">({product.reviews})</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add to Cart</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
