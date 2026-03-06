import { TestBed } from '@angular/core/testing';

import { GestionProducts } from './gestion-products';

describe('GestionProducts', () => {
  let service: GestionProducts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionProducts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
