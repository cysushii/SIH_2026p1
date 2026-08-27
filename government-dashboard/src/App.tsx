import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GovernmentDashboard from './pages/GovernmentDashboard';
import DataHealthPage from './pages/DataHealthPage';
import EmptyPage from './pages/EmptyPage';

function App() {
  useEffect(() => {
    // Default to dark mode if no preference is set, to match the original design
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/overview" replace />} />
          <Route path="overview" element={<GovernmentDashboard />} />
          <Route path="exploration/map" element={<EmptyPage title="Prospectivity Map" />} />
          <Route path="exploration/targets" element={<EmptyPage title="Ranked Targets" />} />
          <Route path="exploration/next-best" element={<EmptyPage title="Next Best Target" />} />
          <Route path="exploration/drill-plan" element={<EmptyPage title="Drill Plan" />} />
          <Route path="production/forecast" element={<EmptyPage title="Production Forecast" />} />
          <Route path="production/alerts" element={<EmptyPage title="Shortfall Alerts" />} />
          <Route path="production/risk" element={<EmptyPage title="Risk Analysis" />} />
          <Route path="data-health" element={<DataHealthPage />} />
          <Route path="reports" element={<EmptyPage title="Reports" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
