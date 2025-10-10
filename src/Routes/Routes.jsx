import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Allapps from '../pages/Allapps/Allapps';
import AppDetails from '../pages/AppDetails/AppDetails';
import Installations from '../pages/Installations/Installations';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('appsData.json'),
        Component: Home
      },
      {
        path: "allapps",
        loader: () => fetch('/appsData.json'),
        Component: Allapps,
      },
      {
        path: "allapps/appdetails/:id",
        loader: () => fetch('/appsData.json'),
        Component: AppDetails
      },

      {
        path: "*",
        Component: ErrorPage
      },

      {
        path: "installations",
        Component: Installations
      }
    ]
  },
]);
