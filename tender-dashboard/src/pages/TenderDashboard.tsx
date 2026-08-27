import React from 'react';
import TenderKPIRow from '../components/tender/TenderKPIRow';
import CriticalAlerts from '../components/tender/CriticalAlerts';
import RequirementForecast from '../components/tender/RequirementForecast';
import TenderPriorityMatrix from '../components/tender/TenderPriorityMatrix';
import PriorityTenders from '../components/tender/PriorityTenders';
import ProductionImpactSummary from '../components/tender/ProductionImpactSummary';
import ProcurementRiskMap from '../components/tender/ProcurementRiskMap';
import QuickActions from '../components/tender/QuickActions';

const TenderDashboard = () => {
  return (
    <div className="flex flex-col gap-6 pb-6">
      <TenderKPIRow />
      
      {/* First Row: Alerts, Forecast, Priority Matrix */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-1 h-[400px]">
          <CriticalAlerts />
        </div>
        <div className="xl:col-span-1 h-[400px]">
          <RequirementForecast />
        </div>
        <div className="xl:col-span-1 h-[400px]">
          <TenderPriorityMatrix />
        </div>
      </div>

      {/* Second Row: Priority Tenders, Impact, Risk Map */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-5 h-[400px]">
          <PriorityTenders />
        </div>
        <div className="xl:col-span-3 h-[400px]">
          <ProductionImpactSummary />
        </div>
        <div className="xl:col-span-4 h-[400px]">
          <ProcurementRiskMap />
        </div>
      </div>

      <QuickActions />
    </div>
  );
};

export default TenderDashboard;
