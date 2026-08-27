export interface Tender {
  id: string;
  requirement: string;
  category: string;
  value: number | null;
  deadline: string | null;
  impact: 'Critical' | 'High' | 'Medium' | 'Low' | null;
  priority: 'Critical' | 'High' | 'Medium' | 'Low' | null;
  status: string;
}

export interface Requirement {
  id: string;
  name: string;
}

export interface ProcurementForecast {
  category: string;
  historicalSpend: number | null;
  forecastRequirement: number | null;
  plannedTenders: number | null;
  procurementGap: number | null;
}

export interface TenderPriority {
  tenderId: string;
  productionImpact: number | null;
  procurementUrgency: number | null;
  estimatedValue: number | null;
}

export interface ProductionImpact {
  currentExpectedProduction: number | null;
  procurementRelatedRisk: number | null;
  revisedExpectedProduction: number | null;
  shortfallProbability: number | null;
}

export interface Vendor {
  id: string;
  name: string;
}

export interface Risk {
  id: string;
  level: string;
}

export interface ProcurementAlert {
  id: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low' | null;
  requirement: string;
  mine: string;
  deadline: string | null;
  productionImpact: number | null;
}

export interface ProcurementTimeline {
  events: any[];
}

export interface ScenarioResult {
  productionImpact: number | null;
  procurementRisk: number | null;
  expectedShortfall: number | null;
  procurementReadiness: number | null;
  targetRanking: number | null;
}
