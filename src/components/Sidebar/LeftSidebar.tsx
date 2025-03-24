import React from 'react';
import { LayoutTemplate, Navigation, Home, Battery as Category, Package, FilterIcon as FooterIcon } from 'lucide-react';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { label: 'Pages', icon: <LayoutTemplate className="w-4 h-4" /> },
  { label: 'Navbar', icon: <Navigation className="w-4 h-4" /> },
  { label: 'Landing Page', icon: <Home className="w-4 h-4" /> },
  { label: 'Category', icon: <Category className="w-4 h-4" /> },
  { label: 'Product', icon: <Package className="w-4 h-4" /> },
  { label: 'Footer', icon: <FooterIcon className="w-4 h-4" /> },
];

interface LeftSidebarProps {
  onSelectTemplate: (template: string) => void;
  selectedTemplate: string | null;
}

export default function LeftSidebar({ onSelectTemplate, selectedTemplate }: LeftSidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-4 border-b border-gray-200 flex justify-center">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          DashStack
        </h1>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-4">Untitled</p>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center w-full px-3 py-2 rounded-md mb-1 ${
                selectedTemplate === item.label
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onSelectTemplate(item.label)}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
