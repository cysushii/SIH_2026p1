import React from 'react';

const EmptyPage = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 dark:text-gray-400">This module is awaiting data integration.</p>
    </div>
  );
};

export default EmptyPage;
