import React from 'react';
import { X } from 'lucide-react';

interface BlocksPanelProps {
  onClose: () => void;
  onSelectTemplate: (templateId: string) => void;
}

const blockCategories = [
  {
    name: 'Landing Page',
    templates: [
      { 
        id: 'landing-1',
        image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=500&h=300&fit=crop',
        title: 'Fashion Landing Page'
      },
      { 
        id: 'landing-2',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop',
        title: 'Minimal Landing Page'
      },
    ],
  },
  {
    name: 'Navbar',
    templates: [
      { 
        id: 'navbar-1',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
        title: 'Simple Navigation'
      },
      { 
        id: 'navbar-2',
        image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=500&h=300&fit=crop',
        title: 'Complex Navigation'
      },
    ],
  },
  {
    name: 'Category',
    templates: [
      { 
        id: 'category-1',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
        title: 'Grid Category'
      },
      { 
        id: 'category-2',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=300&fit=crop',
        title: 'List Category'
      },
    ],
  },
  {
    name: 'Footer',
    templates: [
      { 
        id: 'footer-1',
        image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&h=300&fit=crop',
        title: 'Simple Footer'
      },
      { 
        id: 'footer-2',
        image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&h=300&fit=crop',
        title: 'Complex Footer'
      },
    ],
  },
];

export default function BlocksPanel({ onClose, onSelectTemplate }: BlocksPanelProps) {
  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Blocks</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4">
        {blockCategories.map((category) => (
          <div key={category.name} className="mb-6">
            <h3 className="text-sm font-medium mb-3">{category.name}</h3>
            <div className="grid gap-3">
              {category.templates.map((template) => (
                <div
                  key={template.id}
                  className="border rounded-lg overflow-hidden cursor-pointer hover:border-blue-500 transition-colors"
                  onClick={() => {
                    onSelectTemplate(template.id);
                    onClose();
                  }}
                >
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-2 text-sm text-gray-600">{template.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}