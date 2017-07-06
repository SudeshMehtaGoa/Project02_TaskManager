import { TestBed, inject } from '@angular/core/testing';

import { taskStatusService } from './02-taskstatus.service';

describe('taskStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [taskStatusService]
    });
  });

  it('should be created', inject([taskStatusService], (service: taskStatusService) => {
    expect(service).toBeTruthy();
  }));
});
