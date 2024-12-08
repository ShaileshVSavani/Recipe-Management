import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if the user is logged in by checking localStorage
  const isLoggedIn = localStorage.getItem('loggedIn');

  // If logged in, allow access to the child routes; otherwise, redirect to login
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
