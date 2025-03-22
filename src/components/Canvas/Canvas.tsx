import React from 'react';
import { Plus, Copy, Check } from 'lucide-react';
import ViewToggle from './ViewToggle';
import LandingPageTemplate from './templates/LandingPageTemplate';
import MinimalLandingTemplate from './templates/MinimalLandingTemplate';
import { SimpleNavbar, ComplexNavbar } from './templates/NavbarTemplates';
import { GridCategory, ListCategory } from './templates/CategoryTemplates';
import { SimpleFooter, ComplexFooter } from './templates/FooterTemplates';
import DesignTemplates from '../Sidebar/DesignTemplates';

// Update the ViewMode type to match the one in ViewToggle.tsx
type ViewMode = 'desktop' | 'tablet' | 'mobile' | 'code' | 'edit';

interface CanvasProps {
  onAddBlock: () => void;
  selectedTemplate: string | null;
}

export default function Canvas({ onAddBlock, selectedTemplate }: CanvasProps) {
  const [viewMode, setViewMode] = React.useState<ViewMode>('desktop');
  const [showTemplateEditor, setShowTemplateEditor] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const getCanvasWidth = () => {
    switch (viewMode) {
      case 'mobile':
        return 'max-w-sm';
      case 'tablet':
        return 'max-w-2xl';
      case 'code':
        return 'max-w-6xl';
      default:
        return 'max-w-6xl';
    }
  };

  // Function to get the template code based on the selected template
  const getTemplateCode = () => {
    switch (selectedTemplate) {
      case 'landing-1':
        return `import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Heart, ArrowRight } from 'lucide-react';

// Landing Page Template code
export default function LandingPageTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        className="px-6 py-4 border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Navigation content */}
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero content */}
      </motion.div>

      {/* Collection Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Collection content */}
      </motion.div>
    </div>
  );
}`;
      case 'landing-2':
        return `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react';

// Minimal Landing Template code
export default function MinimalLandingTemplate() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Navigation */}
      <motion.nav 
        className="px-6 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Navigation content */}
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero content */}
      </div>

      {/* Features */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Features content */}
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Products content */}
      </motion.div>
    </div>
  );
}`;
      case 'navbar-1':
        return `import React from 'react';
import { motion } from 'framer-motion';

// Simple Navbar Template code
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
              {/* Navigation items */}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};`;
      case 'navbar-2':
        return `import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Heart, Menu, User, ChevronDown } from 'lucide-react';

// Complex Navbar Template code
export const ComplexNavbar = () => {
  return (
    <motion.nav 
      className="bg-white border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navbar content */}
    </motion.nav>
  );
};`;
      case 'category-1':
        return `import React from 'react';
import { motion } from 'framer-motion';

// Grid Category Template code
export const GridCategory = () => {
  const categories = [
    // Category items
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category content */}
      </div>
    </div>
  );
};`;
      case 'category-2':
        return `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// List Category Template code
export const ListCategory = () => {
  const categories = [
    // Category items
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category content */}
      </div>
    </div>
  );
};`;
      case 'footer-1':
        return `import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// Simple Footer Template code
export const SimpleFooter = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Footer content */}
    </motion.footer>
  );
};`;
      case 'footer-2':
        return `import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// Complex Footer Template code
export const ComplexFooter = () => {
  return (
    <motion.footer 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Footer content */}
    </motion.footer>
  );
};`;
      default:
        return 'No template selected';
    }
  };

  const handleCopyCode = () => {
    const code = getTemplateCode();
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  };

  React.useEffect(() => {
    if (viewMode === 'edit' && selectedTemplate) {
      setShowTemplateEditor(true);
    } else {
      setShowTemplateEditor(false);
    }
  }, [viewMode, selectedTemplate]);


  return (
    <div className="flex-1 bg-gray-50 h-screen overflow-auto">
      <div className="sticky top-0 z-10 bg-gray-50 p-4 flex items-center justify-between">
        <ViewToggle 
          currentView={viewMode} 
          onViewChange={setViewMode} 
          selectedTemplate={selectedTemplate} 
        />
        <button
          onClick={onAddBlock}
          className="p-2 hover:bg-gray-100 rounded-lg"
          title="Add Block"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className={`mx-auto ${getCanvasWidth()} bg-white min-h-[calc(100vh-5rem)] shadow-sm transition-all duration-300`}>
        {viewMode === 'code' ? (
          <div className="p-6 overflow-auto bg-gray-100">
            <div className="flex justify-end mb-2">
              <button 
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-gray-200 rounded text-sm transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </>
                )}
              </button>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{getTemplateCode()}</code>
            </pre>
          </div>
        ) : (
          <>
            {/* Render DesignTemplates when a template from LeftSidebar is selected */}
            {selectedTemplate && ['Pages', 'Navbar', 'Landing Page', 'Category', 'Product', 'Footer'].includes(selectedTemplate) ? (
              <DesignTemplates selectedTemplate={selectedTemplate} />
            ) : (
              <>
                {selectedTemplate === 'landing-1' && <LandingPageTemplate />}
                {selectedTemplate === 'landing-2' && <MinimalLandingTemplate />}
                {selectedTemplate === 'navbar-1' && <SimpleNavbar />}
                {selectedTemplate === 'navbar-2' && <ComplexNavbar />}
                {selectedTemplate === 'category-1' && <GridCategory />}
                {selectedTemplate === 'category-2' && <ListCategory />}
                {selectedTemplate === 'footer-1' && <SimpleFooter />}
                {selectedTemplate === 'footer-2' && <ComplexFooter />}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}