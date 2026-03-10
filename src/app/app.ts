import { Component, signal } from '@angular/core';
import { First } from './first/first';
import { Cv } from './cv/cv';
import { HomeAccount } from './accounts/home-account/home-account';
import { Direct } from './direct/direct';
import { ManageServers } from './manage-servers/manage-servers';
import { GestionCandidats } from './services/gestion-candidats';
import { Recrues } from './recrues/recrues';
import { ExempleSignals } from './exemple-signals/exemple-signals';
import { HomeProducts } from './products/home-products/home-products';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    First,
    Cv,
    HomeAccount,
    Direct,
    ManageServers,
    Recrues,
    ExempleSignals,
    HomeProducts,
    RouterOutlet,
    Navbar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('GL-B-26');
}
