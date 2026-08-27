import React from 'react';
import { Info } from 'lucide-react';

const DataHealthCard = () => {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-full min-h-[300px]">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Data Health</h2>
        <Info size={16} className="text-blue-500 dark:text-blue-400" />
      </div>
      
      <div className="flex-1 p-4 flex flex-col gap-4">
        {['Satellite Imagery', 'Geological Data', 'Terrain Data', 'Occurrences', 'Weather Data'].map((item) => (
          <div key={item} className="flex items-center justify-between text-sm">
            <span className="text-gray-800 dark:text-gray-300 flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                <span className="text-[10px] text-rose-500">-</span>
              </div>
              {item}
            </span>
            <span className="text-rose-500/80 dark:text-rose-400/80 font-medium uppercase text-xs tracking-wide">NOT CONNECTED</span>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-border flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
        <span className="text-sm text-gray-600 dark:text-gray-400">Overall Data Confidence</span>
        <span className="text-sm font-bold text-amber-500/80">UNKNOWN</span>
      </div>
    </div>
  );
};

export default DataHealthCard;
