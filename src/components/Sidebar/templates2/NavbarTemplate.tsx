import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export default function NavbarTemplate() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Brand
              </span>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
              <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}