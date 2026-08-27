import React from 'react';
import { Layers, Plus, Minus, Maximize, Map as MapIcon } from 'lucide-react';

const ProcurementRiskMap = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl flex flex-col h-full min-h-[400px] shadow-lg shadow-black/20 overflow-hidden group">
      <div className="p-4 border-b border-border flex items-center justify-between bg-card z-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Procurement Risk Map</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-not-allowed">
            <Layers size={16} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative flex items-center justify-center bg-gray-50 dark:bg-[#080d14] bg-grid-pattern overflow-hidden">
        
        <div className="flex flex-col items-center text-center z-10 max-w-sm p-8 bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl shadow-xl">
          <div className="p-4 bg-gray-100 dark:bg-gray-900 border border-border rounded-full mb-4">
            <MapIcon size={32} className="text-amber-500/50" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">No risk data available</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Risk visualization will appear once procurement and location data are connected.
          </p>
        </div>

        <div className="absolute right-4 bottom-4 flex flex-col gap-2 z-10">
          <div className="flex flex-col bg-gray-50 dark:bg-gray-900/90 backdrop-blur border border-border rounded-lg overflow-hidden shadow-lg">
            <button className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-not-allowed transition-colors border-b border-border">
              <Plus size={16} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-not-allowed transition-colors">
              <Minus size={16} />
            </button>
          </div>
          <button className="w-9 h-9 bg-gray-50 dark:bg-gray-900/90 backdrop-blur border border-border rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-not-allowed transition-colors shadow-lg mt-1">
            <Maximize size={16} />
          </button>
        </div>

        <div className="absolute left-4 bottom-4 bg-gray-50 dark:bg-gray-900/90 backdrop-blur border border-border rounded-lg p-3 shadow-lg z-10">
          <div className="text-[10px] uppercase font-bold text-gray-500 mb-2 tracking-wider">Risk Legend</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-rose-500"></div><span className="text-xs text-gray-600 dark:text-gray-400">Critical</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-amber-500"></div><span className="text-xs text-gray-600 dark:text-gray-400">High</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-blue-500"></div><span className="text-xs text-gray-600 dark:text-gray-400">Medium</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-emerald-500"></div><span className="text-xs text-gray-600 dark:text-gray-400">Low</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementRiskMap;
