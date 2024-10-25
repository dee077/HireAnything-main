// src/components/Layout.jsx
import React from 'react';
import Headers from './Headers';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Headers /> {/* This will be shown on all pages */}
      <Outlet />   {/* This is where the current route's component will be rendered */}
    </div>
  );
};

export default Layout;
