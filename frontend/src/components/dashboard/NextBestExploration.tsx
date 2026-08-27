import React from 'react';

const NextBestExploration = () => {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300 mb-4">Next-Best Exploration Target</h2>
      
      <div className="flex flex-col items-center justify-center py-8 text-center border border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors rounded-lg bg-gray-50 dark:bg-gray-900/30">
        <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">No exploration target available</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">Connect exploration models to determine the optimal next target.</p>
        
        <div className="flex gap-4">
          <button className="px-5 py-2 text-sm font-medium border border-border rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 cursor-not-allowed">
            VIEW TARGET
          </button>
          <button className="px-5 py-2 text-sm font-medium border border-blue-500/30 rounded bg-blue-600/10 text-blue-500/50 cursor-not-allowed">
            SIMULATE EXPLORATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextBestExploration;
