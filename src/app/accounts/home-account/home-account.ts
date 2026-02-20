import { Component } from '@angular/core';
import { AddAccount } from "../add-account/add-account";
import { ItemAccount } from "../item-account/item-account";

@Component({
  selector: 'app-home-account',
  imports: [AddAccount, ItemAccount],
  templateUrl: './home-account.html',
  styleUrl: './home-account.css',
})
export class HomeAccount {
    tabAccounts = [
        {
            name : "Nidhal Account",
            status : "active"
        },
        {
            name : "Aziz Account",
            status : "inactive"
        }
    ];
    
    addAccount(newAccount) {
        this.tabAccounts.push(newAccount)
    }
}
