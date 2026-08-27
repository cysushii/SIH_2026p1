import React from 'react';
import { Info } from 'lucide-react';

const EvidenceAgreement = () => {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-full min-h-[300px]">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Evidence Agreement Guide</h2>
        <Info size={16} className="text-gray-500 dark:text-gray-500" />
      </div>
      
      <div className="flex-1 p-4 flex flex-col gap-3">
        {['Geology', 'Satellite', 'Terrain', 'Occurrences', 'Geochemistry'].map((item) => (
          <div key={item} className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">{item}</span>
            <span className="text-gray-500 dark:text-gray-600">— Not available</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidenceAgreement;
