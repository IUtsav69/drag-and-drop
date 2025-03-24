import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoryTemplate() {
  const categories = [
    {
      title: 'Summer Collection',
      description: 'Explore our latest summer styles and trends',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800'
    },
    {
      title: 'Winter Essentials',
      description: 'Stay warm with our premium winter collection',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800'
    },
    {
      title: 'Accessories',
      description: 'Complete your look with our stylish accessories',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800'
    },
    {
      title: 'Footwear',
      description: 'Step out in style with our premium footwear collection',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <div key={category.title} className="group bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-3 text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <button className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}