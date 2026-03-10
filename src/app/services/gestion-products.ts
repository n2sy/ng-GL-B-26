import { effect, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionProducts {
  allProducts: WritableSignal<any[]> = signal([]);

  constructor() {
    this.allProducts.set([
      {
        id: 1,
        name: 'Product 1',
        price: 432,
        isSelected: true,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 221,
        isSelected: false,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 87,
        isSelected: false,
      },
    ]);

    effect(() => {
      console.log('Le signal ' + this.allProducts() + ' a été modifié !');
    });
  }
  addProduct(newProduct) {
    newProduct.id = this.allProducts()[this.allProducts().length - 1].id + 1;

    //newProduct.id = crypto.randomUUID();
    this.allProducts.update((previous) => {
      previous.push(newProduct);
      return [...previous];
    });
  }
  updateIsSelected(productId) {
    this.allProducts.update((previous) => {
      let i = previous.findIndex((product) => product.id == productId);
      previous[i].isSelected = !previous[i].isSelected;
      return [...previous];
    });
  }

  deleteProduct(productId) {
    this.allProducts.update((previous) => {
      let i = previous.findIndex((product) => product.id == productId);
      previous.splice(i, 1);
      return [...previous];
    });
  }
}
