import { TestBed } from '@angular/core/testing';

import { AddContentOptionsService } from './add-content-options.service';

describe('AddContentOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddContentOptionsService = TestBed.get(AddContentOptionsService);
    expect(service).toBeTruthy();
  });
});
