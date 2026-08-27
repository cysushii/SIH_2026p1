import React from 'react';
import { Database, WifiOff } from 'lucide-react';

const DataHealthPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Data Health</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor the connection status and quality of external data sources.</p>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl p-6">
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
          <WifiOff size={48} className="text-gray-600 mb-6" />
          <h2 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">No Data Sources Connected</h2>
          <p className="text-gray-500 dark:text-gray-500 max-w-md mb-8">
            The application is currently waiting for data ingestion. Please connect satellite imagery, geological data, terrain data, and occurrences to populate the data health dashboard.
          </p>
          <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded font-medium border border-border cursor-not-allowed">
            Connect Data Sources
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataHealthPage;
