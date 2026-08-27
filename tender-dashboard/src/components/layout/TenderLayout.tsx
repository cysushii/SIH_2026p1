import React from 'react';
import { Outlet } from 'react-router-dom';
import TenderSidebar from './TenderSidebar';
import TenderHeader from './TenderHeader';

const TenderLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <TenderSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TenderHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TenderLayout;
