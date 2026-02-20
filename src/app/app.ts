import { Component, signal } from '@angular/core';
import { First } from "./first/first";
import { Cv } from "./cv/cv";
import { HomeAccount } from "./accounts/home-account/home-account";
import { Direct } from "./direct/direct";
import { ManageServers } from "./manage-servers/manage-servers";

@Component({
  selector: 'app-root',
  imports: [First, Cv, HomeAccount, Direct, ManageServers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GL-B-26');
}
