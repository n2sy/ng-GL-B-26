import { RouterModule, Routes } from '@angular/router';
import { EditServer } from './edit-server/edit-server';
import { InfoServer } from './info-server/info-server';
import { ListServers } from './list-servers/list-servers';

let subRoutes: Routes = [
  {
    path: '',
    component: ListServers,
    children: [
      { path: ':idServer', component: InfoServer },
      { path: ':idServer/update', component: EditServer },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
