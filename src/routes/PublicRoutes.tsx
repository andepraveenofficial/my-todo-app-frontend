import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/context/AuthContext';

const PublicRoutes: React.FC = () => {
  const { isLoggedIn } = useAuth();

  // Redirect authenticated users away from auth pages
  if (!isLoggedIn) {
    return <Navigate to="auth/signin" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
