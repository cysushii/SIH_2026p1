import React from 'react';
import { Search } from 'lucide-react';

const PriorityTenders = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl flex flex-col h-full shadow-lg shadow-black/20">
      <div className="p-4 border-b border-border flex items-center justify-between bg-card z-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300">Priority Tenders</h2>
      </div>
      
      <div className="flex-1 p-0 overflow-x-auto relative min-h-[250px]">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-border text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/80 backdrop-blur">
              <th className="px-4 py-3 font-medium">Tender ID</th>
              <th className="px-4 py-3 font-medium">Requirement</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Value</th>
              <th className="px-4 py-3 font-medium">Deadline</th>
              <th className="px-4 py-3 font-medium">Impact</th>
              <th className="px-4 py-3 font-medium">Priority</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td colSpan={8} className="px-5 py-12 text-center">
                <div className="flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-4">
                    <Search size={20} className="text-gray-500 dark:text-gray-500" />
                  </div>
                  <p className="text-gray-800 dark:text-gray-300 font-medium mb-1">No priority tenders</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 max-w-sm">
                    Priority tenders will appear once procurement data is available.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="p-3 border-t border-border flex justify-center bg-gray-50 dark:bg-gray-900/30">
        <button className="px-5 py-1.5 text-xs font-medium border border-border rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 cursor-not-allowed transition-all" disabled>
          VIEW ALL TENDERS
        </button>
      </div>
    </div>
  );
};

export default PriorityTenders;
