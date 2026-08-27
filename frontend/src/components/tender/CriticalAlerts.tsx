import React from 'react';
import { AlertOctagon, ChevronRight } from 'lucide-react';

const CriticalAlerts = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl flex flex-col h-full shadow-lg shadow-black/20">
      <div className="p-4 border-b border-border flex items-center justify-between bg-card z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Critical Procurement Alerts</h2>
        </div>
      </div>
      
      <div className="flex-1 p-0 overflow-x-auto relative min-h-[250px]">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-border text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/80 backdrop-blur">
              <th className="px-5 py-3 font-medium">Priority</th>
              <th className="px-5 py-3 font-medium">Requirement</th>
              <th className="px-5 py-3 font-medium">Mine</th>
              <th className="px-5 py-3 font-medium">Deadline</th>
              <th className="px-5 py-3 font-medium">Production Impact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td colSpan={5} className="px-5 py-12 text-center">
                <div className="flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-4">
                    <AlertOctagon size={20} className="text-gray-400 dark:text-gray-500" />
                  </div>
                  <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">No critical procurement alerts</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 max-w-xs">
                    Critical alerts will appear when tender and production-impact data is available.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="p-3 border-t border-border flex justify-end bg-gray-50 dark:bg-gray-900/30">
        <button className="flex items-center gap-1 px-4 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-not-allowed">
          View All Alerts <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default CriticalAlerts;
