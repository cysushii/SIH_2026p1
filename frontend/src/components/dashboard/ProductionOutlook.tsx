import React from 'react';
import { BarChart2 } from 'lucide-react';

const ProductionOutlook = () => {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-full min-h-[300px]">
      <div className="p-4 border-b border-border">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Production Forecast</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <BarChart2 size={32} className="text-gray-400 dark:text-gray-600 mb-4" />
        <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">No production data available</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">Production forecast will appear once the model is connected.</p>
      </div>
    </div>
  );
};

export default ProductionOutlook;
