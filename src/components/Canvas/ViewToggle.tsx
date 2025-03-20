import React from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
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
    </div>
  );
}