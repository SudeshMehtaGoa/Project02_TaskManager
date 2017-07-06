import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { taskComponent } from 'app/03-component/01-task-component/task.component';
import { taskListComponent } from 'app/03-component/02-task-list/task-list.component';
import { RowHeighlighterDirective } from './02-directive/row-heighlighter.directive';



@NgModule({
  declarations: [
    taskComponent,
    taskListComponent,
    RowHeighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [taskComponent]
})
export class taskModule { }
