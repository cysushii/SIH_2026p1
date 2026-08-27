import React from 'react';
import { AlertOctagon } from 'lucide-react';

const RiskFactors = () => {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-full min-h-[300px]">
      <div className="p-4 border-b border-border">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Top Risk Factors</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <AlertOctagon size={32} className="text-gray-400 dark:text-gray-600 mb-4" />
        <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">Risk analysis unavailable</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">Risk factors will appear after production/risk models are connected.</p>
      </div>
    </div>
  );
};

export default RiskFactors;
