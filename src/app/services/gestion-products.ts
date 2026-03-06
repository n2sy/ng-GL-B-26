import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionProducts {
  allProducts : WritableSignal<any[]> = signal([])
  
  constructor() {
    this.allProducts.set([
        {
            id : 1,
            name : "Product 1",
            price : 432,
            isSelected : true
        },
        {
            id : 2,
            name : "Product 2",
            price : 221,
            isSelected : false
        },
        {
            id : 3,
            name : "Product 3",
            price : 87,
            isSelected : false
        }
    ])
  }
}
