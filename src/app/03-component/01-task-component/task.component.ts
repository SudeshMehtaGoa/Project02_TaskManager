/* Add Task Component */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

/* interfaces */
import { ITaskList } from 'app/00-interface/00-task-list';
import { ITaskStatus } from 'app/00-interface/01-task-status';

/* services */
import { logService } from 'app/01-service/00-log.service';
import { taskService } from 'app/01-service/01-task.service';
import { taskStatusService } from 'app/01-service/02-taskstatus.service';

@Component({
  selector: 'task-root',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [logService,taskService, taskStatusService]
})

export class taskComponent implements OnInit {

  title: string = 'Add Task';

  taskStatusArray: ITaskStatus[] = [];

  taskArray: ITaskList[] = [];
  taskDetail: ITaskList;

  /**Declaring myForm of Type FormGroup */
  myForm: FormGroup;

  constructor(private _logService: logService,
              private _taskService: taskService,
              private _taskStatusService: taskStatusService,
              private fb: FormBuilder) {
  }

  /**Define default values on ngOnInit function */
  ngOnInit() {

    this.myForm = this.fb.group({
      'taskName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'taskStatus': ['', Validators.required],
      'taskDescription': [''],
      'taskCompletionDate': ['', Validators.required]
    });

    this.taskStatusArray = this._taskStatusService.getTaskStatus();
  };

  /* addTask method linked to form ngSubmit */
  addTask(values, formValid) {
      this.taskDetail = {
        taskName: values.taskName,
        taskStatus: values.taskStatus,
        taskDescription: values.taskDescription,
        taskCompletionDate: values.taskCompletionDate
      };
      this._taskService.addTask(this.taskDetail);
      this.taskArray = this._taskService.getTaskList();
      this._logService.log();
  };

  /* Form reset */
  resetForm() {
    this.myForm.reset();
  };

}

