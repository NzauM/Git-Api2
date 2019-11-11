import { TestBed } from '@angular/core/testing';

import { UserViceService } from './user-vice.service';

describe('UserViceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserViceService = TestBed.get(UserViceService);
    expect(service).toBeTruthy();
  });
});
