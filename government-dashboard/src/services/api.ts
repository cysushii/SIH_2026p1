import type {
  ExplorationTarget,
  ProductionForecast,
  RiskFactor,
  DataHealth,
  SimulationResult,
  Alert
} from '../types';

export const explorationService = {
  getProspectivityTargets: async (): Promise<ExplorationTarget[]> => {
    return [];
  },
  getNextBestTarget: async (): Promise<ExplorationTarget | null> => {
    return null;
  },
  simulateExploration: async (): Promise<SimulationResult | null> => {
    return null;
  }
};

export const productionService = {
  getProductionForecast: async (): Promise<ProductionForecast[]> => {
    return [];
  }
};

export const riskService = {
  getRiskFactors: async (): Promise<RiskFactor[]> => {
    return [];
  }
};

export const dataHealthService = {
  getDataHealth: async (): Promise<DataHealth> => {
    return {
      overallConfidence: null,
      layers: [
        { name: 'Satellite Imagery', status: 'Not Connected', lastUpdated: null, coverage: null, quality: 'Unknown' },
        { name: 'Geological Data', status: 'Not Connected', lastUpdated: null, coverage: null, quality: 'Unknown' },
        { name: 'Terrain Data', status: 'Not Connected', lastUpdated: null, coverage: null, quality: 'Unknown' },
        { name: 'Known Occurrences', status: 'Not Connected', lastUpdated: null, coverage: null, quality: 'Unknown' },
        { name: 'Weather Data', status: 'Not Connected', lastUpdated: null, coverage: null, quality: 'Unknown' },
        { name: 'Geochemistry', status: 'Not Connected', lastUpdated: null, coverage: null, quality: 'Unknown' }
      ]
    };
  },
  getAlerts: async (): Promise<Alert[]> => {
    return [];
  }
};
