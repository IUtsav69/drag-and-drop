import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PagesTemplate() {
  const navigate = useNavigate();
  
  const pages = [
    {
      id: 'dashboard',
      title: 'Dashboard Templates',
      description: 'Comprehensive analytics with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Templates',
      description: 'Intuitive user preferences and account management',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Page Templates',
      description: 'Secure login and registration flows',
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800'
    }
  ];

  const handleViewTemplate = (templateId: string) => {
    // Set the selected template in localStorage to persist across page navigation
    localStorage.setItem('selectedPageTemplate', templateId);
    
    // Navigate to the same page (which will trigger a re-render with the selected template)
    window.location.reload();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pages.map((page) => (
        <div key={page.title} className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={page.image} 
              alt={page.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{page.title}</h3>
            <p className="text-gray-600 mb-4">{page.description}</p>
            <button 
              onClick={() => handleViewTemplate(page.id)}
              className="flex items-center text-blue-600 font-medium group-hover:text-blue-800"
            >
              View Template
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );}
