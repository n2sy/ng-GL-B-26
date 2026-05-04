import { TestBed } from '@angular/core/testing';

import { GestionServers } from './gestion-servers';

describe('GestionServers', () => {
  let service: GestionServers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionServers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
