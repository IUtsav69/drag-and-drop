import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function FooterTemplate() {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Our Team', 'News']
    },
    {
      title: 'Products',
      links: ['New Arrivals', 'Best Sellers', 'Discounts', 'Collections']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'FAQs', 'Shipping Info']
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Returns Policy']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <footer className="bg-gray-900 text-white">
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold mb-3 text-gray-300">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-6 pb-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Brand
                  </span>
                </div>
                
                <div className="flex space-x-4 mb-4 md:mb-0">
                  <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Brand. All rights reserved.
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@brand.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Commerce St, New York, NY</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}