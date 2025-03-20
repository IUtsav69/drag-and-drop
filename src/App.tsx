import React, { useState } from 'react';
import LeftSidebar from './components/Sidebar/LeftSidebar';
import Canvas from './components/Canvas/Canvas';
import RightSidebar from './components/Sidebar/RightSidebar';
import BlocksPanel from './components/BlocksPanel/BlocksPanel';

function App() {
  const [showBlocksPanel, setShowBlocksPanel] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <Canvas 
        onAddBlock={() => setShowBlocksPanel(true)} 
        selectedTemplate={selectedTemplate}
      />
      <RightSidebar />
      {showBlocksPanel && (
        <BlocksPanel 
          onClose={() => setShowBlocksPanel(false)}
          onSelectTemplate={handleTemplateSelect}
        />
      )}
    </div>
  );
}

export default App;