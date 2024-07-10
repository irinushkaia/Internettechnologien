import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? (children ? children : <Outlet />) : <Navigate to="/login" />;
};

export default PrivateRoute;
