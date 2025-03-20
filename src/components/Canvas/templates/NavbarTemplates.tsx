import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Heart, Menu, User, ChevronDown } from 'lucide-react';

export const SimpleNavbar = () => {
  return (
    <motion.nav 
      className="bg-white border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Simple</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-black"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export const ComplexNavbar = () => {
  return (
    <motion.nav 
      className="bg-white border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {/* Top bar */}
          <div className="flex justify-between py-2 border-b">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">USD</span>
              <span className="text-sm text-gray-500">EN</span>
            </div>
            <div className="flex items-center space-x-4">
              <User className="w-4 h-4" />
              <Heart className="w-4 h-4" />
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
          
          {/* Main navbar */}
          <div className="flex justify-between items-center py-4">
            <div className="flex-1 flex items-center">
              <Menu className="w-6 h-6 mr-4" />
              <div className="hidden lg:flex items-center space-x-8">
                {['Women', 'Men', 'Kids'].map((item) => (
                  <motion.div
                    key={item}
                    className="relative group"
                    whileHover={{ y: -2 }}
                  >
                    <button className="flex items-center space-x-1">
                      <span>{item}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Complex</h1>
            </div>
            
            <div className="flex-1 flex items-center justify-end">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};