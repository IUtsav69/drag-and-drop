import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

export default function ProductTemplate() {
  const products = [
    {
      id: 1,
      name: 'Classic White Tee',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800',
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800',
      rating: 4.8,
      reviews: 94
    },
    {
      id: 3,
      name: 'Leather Backpack',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800',
      rating: 4.2,
      reviews: 76
    },
    {
      id: 4,
      name: 'Casual Sneakers',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800',
      rating: 4.6,
      reviews: 112
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">${product.price}</span>
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}