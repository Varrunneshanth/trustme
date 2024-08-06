import { TestBed } from '@angular/core/testing';

import { LoginandsigupService } from './loginandsigup.service';

describe('LoginandsigupService', () => {
  let service: LoginandsigupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginandsigupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
