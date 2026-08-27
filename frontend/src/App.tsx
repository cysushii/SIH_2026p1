import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GovernmentDashboard from './pages/GovernmentDashboard';
import DataHealthPage from './pages/DataHealthPage';
import EmptyPage from './pages/EmptyPage';

import TenderLayout from './components/layout/TenderLayout';
import TenderDashboard from './pages/TenderDashboard';

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
        {/* Government Dashboard Routes */}
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

        {/* Tender & Procurement Dashboard Routes */}
        <Route path="/tender" element={<TenderLayout />}>
          <Route index element={<Navigate to="/tender/overview" replace />} />
          <Route path="overview" element={<TenderDashboard />} />
          <Route path="active" element={<EmptyPage title="Active Tenders" />} />
          <Route path="upcoming" element={<EmptyPage title="Upcoming Tenders" />} />
          <Route path="intelligence" element={<EmptyPage title="Tender Intelligence" />} />
          <Route path="requirements/current" element={<EmptyPage title="Current Requirements" />} />
          <Route path="requirements/forecast" element={<EmptyPage title="Forecast Requirements" />} />
          <Route path="forecast" element={<EmptyPage title="Procurement Forecast" />} />
          <Route path="priority" element={<EmptyPage title="Priority Matrix" />} />
          <Route path="impact" element={<EmptyPage title="Production Impact" />} />
          <Route path="vendors" element={<EmptyPage title="Vendor Intelligence" />} />
          <Route path="timeline" element={<EmptyPage title="Procurement Timeline" />} />
          <Route path="alerts" element={<EmptyPage title="Alerts" />} />
          <Route path="analytics" element={<EmptyPage title="Analytics" />} />
          <Route path="reports" element={<EmptyPage title="Reports" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
