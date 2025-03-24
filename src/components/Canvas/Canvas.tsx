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
        return `yet i need to upload code`;
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