import React from 'react';
import { Monitor, Smartphone, Tablet, Code, Pencil} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ViewMode = 'desktop' | 'tablet' | 'mobile' | 'code' | 'edit';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  selectedTemplate?: string | null;
}

export default function ViewToggle({ currentView, onViewChange, selectedTemplate }: ViewToggleProps) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
      <button
        onClick={() => onViewChange('desktop')}
        className={`p-2 rounded ${
          currentView === 'desktop' ? 'bg-gray-100' : 'hover:bg-gray-50'
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewChange('tablet')}
        className={`p-2 rounded ${
          currentView === 'tablet' ? 'bg-gray-100' : 'hover:bg-gray-50'
        }`}
      >
        <Tablet className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewChange('mobile')}
        className={`p-2 rounded ${
          currentView === 'mobile' ? 'bg-gray-100' : 'hover:bg-gray-50'
        }`}
      >
        <Smartphone className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewChange('code')}
        className={`p-2 rounded ${
          currentView === 'code' ? 'bg-gray-100' : 'hover:bg-gray-50'
        }`}
      >
        <Code className="w-4 h-4" />
      </button>
      {selectedTemplate && (
        <button
          onClick={() => {
            window.open(`/edit/${selectedTemplate}`, '_blank');
          }}
          className="p-2 rounded hover:bg-gray-50"
          title="Open in new tab"
        >
          <Pencil className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}