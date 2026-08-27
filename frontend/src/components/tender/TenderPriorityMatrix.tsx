import React from 'react';
import { ScatterChart, ChevronDown } from 'lucide-react';

const TenderPriorityMatrix = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl flex flex-col h-full shadow-lg shadow-black/20">
      <div className="p-4 border-b border-border flex items-center justify-between bg-card z-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Tender Priority Matrix</h2>
        <button className="flex items-center gap-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors border border-border px-2 py-1 rounded bg-gray-50 dark:bg-gray-800/50 cursor-not-allowed">
          All Categories <ChevronDown size={14} />
        </button>
      </div>
      
      <div className="flex-1 relative flex flex-col min-h-[250px] p-6">
        
        {/* Empty Axis structure */}
        <div className="absolute inset-x-6 inset-y-6 border-l-2 border-b-2 border-border/80 flex items-center justify-center">
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            Procurement Urgency
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            Production Impact
          </div>
          
          <div className="flex flex-col items-center animate-fade-in z-10 p-5 bg-card/90 backdrop-blur-md rounded-xl border border-border shadow-xl">
            <ScatterChart size={28} className="text-blue-500/50 mb-3" />
            <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">No priority data available</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 max-w-xs text-center">
              The priority matrix will appear once tender and production-impact data is connected.
            </p>
          </div>
        </div>

      </div>

      <div className="p-3 border-t border-border bg-gray-50 dark:bg-gray-900/30 flex items-center justify-center gap-4 text-xs">
        <span className="text-gray-500 font-medium mr-2">Legend:</span>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-400"></div><span className="text-gray-500">Low</span></div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-400"></div><span className="text-gray-500">Medium</span></div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-400"></div><span className="text-gray-500">High</span></div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-500"></div><span className="text-gray-500">Critical</span></div>
      </div>
    </div>
  );
};

export default TenderPriorityMatrix;
