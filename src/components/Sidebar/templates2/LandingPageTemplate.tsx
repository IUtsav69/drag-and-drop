import React from 'react';

export default function LandingPageTemplate() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative min-h-[600px] bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Digital Experience
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Create stunning websites with our powerful platform. Built for developers, designed for success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}