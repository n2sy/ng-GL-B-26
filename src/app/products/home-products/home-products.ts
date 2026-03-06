import { Component } from '@angular/core';
import { Dashboard } from "../dashboard/dashboard";
import { AddAccount } from "../../accounts/add-account/add-account";
import { AddProduct } from "../add-product/add-product";
import { ListProducts } from "../list-products/list-products";

@Component({
  selector: 'app-home-products',
  imports: [Dashboard, AddAccount, AddProduct, ListProducts],
  templateUrl: './home-products.html',
  styleUrl: './home-products.css',
})
export class HomeProducts {

}
