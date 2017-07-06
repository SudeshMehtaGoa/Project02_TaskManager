import { Injectable } from '@angular/core';
import { ITaskStatus } from 'app/00-interface/01-task-status';

@Injectable()
export class taskStatusService {

  taskStatus: ITaskStatus[] = [];
  constructor() { }

  /* Get the Task Status */
  getTaskStatus() {
    return this.taskStatus = [
      {
        id: 1,
        status: 'Open'
      },
      {
        id: 2,
        status: 'In-Progress'
      },
      {
        id: 3,
        status: 'Done'
      },
      {
        id: 4,
        status: 'Closed'
      },
      {
        id: 5,
        status: 'Re-Open'
      }
    ];
  }
}
