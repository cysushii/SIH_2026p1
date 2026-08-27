import React, { useState, useEffect } from 'react';
import { ChevronDown, Bell, User, Zap, Moon, Sun } from 'lucide-react';

const TenderHeader = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 transition-colors duration-300 shadow-sm shadow-black/5 dark:shadow-none">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400">Pilot Region</span>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
              Select Region <ChevronDown size={14} />
            </button>
          </div>
          <div className="w-px h-8 bg-border mx-2"></div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400">Time Period</span>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
              Select Period <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-gray-100 dark:bg-gray-800 rounded-full"
          title="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <button className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors relative">
          <Bell size={18} />
        </button>
        
        <div className="flex items-center gap-2 pl-4 border-l border-border">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <User size={16} className="text-gray-500 dark:text-gray-400" />
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            MOIL Procurement <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TenderHeader;
