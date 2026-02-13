import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  imports: [],
  templateUrl: './home-account.html',
  styleUrl: './home-account.css',
})
export class HomeAccount {
    tabAccounts = [
        {
            name : "Nidhal Account",
            statut : "active"
        },
        {
            name : "Aziz Account",
            statut : "inactive"
        }
    ]
}
