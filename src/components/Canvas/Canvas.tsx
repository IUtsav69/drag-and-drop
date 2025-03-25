import React from 'react';
import { Plus, Copy, Check } from 'lucide-react';
import ViewToggle from './ViewToggle';
import LandingPageTemplate from './templates/LandingPageTemplate';
import MinimalLandingTemplate from './templates/MinimalLandingTemplate';
import { SimpleNavbar, ComplexNavbar } from './templates/NavbarTemplates';
import { GridCategory, ListCategory } from './templates/CategoryTemplates';
import { SimpleFooter, ComplexFooter } from './templates/FooterTemplates';
import DesignTemplates from '../Sidebar/DesignTemplates';

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
        return `yet i need to upload code`;
      case 'landing-2':
        return `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

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
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-light tracking-wider">MINIMAL</h1>
          <div className="flex items-center space-x-8">
            {['Shop', 'Collection', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-light leading-tight mb-6">
              Minimal Design,
              <br />
              Maximum Impact
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Discover our curated collection of minimalist fashion pieces designed for the modern individual.
            </p>
            <motion.button
              className="bg-black text-white px-8 py-3 rounded-none inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=800&h=1000&fit=crop"
              alt="Minimal Fashion"
              className="w-full h-[600px] object-cover"
            />
            <motion.div
              className="absolute -left-8 -bottom-8 bg-white p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-sm text-gray-500 mb-2">New Collection</p>
              <h3 className="text-xl font-medium">Spring Essentials</h3>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: 'Curated Selection', desc: 'Handpicked items for quality' },
              { icon: Star, title: 'Premium Quality', desc: 'Finest materials and craftsmanship' },
              { icon: TrendingUp, title: 'Trending Styles', desc: 'Always ahead in fashion' }
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 inline-block p-4 bg-gray-50 rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-light mb-8">Featured Products</h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop"
          ].map((src, index) => (
            <motion.div
              key={src}
              className="group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt="Product"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg mb-1">Essential {index + 1}</h3>
                <p className="text-gray-600">$199</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}`;
      case 'navbar-1':
        return `yet i need to upload code`;
      case 'navbar-2':
        return `yet i need to upload code`;
      case 'category-1':
        return `yet i need to upload code`;
      case 'category-2':
        return `yet i need to upload code`;
      case 'footer-1':
        return `yet i need to upload code`;
      case 'footer-2':
        return `yet i need to upload code`;
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
