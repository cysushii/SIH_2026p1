export interface ExplorationTarget {
  id: string;
  zone: string;
  prospectivity: number | null;
  uncertainty: 'High' | 'Medium' | 'Low' | null;
  evidence: {
    geology: 'Strong' | 'Moderate' | 'Limited' | null;
    satellite: 'Strong' | 'Moderate' | 'Limited' | null;
    terrain: 'Strong' | 'Moderate' | 'Limited' | null;
    occurrences: 'Strong' | 'Moderate' | 'Limited' | null;
    geochemistry: 'Strong' | 'Moderate' | 'Limited' | null;
  };
  priority: 'High' | 'Medium' | 'Low' | null;
  rationale: string | null;
}

export interface ProductionForecast {
  month: string;
  actual: number | null;
  forecast: number | null;
  target: number;
}

export interface RiskFactor {
  id: string;
  name: string;
  score: number | null; // SHAP feature importance
}

export interface EvidenceLayer {
  name: string;
  status: 'Connected' | 'Not Connected';
  lastUpdated: string | null;
  coverage: string | null;
  quality: 'Good' | 'Medium' | 'Low' | 'Unknown';
}

export interface DataHealth {
  overallConfidence: 'High' | 'Medium' | 'Low' | null;
  layers: EvidenceLayer[];
}

export interface SimulationResult {
  prospectivityChange: number | null;
  uncertaintyChange: number | null;
  targetRankingChange: number | null;
}

export interface Alert {
  id: string;
  message: string;
  type: 'Risk' | 'Warning' | 'Info';
  timestamp: string;
}
