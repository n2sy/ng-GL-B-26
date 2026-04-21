import { Routes } from '@angular/router';

//Version avec children (réelle)
export let myRoutes: Routes = [
  { path: '', loadComponent: () => import('./accueil/accueil').then((m) => m.Accueil) },
  {
    path: 'cv',
    loadComponent: () => import('./cv/cv').then((m) => m.Cv),
    children: [
      { path: 'add', loadComponent: () => import('./add/add').then((m) => m.Add) },
      {
        path: ':id',
        children: [
          { path: '', loadComponent: () => import('./infos/infos').then((m) => m.Infos) },
          { path: 'edit', loadComponent: () => import('./update/update').then((m) => m.Update) },
        ],
      },
    ],
  },
  {
    path: 'accounts',
    loadComponent: () => import('./accounts/home-account/home-account').then((m) => m.HomeAccount),
  },
  {
    path: 'manage-servers',
    loadComponent: () => import('./manage-servers/manage-servers').then((m) => m.ManageServers),
  },
  {
    path: 'servers',
    loadChildren: () => import('./sub/sub-module').then((m) => m.SubModule),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/home-products/home-products').then((m) => m.HomeProducts),
  },
  {
    path: '404',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**', // wild route
    redirectTo: '404',
  },
];

//Version avec children (factorisation)
// export let myRoutes: Routes = [
//   { path: '', loadComponent: () => import('./accueil/accueil').then((m) => m.Accueil) },
//   {
//     path: 'cv',
//     children: [
//       { path: '', loadComponent: () => import('./cv/cv').then((m) => m.Cv) },
//       { path: 'add', loadComponent: () => import('./add/add').then((m) => m.Add) },
//       {
//         path: ':id',
//         children: [
//           { path: '', loadComponent: () => import('./infos/infos').then((m) => m.Infos) },
//           { path: 'edit', loadComponent: () => import('./update/update').then((m) => m.Update) },
//         ],
//       },
//     ],
//   },
//   {
//     path: 'accounts',
//     loadComponent: () => import('./accounts/home-account/home-account').then((m) => m.HomeAccount),
//   },
//   {
//     path: 'servers',
//     loadComponent: () => import('./manage-servers/manage-servers').then((m) => m.ManageServers),
//   },
//   {
//     path: 'products',
//     loadComponent: () =>
//       import('./products/home-products/home-products').then((m) => m.HomeProducts),
//   },
//   {
//     path: '404',
//     loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
//   },
//   {
//     path: '**', // wild route
//     redirectTo: '404',
//   },
// ];

// Version avec lazy loading sans children
// export let myRoutes: Routes = [
//   { path: '', loadComponent: () => import('./accueil/accueil').then((m) => m.Accueil) },
//   { path: 'cv', loadComponent: () => import('./cv/cv').then((m) => m.Cv) },
//   { path: 'cv/add', loadComponent: () => import('./add/add').then((m) => m.Add) },
//   { path: 'cv/:id', loadComponent: () => import('./infos/infos').then((m) => m.Infos) },
//   { path: 'cv/:id/edit', loadComponent: () => import('./update/update').then((m) => m.Update) },
//   {
//     path: 'accounts',
//     loadComponent: () => import('./accounts/home-account/home-account').then((m) => m.HomeAccount),
//   },
//   {
//     path: 'servers',
//     loadComponent: () => import('./manage-servers/manage-servers').then((m) => m.ManageServers),
//   },
//   {
//     path: 'products',
//     loadComponent: () =>
//       import('./products/home-products/home-products').then((m) => m.HomeProducts),
//   },
//   {
//     path: '404',
//     loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
//   },
//   {
//     path: '**', // wild route
//     redirectTo: '404',
//   },
// ];

// Sans lazy loading
// export let myRoutes: Routes = [
//   { path: '', component: Accueil },
//   { path: 'cv', component: Cv },
//   { path: 'cv/:id', component: Infos },
//   { path: 'accounts', component: HomeAccount },
//   { path: 'servers', component: ManageServers },
//   { path: 'products', component: HomeProducts },
// ];
