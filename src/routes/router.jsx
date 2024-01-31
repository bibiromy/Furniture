import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../pages/home/Home';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
  ]);

export default router;