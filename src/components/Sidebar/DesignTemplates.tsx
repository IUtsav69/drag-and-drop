import React from 'react';

// Import templates from templates2 folder
import PagesTemplate from './templates2/PagesTemplate';
import NavbarTemplate from './templates2/NavbarTemplate';
import LandingPageTemplate from './templates2/LandingPageTemplate';
import CategoryTemplate from './templates2/CategoryTemplate';
import ProductTemplate from './templates2/ProductTemplate';
import FooterTemplate from './templates2/FooterTemplate';
import PageTemplateManager from './templates2/page Temp/PageTemplateManager';

interface DesignTemplatesProps {
  selectedTemplate: string | null;
}

export default function DesignTemplates({ selectedTemplate }: DesignTemplatesProps) {
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Pages':
        // Check if there's a selected page template in localStorage
        const storedTemplate = localStorage.getItem('selectedPageTemplate');
        return storedTemplate ? <PageTemplateManager /> : <PagesTemplate />;
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