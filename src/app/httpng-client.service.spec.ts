import { TestBed } from '@angular/core/testing';

import { HttpngClientService } from './httpng-client.service';

describe('HttpngClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpngClientService = TestBed.get(HttpngClientService);
    expect(service).toBeTruthy();
  });
});
