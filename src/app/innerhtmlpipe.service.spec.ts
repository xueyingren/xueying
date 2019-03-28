import { TestBed } from '@angular/core/testing';

import { InnerhtmlpipeService } from './innerhtmlpipe.service';

describe('InnerhtmlpipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InnerhtmlpipeService = TestBed.get(InnerhtmlpipeService);
    expect(service).toBeTruthy();
  });
});
