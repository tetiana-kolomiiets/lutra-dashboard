import { Routes, Route, Navigate } from 'react-router-dom';
import Customers from './pages/Customers';
import Posts from './pages/Posts';
import Campaigns from './pages/Campaigns';
import Analytics from './pages/Analytics';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/posts" replace />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/campaigns" element={<Campaigns />} />
    <Route path="/analytics" element={<Analytics />} />
  </Routes>
);

export default AppRoutes; 