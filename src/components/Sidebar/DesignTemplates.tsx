import React from 'react';
import { ChevronRight, Search, ShoppingCart, User, Menu, Star, Heart, Share2, Clock, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

interface DesignTemplatesProps {
  selectedTemplate: string | null;
}

export default function DesignTemplates({ selectedTemplate }: DesignTemplatesProps) {
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Pages':
        return <PagesTemplate />;
      case 'Navbar':
        return <NavbarTemplate />;
      case 'Landing Page':
        return <LandingPageTemplate />;
      case 'Category':
        return <CategoryTemplate />;
      case 'Product':
        return <ProductTemplate />;
      case 'Footer':
        return <FooterTemplate />;
      default:
        return <div>Select a template</div>;
    }
  };

  return (
    <div className="p-6">
      {selectedTemplate ? (
        <>
          <h2 className="text-2xl font-semibold mb-6">{selectedTemplate} Templates</h2>
          {renderTemplate()}
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to DashStack</h2>
          <p className="text-gray-600 mb-6">Select a template category from the sidebar to get started</p>
        </div>
      )}
    </div>
  );
}

function PagesTemplate() {
  const pages = [
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800'
    },
    {
      title: 'User Settings',
      description: 'Intuitive user preferences and account management',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800'
    },
    {
      title: 'Authentication',
      description: 'Secure login and registration flows',
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800'
    }
  ];

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
            <button className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
              View Template
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function NavbarTemplate() {
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

function LandingPageTemplate() {
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

function CategoryTemplate() {
  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800',
      items: '238 items'
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800',
      items: '156 items'
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800',
      items: '324 items'
    },
    {
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800',
      items: '195 items'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {categories.map((category) => (
        <div key={category.name} className="group relative overflow-hidden rounded-xl cursor-pointer">
          <div className="aspect-[4/3] relative">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-white/80">{category.items}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductTemplate() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div className="space-y-4">
          <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <button key={i} className="aspect-square rounded-lg bg-gray-50 p-2 hover:ring-2 ring-blue-500 transition-all">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200"
                  alt={`Product view ${i + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                New Arrival
              </span>
              <span className="text-green-600 text-sm font-medium">In Stock</span>
            </div>
            <h2 className="text-3xl font-bold">Premium Wireless Headphones</h2>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(128 reviews)</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-3xl font-bold text-blue-600">$299.99</p>
            <p className="text-gray-600 leading-relaxed">
              Experience premium sound quality with our latest wireless headphones. 
              Featuring active noise cancellation, premium materials, and up to 30 hours of battery life.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <div className="flex items-center space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Add to Cart
              </button>
              <button className="p-4 text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-gray-50">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-4 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Fast Delivery
              </div>
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Free Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterTemplate() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <footer className="px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Brand
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Empowering your digital journey with innovative solutions and exceptional experiences.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <LinkedIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                123 Business Ave, Suite 100
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                contact@example.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">
              © 2025 Brand. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}