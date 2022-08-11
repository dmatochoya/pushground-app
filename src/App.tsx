import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import GlobalStyles from './theme/GlobalStyles';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { ClipLoaderContainer } from './components/styles/ClipLoaderContainer.styled';
import { useAppSelector } from './app/hooks';
import { useGetApiKey } from './hooks/useGetApiKey';

function App() {
  const isUserAuthenticated = useAppSelector(
    ({ mainSlice: { isUserAuthenticated } }) => isUserAuthenticated,
  );

  const currentRoute = isUserAuthenticated ? '/dashboard' : '/login';
  const isLoading = useGetApiKey(isUserAuthenticated);

  return (
    <>
      <GlobalStyles />
      {isLoading
        ? (
          <ClipLoaderContainer>
            <ClipLoader color="#ff0000" size={100} />
          </ClipLoaderContainer>
        )
        : (
          <Router>
            <Routes>
              <Route path="*" element={<Navigate to={currentRoute} replace />} />
              {!isUserAuthenticated
                ? <Route path="/login" element={<Login />} />
                : <Route path="/dashboard" element={<Dashboard />} />}
            </Routes>
          </Router>
        )}
    </>
  );
}

export default App;
