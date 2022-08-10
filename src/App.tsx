import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const isUserAuthenticated = useAppSelector(
    ({ mainSlice: { isUserAuthenticated } }) => isUserAuthenticated,
  );

  const currentRoute = isUserAuthenticated ? '/dashboard' : '/login';

  return (
    <Routes>
      <Route path="/" element={<Navigate to={currentRoute} replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
