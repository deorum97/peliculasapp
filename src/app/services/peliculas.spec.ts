import { TestBed } from '@angular/core/testing';

import { PeliculasService } from './peliculas.service';

describe('Peliculas', () => {
  let service: PeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
