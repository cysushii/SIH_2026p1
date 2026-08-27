import React from 'react';
import { BarChart3, ChevronDown } from 'lucide-react';

const RequirementForecast = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl flex flex-col h-full shadow-lg shadow-black/20">
      <div className="p-4 border-b border-border flex items-center justify-between bg-card z-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Procurement Requirement Forecast</h2>
        <button className="flex items-center gap-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors border border-border px-2 py-1 rounded bg-gray-50 dark:bg-gray-800/50 cursor-not-allowed">
          By Category <ChevronDown size={14} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-chart-grid relative min-h-[200px]">
        <div className="flex flex-col items-center animate-fade-in z-10 p-6 bg-card/80 backdrop-blur-md rounded-xl border border-border shadow-xl">
          <BarChart3 size={32} className="text-gray-400 dark:text-gray-600 mb-3" />
          <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">No forecast data available</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-xs">
            Forecast will appear once procurement data is connected.
          </p>
        </div>
      </div>

      <div className="p-4 border-t border-border bg-gray-50 dark:bg-gray-900/30 grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase font-medium">Equipment</span>
          <span className="text-lg font-bold text-gray-400">—</span>
        </div>
        <div className="flex flex-col border-l border-border pl-4">
          <span className="text-xs text-gray-500 uppercase font-medium">Services</span>
          <span className="text-lg font-bold text-gray-400">—</span>
        </div>
        <div className="flex flex-col border-l border-border pl-4">
          <span className="text-xs text-gray-500 uppercase font-medium">Consumables</span>
          <span className="text-lg font-bold text-gray-400">—</span>
        </div>
      </div>
    </div>
  );
};

export default RequirementForecast;
