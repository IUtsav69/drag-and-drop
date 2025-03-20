import React from 'react';
import { Plus } from 'lucide-react';
import ViewToggle from './ViewToggle';
import LandingPageTemplate from './templates/LandingPageTemplate';
import MinimalLandingTemplate from './templates/MinimalLandingTemplate';
import { SimpleNavbar, ComplexNavbar } from './templates/NavbarTemplates';
import { GridCategory, ListCategory } from './templates/CategoryTemplates';
import { SimpleFooter, ComplexFooter } from './templates/FooterTemplates';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

interface CanvasProps {
  onAddBlock: () => void;
  selectedTemplate: string | null;
}

export default function Canvas({ onAddBlock, selectedTemplate }: CanvasProps) {
  const [viewMode, setViewMode] = React.useState<ViewMode>('desktop');

  const getCanvasWidth = () => {
    switch (viewMode) {
      case 'mobile':
        return 'max-w-sm';
      case 'tablet':
        return 'max-w-2xl';
      default:
        return 'max-w-6xl';
    }
  };

  return (
    <div className="flex-1 bg-gray-50 h-screen overflow-auto">
      <div className="sticky top-0 z-10 bg-gray-50 p-4 flex items-center justify-between">
        <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
        <button
          onClick={onAddBlock}
          className="p-2 hover:bg-gray-100 rounded-lg"
          title="Add Block"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className={`mx-auto ${getCanvasWidth()} bg-white min-h-[calc(100vh-5rem)] shadow-sm transition-all duration-300`}>
        {selectedTemplate === 'landing-1' && <LandingPageTemplate />}
        {selectedTemplate === 'landing-2' && <MinimalLandingTemplate />}
        {selectedTemplate === 'navbar-1' && <SimpleNavbar />}
        {selectedTemplate === 'navbar-2' && <ComplexNavbar />}
        {selectedTemplate === 'category-1' && <GridCategory />}
        {selectedTemplate === 'category-2' && <ListCategory />}
        {selectedTemplate === 'footer-1' && <SimpleFooter />}
        {selectedTemplate === 'footer-2' && <ComplexFooter />}
      </div>
    </div>
  );
}