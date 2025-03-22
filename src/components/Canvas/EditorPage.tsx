import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RightSidebar from '../Sidebar/RightSidebar';
import ViewToggle from './ViewToggle';
import LandingPageTemplate from './templates/LandingPageTemplate';
import MinimalLandingTemplate from './templates/MinimalLandingTemplate';
import { SimpleNavbar, ComplexNavbar } from './templates/NavbarTemplates';
import { GridCategory, ListCategory } from './templates/CategoryTemplates';
import { SimpleFooter, ComplexFooter } from './templates/FooterTemplates';

export default function EditorPage() {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile' | 'code' | 'edit'>('desktop');

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-50 overflow-auto">
        <div className="sticky top-0 z-10 bg-gray-50 p-4 flex items-center justify-between">
          <ViewToggle 
            currentView={viewMode} 
            onViewChange={setViewMode} 
          />
        </div>
        <div className={`mx-auto bg-white min-h-[calc(100vh-5rem)] shadow-sm ${
          viewMode === 'desktop' ? 'max-w-6xl' : 
          viewMode === 'tablet' ? 'max-w-md' : 
          viewMode === 'mobile' ? 'max-w-sm' : 
          'max-w-6xl'
        }`}>
          {templateId === 'landing-1' && <LandingPageTemplate />}
          {templateId === 'landing-2' && <MinimalLandingTemplate />}
          {templateId === 'navbar-1' && <SimpleNavbar />}
          {templateId === 'navbar-2' && <ComplexNavbar />}
          {templateId === 'category-1' && <GridCategory />}
          {templateId === 'category-2' && <ListCategory />}
          {templateId === 'footer-1' && <SimpleFooter />}
          {templateId === 'footer-2' && <ComplexFooter />}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}