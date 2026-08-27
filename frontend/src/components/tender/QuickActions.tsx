import React from 'react';
import { Activity, TrendingUp, Search, FileText, Bot } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        <button className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-blue-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10 group cursor-not-allowed opacity-80">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-500 mb-3 border border-blue-200 dark:border-blue-500/20">
            <Activity size={20} />
          </div>
          <span className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1">RUN WHAT-IF SCENARIO</span>
          <span className="text-xs text-gray-500">Simulate procurement scenarios</span>
          <span className="mt-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded border border-border">Data required</span>
        </button>

        <button className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-emerald-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 group cursor-not-allowed opacity-80">
          <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-500 mb-3 border border-emerald-200 dark:border-emerald-500/20">
            <TrendingUp size={20} />
          </div>
          <span className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1">REQUIREMENTS FORECAST</span>
          <span className="text-xs text-gray-500">Forecast procurement needs</span>
          <span className="mt-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded border border-border">Data required</span>
        </button>

        <button className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-amber-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/10 group cursor-not-allowed opacity-80">
          <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-500 mb-3 border border-amber-200 dark:border-amber-500/20">
            <Search size={20} />
          </div>
          <span className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1">TRACE TENDER → PRODUCTION</span>
          <span className="text-xs text-gray-500">Understand production impact</span>
          <span className="mt-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded border border-border">Data required</span>
        </button>

        <button className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-purple-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10 group cursor-not-allowed opacity-80">
          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-500 mb-3 border border-purple-200 dark:border-purple-500/20">
            <FileText size={20} />
          </div>
          <span className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1">GENERATE REPORT</span>
          <span className="text-xs text-gray-500">Export procurement insights</span>
          <span className="mt-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded border border-border">Data required</span>
        </button>

        <button className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-indigo-500/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-900/10 group cursor-not-allowed opacity-80">
          <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-500 mb-3 border border-indigo-200 dark:border-indigo-500/20">
            <Bot size={20} />
          </div>
          <span className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1">ASK MANGANEX AI</span>
          <span className="text-xs text-gray-500">Get AI recommendations</span>
          <span className="mt-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded border border-border">Data required</span>
        </button>

      </div>
    </div>
  );
};

export default QuickActions;
