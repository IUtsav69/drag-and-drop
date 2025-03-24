import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowLeft } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PortfolioTemplate() {
  // Handle back button click
  const handleBack = () => {
    // Clear the selected template from localStorage
    localStorage.removeItem('selectedPageTemplate');
    // Navigate back or reload the page to show template selection
    window.location.reload();
  };
  
  // Sample portfolio projects
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and inventory management',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop'
    },
    {
      title: 'Travel Booking App',
      description: 'Mobile application for booking flights, hotels, and experiences with real-time availability',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    },
    {
      title: 'Financial Dashboard',
      description: 'Interactive dashboard for tracking investments, expenses, and financial goals',
      tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      title: 'Social Media Analytics',
      description: 'Tool for businesses to track and analyze their social media performance across platforms',
      tags: ['Angular', 'Python', 'Django', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <motion.button
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-4 transition-colors"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to Templates</span>
      </motion.button>
      {/* Header/Hero Section */}
      <motion.header 
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            John Anderson
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl font-light mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="John Anderson" 
                className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience building web and mobile applications. 
                I specialize in creating intuitive, responsive interfaces and robust backend systems.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My approach combines technical expertise with a strong focus on user experience, 
                ensuring that the applications I build are not only functional but also enjoyable to use.
              </p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'UI/UX Design'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="mb-4">© 2023 John Anderson. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}