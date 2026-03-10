import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Cv } from './cv/cv';
import { HomeAccount } from './accounts/home-account/home-account';
import { ManageServers } from './manage-servers/manage-servers';
import { HomeProducts } from './products/home-products/home-products';
import { Infos } from './infos/infos';

export let myRoutes: Routes = [
  { path: '', component: Accueil },
  { path: 'cv', component: Cv },
  { path: 'cv/:id', component: Infos },
  { path: 'accounts', component: HomeAccount },
  { path: 'servers', component: ManageServers },
  { path: 'products', component: HomeProducts },
];
