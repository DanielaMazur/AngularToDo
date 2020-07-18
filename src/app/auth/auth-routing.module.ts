import { Routes, Router, RouterModule } from '@angular/router';
import { AuthComponent, LoginComponent } from './components';
import { ModuleWithProviders } from '@angular/core';

const authsRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

export const AuthRouterModule: ModuleWithProviders = RouterModule.forChild(
  authsRoutes
);
