import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const SimpleFooter = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {['New Arrivals', 'Bestsellers', 'Women', 'Men'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              {['FAQs', 'Shipping', 'Returns', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {['Our Story', 'Careers', 'Press', 'Blog'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Simple Footer. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export const ComplexFooter = () => {
  return (
    <motion.footer 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Newsletter Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-3">Subscribe to our newsletter</h3>
            <p className="text-gray-600 mb-6">Get the latest updates on new products and upcoming sales</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                className="px-6 py-2 bg-black text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Complex</h2>
            <p className="text-gray-600 mb-6">
              Crafting the future of fashion with sustainable and stylish pieces for the modern wardrobe.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-black transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {['New Arrivals', 'Bestsellers', 'Women', 'Men', 'Accessories', 'Sale'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-black"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-4">
              {['Track Order', 'Returns & Exchanges', 'Shipping Information', 'Size Guide', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-600 hover:text-black"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>123 Fashion Street, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>support@complex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; 2025 Complex Footer. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                href="#"
                className="text-gray-600 hover:text-black"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-600 hover:text-black"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};