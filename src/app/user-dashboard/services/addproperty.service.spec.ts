import { TestBed } from '@angular/core/testing';

import { AddpropertyService } from './addproperty.service';

describe('AddpropertyService', () => {
  let service: AddpropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
