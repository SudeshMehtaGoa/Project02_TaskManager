import { Injectable } from '@angular/core';
import { ITaskList } from 'app/00-interface/00-task-list';


@Injectable()
export class taskService {

  constructor() { }

  taskList: ITaskList[] = [];

  /** Add Task in the array List. */
  addTask(taskDetail: ITaskList) {
    this.taskList.unshift(taskDetail);
  }

  /**Get the task list from the array. */
  getTaskList(): ITaskList[] {
    return this.taskList;
  }

}
