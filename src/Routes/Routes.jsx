import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Allapps from '../pages/Allapps/Allapps';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/allapps",
        loader: () => fetch('/appsData.json'),
        Component: Allapps,
      }
    ]
  },
]);
