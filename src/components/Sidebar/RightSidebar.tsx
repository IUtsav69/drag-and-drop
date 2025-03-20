import React from 'react';
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Type,
  PaintBucket,
} from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className="w-80 bg-white border-l border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <button className="px-4 py-1.5 text-gray-500 hover:bg-gray-100 rounded">
          Discard
        </button>
        <button className="px-4 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Position</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Alignment</label>
              <div className="flex gap-1">
                {[AlignLeft, AlignCenter, AlignRight, AlignJustify].map((Icon, i) => (
                  <button
                    key={i}
                    className="p-2 hover:bg-gray-100 rounded flex-1"
                  >
                    <Icon className="w-4 h-4 mx-auto" />
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">X</label>
                <input
                  type="number"
                  className="w-full px-3 py-1.5 border rounded"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Y</label>
                <input
                  type="number"
                  className="w-full px-3 py-1.5 border rounded"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Typography</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Font Family</label>
              <select className="w-full px-3 py-1.5 border rounded">
                <option>Poppins</option>
                <option>Arial</option>
                <option>Helvetica</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Weight</label>
                <select className="w-full px-3 py-1.5 border rounded">
                  <option>Regular</option>
                  <option>Medium</option>
                  <option>Bold</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Size</label>
                <input
                  type="number"
                  className="w-full px-3 py-1.5 border rounded"
                  placeholder="16"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Color</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Text Fill</label>
              <input
                type="color"
                className="w-full h-9 p-1 border rounded"
                defaultValue="#452313"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Background</label>
              <input
                type="color"
                className="w-full h-9 p-1 border rounded"
                defaultValue="#FFFFFF"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Stroke</label>
              <input
                type="color"
                className="w-full h-9 p-1 border rounded"
                defaultValue="#000000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}