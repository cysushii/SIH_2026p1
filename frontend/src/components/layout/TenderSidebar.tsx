import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Home, 
  FileText,
  Target,
  ListOrdered,
  Activity,
  AlertTriangle,
  Clock,
  BarChart2,
  Users,
  ChevronDown,
  ChevronRight,
  Bot,
  TrendingUp
} from 'lucide-react';

const TenderSidebar = () => {
  const [tendersOpen, setTendersOpen] = useState(true);
  const [reqsOpen, setReqsOpen] = useState(true);

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
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text flex items-center gap-2">
          MANGANEX
        </h1>
        <p className="text-xs text-gray-800 dark:text-gray-300 font-medium mt-1">Tender & Procurement Intelligence</p>
        <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">AI-Assisted Procurement Planning</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 space-y-1">
        <NavLink to="/tender/overview" className={navLinkClass}>
          <Home size={18} />
          <span>Overview</span>
        </NavLink>

        <div className="pt-4">
          <button 
            className="flex items-center justify-between w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-200 group"
            onClick={() => setTendersOpen(!tendersOpen)}
          >
            <div className="flex items-center gap-3">
              <FileText size={18} className="group-hover:text-blue-400 transition-colors" />
              <span>Tenders</span>
            </div>
            {tendersOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {tendersOpen && (
            <div className="mt-1 space-y-1">
              <NavLink to="/tender/active" className={subNavLinkClass}>Active Tenders</NavLink>
              <NavLink to="/tender/upcoming" className={subNavLinkClass}>Upcoming Tenders</NavLink>
              <NavLink to="/tender/intelligence" className={subNavLinkClass}>Tender Intelligence</NavLink>
            </div>
          )}
        </div>

        <div className="pt-4">
          <button 
            className="flex items-center justify-between w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-200 group"
            onClick={() => setReqsOpen(!reqsOpen)}
          >
            <div className="flex items-center gap-3">
              <ListOrdered size={18} className="group-hover:text-indigo-400 transition-colors" />
              <span>Requirements</span>
            </div>
            {reqsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {reqsOpen && (
            <div className="mt-1 space-y-1">
              <NavLink to="/tender/requirements/current" className={subNavLinkClass}>Current Requirements</NavLink>
              <NavLink to="/tender/requirements/forecast" className={subNavLinkClass}>Forecast Requirements</NavLink>
            </div>
          )}
        </div>

        <div className="pt-4 space-y-1">
          <NavLink to="/tender/forecast" className={navLinkClass}>
            <TrendingUp size={18} className="text-emerald-500" />
            <span>Procurement Forecast</span>
          </NavLink>
          
          <NavLink to="/tender/priority" className={navLinkClass}>
            <Target size={18} className="text-rose-400" />
            <span>Priority Matrix</span>
          </NavLink>

          <NavLink to="/tender/impact" className={navLinkClass}>
            <Activity size={18} className="text-amber-500" />
            <span>Production Impact</span>
          </NavLink>

          <NavLink to="/tender/vendors" className={navLinkClass}>
            <Users size={18} className="text-blue-400" />
            <span>Vendor Intelligence</span>
          </NavLink>

          <NavLink to="/tender/timeline" className={navLinkClass}>
            <Clock size={18} className="text-purple-400" />
            <span>Procurement Timeline</span>
          </NavLink>

          <NavLink to="/tender/alerts" className={navLinkClass}>
            <AlertTriangle size={18} className="text-amber-500" />
            <span>Alerts</span>
          </NavLink>

          <NavLink to="/tender/analytics" className={navLinkClass}>
            <BarChart2 size={18} className="text-indigo-400" />
            <span>Analytics</span>
          </NavLink>

          <NavLink to="/tender/reports" className={navLinkClass}>
            <FileText size={18} className="text-gray-400" />
            <span>Reports</span>
          </NavLink>
        </div>
      </nav>
      
      <div className="p-4 border-t border-border mt-auto">
        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 transition-colors font-medium text-sm">
          <Bot size={18} />
          <span>AI Copilot</span>
        </button>
      </div>
    </div>
  );
};

export default TenderSidebar;
