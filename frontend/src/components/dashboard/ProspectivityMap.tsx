import React from 'react';
import { Layers, Plus, Minus, Maximize, Map as MapIcon } from 'lucide-react';

const ProspectivityMap = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl flex flex-col h-full min-h-[400px] shadow-lg shadow-black/20 overflow-hidden group">
      <div className="p-4 border-b border-border flex items-center justify-between bg-card z-20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Prospectivity Map</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-not-allowed" title="Layers">
            <Layers size={16} />
          </button>
        </div>
      </div>
      
      {/* Map Canvas Area */}
      <div className="flex-1 relative flex items-center justify-center bg-gray-50 dark:bg-[#080d14] bg-grid-pattern overflow-hidden">
        
        {/* Subtle background glow for empty state */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
           <div className="w-96 h-96 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
        </div>

        {/* Empty State Card */}
        <div className="flex flex-col items-center text-center z-10 max-w-sm p-8 bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="relative mb-5">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-75"></div>
            <div className="relative p-4 bg-gray-50 dark:bg-gray-900 border border-border rounded-full">
              <MapIcon size={32} className="text-blue-500 dark:text-blue-400" />
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Awaiting Map Data</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Connect exploration models and geospatial layers to visualize manganese prospectivity zones.
          </p>
        </div>

        {/* Map Controls */}
        <div className="absolute right-4 bottom-4 flex flex-col gap-2 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col bg-gray-50 dark:bg-gray-900/90 backdrop-blur border border-border rounded-lg overflow-hidden shadow-lg">
            <button className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 cursor-not-allowed transition-colors border-b border-border">
              <Plus size={16} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 cursor-not-allowed transition-colors">
              <Minus size={16} />
            </button>
          </div>
          <button className="w-9 h-9 bg-gray-50 dark:bg-gray-900/90 backdrop-blur border border-border rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 cursor-not-allowed transition-colors shadow-lg mt-1">
            <Maximize size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProspectivityMap;
