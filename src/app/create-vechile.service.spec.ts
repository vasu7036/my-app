import { TestBed } from '@angular/core/testing';

import { CreateVechileService } from './create-vechile.service';

describe('CreateVechileService', () => {
  let service: CreateVechileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateVechileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
