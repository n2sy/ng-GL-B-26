import { Routes } from '@angular/router';

export let myRoutes: Routes = [
  { path: '', loadComponent: () => import('./accueil/accueil').then((m) => m.Accueil) },
  { path: 'cv', loadComponent: () => import('./cv/cv').then((m) => m.Cv) },
  { path: 'cv/:id', loadComponent: () => import('./infos/infos').then((m) => m.Infos) },
  {
    path: 'accounts',
    loadComponent: () => import('./accounts/home-account/home-account').then((m) => m.HomeAccount),
  },
  {
    path: 'servers',
    loadComponent: () => import('./manage-servers/manage-servers').then((m) => m.ManageServers),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/home-products/home-products').then((m) => m.HomeProducts),
  },
];

// Sans lazy loading
// export let myRoutes: Routes = [
//   { path: '', component: Accueil },
//   { path: 'cv', component: Cv },
//   { path: 'cv/:id', component: Infos },
//   { path: 'accounts', component: HomeAccount },
//   { path: 'servers', component: ManageServers },
//   { path: 'products', component: HomeProducts },
// ];
