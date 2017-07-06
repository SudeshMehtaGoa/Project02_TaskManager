import { TestBed, inject } from '@angular/core/testing';

import { logService } from './00-log.service';

describe('LogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [logService]
    });
  });

  it('should be created', inject([logService], (service: logService) => {
    expect(service).toBeTruthy();
  }));
});
