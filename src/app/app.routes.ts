import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    loadComponent: () => import('./pages/main/main').then((m) => m.Main),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/main/page1/page1').then((m) => m.Page1),
      },
      {
        path: 'expenses',
        loadComponent: () => import('./pages/main/expenses/expenses').then((m) => m.Expenses),
      },

      {
        path: 'receipts',
        loadComponent: () => import('./pages/main/receipts/receipts').then((m) => m.Receipts),
      },

      {
        path: 'approvals',
        loadComponent: () => import('./pages/main/approvals/approvals').then((m) => m.Approvals),
      },

      {
        path: 'reports',
        loadComponent: () => import('./pages/main/reports/reports').then((m) => m.Reports),
      },

      {
        path: 'budgets',
        loadComponent: () => import('./pages/main/budgets/budgets').then((m) => m.Budgets),
      },

      {
        path: 'policies',
        loadComponent: () => import('./pages/main/policies/policies').then((m) => m.Policies),
      },

      {
        path: 'vendors',
        loadComponent: () => import('./pages/main/vendors/vendors').then((m) => m.Vendors),
      },

      {
        path: 'analytics',
        loadComponent: () => import('./pages/main/analytics/analytics').then((m) => m.Analytics),
      },

      {
        path: 'settings',
        loadComponent: () => import('./pages/main/settings/settings').then((m) => m.Settings),
      },
    ],
  },
];
