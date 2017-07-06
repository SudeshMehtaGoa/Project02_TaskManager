/* Task list component */
import { Component, OnInit, Input } from '@angular/core';
import { ITaskList } from 'app/00-interface/00-task-list';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class taskListComponent implements OnInit {

/* Read taskList array from taskAdd component */
  @Input() taskList;

  
  constructor() {}

  ngOnInit() {}

}
