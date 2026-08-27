import React from 'react';
import { Target, MapPin, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

const KPIRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">TOP PROSPECTIVITY</h3>
          <div className="p-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-colors">
            <Target size={18} className="text-emerald-500 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-600 dark:text-gray-400">—</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-500 dark:text-emerald-400 border border-emerald-400/20 tracking-wider">NO DATA</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Awaiting exploration model</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-blue-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">PRIORITY ZONES</h3>
          <div className="p-2 rounded-lg bg-blue-400/10 border border-blue-400/20 group-hover:bg-blue-400/20 transition-colors">
            <MapPin size={18} className="text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">—</div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Awaiting target ranking</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">NEXT-MONTH PROD.</h3>
          <div className="p-2 rounded-lg bg-indigo-400/10 border border-indigo-400/20 group-hover:bg-indigo-400/20 transition-colors">
            <TrendingUp size={18} className="text-indigo-500 dark:text-indigo-400" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">—</div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Forecast unavailable</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">PRODUCTION RISK</h3>
          <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 group-hover:bg-amber-400/20 transition-colors">
            <AlertTriangle size={18} className="text-amber-500 dark:text-amber-400" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">—</div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Target not configured</p>
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col justify-between hover:border-purple-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10 group cursor-default">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">DATA CONFIDENCE</h3>
          <div className="p-2 rounded-lg bg-purple-400/10 border border-purple-400/20 group-hover:bg-purple-400/20 transition-colors">
            <ShieldCheck size={18} className="text-purple-500 dark:text-purple-400" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">—</div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Awaiting data ingestion</p>
        </div>
      </div>

    </div>
  );
};

export default KPIRow;
