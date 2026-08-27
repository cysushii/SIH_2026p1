import React from 'react';
import { FileText, DollarSign, AlertCircle, Activity, ShieldCheck } from 'lucide-react';

const TenderKPIRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors uppercase">Active Tenders</h3>
          <div className="p-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-colors">
            <FileText size={18} className="text-emerald-500 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-600 dark:text-gray-400">—</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">No active tender data</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-blue-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors uppercase">Upcoming Value</h3>
          <div className="p-2 rounded-lg bg-blue-400/10 border border-blue-400/20 group-hover:bg-blue-400/20 transition-colors">
            <DollarSign size={18} className="text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        <div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-600 dark:text-gray-400">—</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Awaiting tender data</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-rose-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors uppercase">Critical</h3>
          <div className="p-2 rounded-lg bg-rose-400/10 border border-rose-400/20 group-hover:bg-rose-400/20 transition-colors">
            <AlertCircle size={18} className="text-rose-500 dark:text-rose-400" />
          </div>
        </div>
        <div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-600 dark:text-gray-400">—</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Requires tender risk analysis</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors uppercase">Production at Risk</h3>
          <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 group-hover:bg-amber-400/20 transition-colors">
            <Activity size={18} className="text-amber-500 dark:text-amber-400" />
          </div>
        </div>
        <div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-600 dark:text-gray-400">—</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Awaiting impact analysis</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-purple-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors uppercase">Procurement Readiness</h3>
          <div className="p-2 rounded-lg bg-purple-400/10 border border-purple-400/20 group-hover:bg-purple-400/20 transition-colors">
            <ShieldCheck size={18} className="text-purple-500 dark:text-purple-400" />
          </div>
        </div>
        <div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-600 dark:text-gray-400">—</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Awaiting procurement data</p>
        </div>
      </div>

    </div>
  );
};

export default TenderKPIRow;
