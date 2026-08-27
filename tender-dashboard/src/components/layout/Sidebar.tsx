import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Map, 
  Target, 
  TrendingUp,
  Database,
  FileText,
  ChevronDown,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const Sidebar = () => {
  const [explorationOpen, setExplorationOpen] = useState(true);
  const [productionOpen, setProductionOpen] = useState(true);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  const subNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-1.5 ml-6 text-sm rounded-lg transition-colors ${
      isActive 
        ? 'text-blue-400 font-medium' 
        : 'text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
    }`;

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col hidden md:flex">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text flex items-center gap-2">
          MANGANEX
        </h1>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">AI-Powered Manganese Intelligence</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 space-y-1">
        <NavLink to="/overview" className={navLinkClass}>
          <Home size={18} />
          <span>Overview</span>
        </NavLink>

        <div className="pt-4">
          <button 
            className="flex items-center justify-between w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-200 group"
            onClick={() => setExplorationOpen(!explorationOpen)}
          >
            <div className="flex items-center gap-3">
              <Map size={18} className="group-hover:text-emerald-400 transition-colors" />
              <span>Exploration</span>
            </div>
            {explorationOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {explorationOpen && (
            <div className="mt-1 space-y-1">
              <NavLink to="/exploration/map" className={subNavLinkClass}>Prospectivity Map</NavLink>
              <NavLink to="/exploration/targets" className={subNavLinkClass}>Ranked Targets</NavLink>
              <NavLink to="/exploration/next-best" className={subNavLinkClass}>Next Best Target</NavLink>
              <NavLink to="/exploration/drill-plan" className={subNavLinkClass}>Drill Plan</NavLink>
            </div>
          )}
        </div>

        <div className="pt-4">
          <button 
            className="flex items-center justify-between w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-200 group"
            onClick={() => setProductionOpen(!productionOpen)}
          >
            <div className="flex items-center gap-3">
              <TrendingUp size={18} className="group-hover:text-indigo-400 transition-colors" />
              <span>Production</span>
            </div>
            {productionOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {productionOpen && (
            <div className="mt-1 space-y-1">
              <NavLink to="/production/forecast" className={subNavLinkClass}>Forecast Dashboard</NavLink>
              <NavLink to="/production/alerts" className={subNavLinkClass}>Shortfall Alerts</NavLink>
              <NavLink to="/production/risk" className={subNavLinkClass}>Risk Analysis</NavLink>
            </div>
          )}
        </div>

        <div className="pt-4 space-y-1">
          <NavLink to="/data-health" className={navLinkClass}>
            <Database size={18} className="text-purple-400" />
            <span>Data Health</span>
          </NavLink>
          
          <NavLink to="/reports" className={navLinkClass}>
            <FileText size={18} />
            <span>Reports</span>
          </NavLink>
        </div>
      </nav>
      
      <div className="p-4 border-t border-border mt-auto">
        <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-border">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span className="text-sm text-gray-800 dark:text-gray-300">All Systems Operational</span>
        </div>
        <div className="mt-4 text-xs text-gray-600 text-center">
          Powered by Cybernetic Coders
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
