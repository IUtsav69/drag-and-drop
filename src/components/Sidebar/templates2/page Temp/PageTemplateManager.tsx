import React, { useEffect, useState } from 'react';
import DashboardTemplate from './DashboardTemplate';
import EcommerceTemplate from './EcommerceTemplate';
import PortfolioTemplate from './PortfolioTemplate';

export default function PageTemplateManager() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  useEffect(() => {
    // Get the selected template from localStorage
    const storedTemplate = localStorage.getItem('selectedPageTemplate');
    if (storedTemplate) {
      setSelectedTemplate(storedTemplate);
    }
  }, []);

  // Render the appropriate template based on the selection
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'dashboard':
        return <DashboardTemplate />;
      case 'ecommerce':
        return <EcommerceTemplate />;
      case 'portfolio':
        return <PortfolioTemplate />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-8">
              <h2 className="text-2xl font-semibold mb-4">No Template Selected</h2>
              <p className="text-gray-600">Please select a template from the Pages section</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full">
      {renderTemplate()}
    </div>
  );
}