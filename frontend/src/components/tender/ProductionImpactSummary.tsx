import React from 'react';
import { ArrowDown } from 'lucide-react';

const ProductionImpactSummary = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl flex flex-col h-full shadow-lg shadow-black/20">
      <div className="p-4 border-b border-border bg-card z-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Production Impact Summary</h2>
      </div>
      
      <div className="flex-1 p-6 flex flex-col items-center justify-center gap-2">
        <div className="w-full max-w-xs flex flex-col items-center text-center p-3 rounded-lg border border-border bg-gray-50 dark:bg-gray-900/50">
          <span className="text-[10px] uppercase font-bold text-gray-500 mb-1">Current Expected Production</span>
          <span className="text-xl font-bold text-gray-400">—</span>
          <span className="text-[10px] text-gray-500 mt-1">Awaiting production forecast</span>
        </div>
        
        <ArrowDown size={16} className="text-gray-600 my-1" />
        
        <div className="w-full max-w-xs flex flex-col items-center text-center p-3 rounded-lg border border-border bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-900/30">
          <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-500 mb-1">Procurement-Related Risk</span>
          <span className="text-xl font-bold text-amber-500/50 dark:text-amber-500/50">—</span>
          <span className="text-[10px] text-amber-600/70 dark:text-amber-500/70 mt-1">Awaiting impact analysis</span>
        </div>
        
        <ArrowDown size={16} className="text-gray-600 my-1" />
        
        <div className="w-full max-w-xs flex flex-col items-center text-center p-3 rounded-lg border border-border bg-gray-50 dark:bg-gray-900/50">
          <span className="text-[10px] uppercase font-bold text-gray-500 mb-1">Revised Expected Production</span>
          <span className="text-xl font-bold text-gray-400">—</span>
          <span className="text-[10px] text-gray-500 mt-1">Awaiting calculation</span>
        </div>
        
        <ArrowDown size={16} className="text-gray-600 my-1" />
        
        <div className="w-full max-w-xs flex flex-col items-center text-center p-3 rounded-lg border border-border bg-rose-50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-900/30">
          <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-500 mb-1">Shortfall Probability</span>
          <span className="text-xl font-bold text-rose-500/50 dark:text-rose-500/50">—</span>
          <span className="text-[10px] text-rose-600/70 dark:text-rose-500/70 mt-1">Awaiting risk model</span>
        </div>
      </div>
    </div>
  );
};

export default ProductionImpactSummary;
