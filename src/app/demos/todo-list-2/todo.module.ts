import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TasksService } from './todo.service';

import { TasksComponent } from './components/tasks/tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { Todo2Component } from './todo.component';

import { Store } from './store-config/todo.store';

import { TaskStatusPipe } from './pipes/task-status.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [TasksService, Store],
  declarations: [Todo2Component, TaskListComponent, TasksComponent, TaskStatusPipe],
  exports: [Todo2Component, TasksComponent, TaskListComponent],
})
export class Todo2Module {}
