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
        return `import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Heart, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Wearvia</h1>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              placeholder="Search Wearvia"
              className="px-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 hover:text-blue-500 transition-colors cursor-pointer" />
              <Heart className="w-5 h-5 hover:text-red-500 transition-colors cursor-pointer" />
              <ShoppingCart className="w-5 h-5 hover:text-green-500 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Categories */}
      <motion.div 
        className="flex justify-center space-x-8 py-4 border-b"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {['Men', 'Women', 'Kids', 'Beauty', 'Accessories', 'Explore'].map((item) => (
          <motion.button
            key={item}
            variants={fadeIn}
            className="text-gray-600 hover:text-black transition-colors"
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-6xl font-serif mb-4">
              Experience the <span className="text-orange-500">Art</span>
              <br />
              of <span className="text-orange-500">Fine Fashion</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">Discover the latest trends in fashion</p>
            <motion.button
              className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&h=700&fit=crop",
              "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&h=700&fit=crop",
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=700&fit=crop"
            ].map((src, index) => (
              <motion.div
                key={src}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt="Fashion"
                  className="w-full h-[500px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Collection Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-8 text-center">Top Collection</h3>
        <motion.div 
          className="grid grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=300&h=400&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=400&fit=crop",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop"
          ].map((src, index) => (
            <motion.div
              key={src}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt="Collection"
                className="w-full h-80 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}`;
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
