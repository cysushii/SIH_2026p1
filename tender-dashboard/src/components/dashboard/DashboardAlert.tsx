import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DashboardAlert = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 border border-border rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <AlertTriangle className="text-warning" size={20} />
        <div>
          <span className="font-medium text-warning">No active alerts</span>
          <span className="text-gray-600 dark:text-gray-400 ml-2">— Alerts will appear when connected models detect production or exploration risks.</span>
        </div>
      </div>
      <button className="px-4 py-1.5 text-sm font-medium border border-border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-300">
        View Details
      </button>
    </div>
  );
};

export default DashboardAlert;
