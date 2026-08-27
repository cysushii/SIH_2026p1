import React from 'react';
import KPIRow from '../components/dashboard/KPIRow';
import ProspectivityMap from '../components/dashboard/ProspectivityMap';
import PriorityTargets from '../components/dashboard/PriorityTargets';
import ProductionOutlook from '../components/dashboard/ProductionOutlook';
import RiskFactors from '../components/dashboard/RiskFactors';
import DataHealthCard from '../components/dashboard/DataHealthCard';
import EvidenceAgreement from '../components/dashboard/EvidenceAgreement';
import NextBestExploration from '../components/dashboard/NextBestExploration';
import DashboardAlert from '../components/dashboard/DashboardAlert';

const GovernmentDashboard = () => {
  return (
    <div className="flex flex-col gap-6 pb-6">
      <KPIRow />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="h-[400px]">
            <ProspectivityMap />
          </div>
          <div className="h-[300px]">
            <PriorityTargets />
          </div>
        </div>
        
        <div className="xl:col-span-1 flex flex-col gap-6">
          <div className="h-[350px]">
            <DataHealthCard />
          </div>
          <div className="h-[350px]">
            <EvidenceAgreement />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductionOutlook />
        <RiskFactors />
      </div>

      <NextBestExploration />
      
      <DashboardAlert />
    </div>
  );
};

export default GovernmentDashboard;
