/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/home',
        exact: true,
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/temporada/:tv/:numero',
        exact: true,
        component: lazy(() => import('views/Temporada'))
      },
      {
        path: '/episodio/:id',
        exact: true,
        component: lazy(() => import('views/Episodio'))
      },
      {
        path: '/personaje/:name',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/busqueda/:name',
        exact: true,
        component: lazy(() => import('views/Search'))
      },
      
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
