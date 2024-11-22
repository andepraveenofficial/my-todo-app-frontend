import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, UserRole } from '../app/context/AuthContext';
import Unauthorized from '../app/pages/Unauthorized';

interface IProtectedRouteProps {
  allowedRoles?: UserRole[];
}

const PrivateRoute: React.FC<IProtectedRouteProps> = ({
  allowedRoles = [],
}) => {
  const { isLoggedIn, user } = useAuth();

  // Not logged in - redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/auth/signin" replace />;
  }

  // Check role-based access (if user exists)
  const hasAllowedRole =
    allowedRoles.length === 0 ||
    (user && user.Role?.name && allowedRoles.includes(user.Role.name));

  // Unauthorized if role check fails
  if (!hasAllowedRole) {
    return <Unauthorized />;
  }

  return <Outlet />;
};

export default PrivateRoute;
