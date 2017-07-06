import { TestBed, inject } from '@angular/core/testing';

import { taskService } from './01-task.service';

describe('taskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [taskService]
    });
  });

  it('should be created', inject([taskService], (service: taskService) => {
    expect(service).toBeTruthy();
  }));
});
