import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Vendors from '../pages/VendorPage';

// Function to check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token !== null; // Check if token exists
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Vendors /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
