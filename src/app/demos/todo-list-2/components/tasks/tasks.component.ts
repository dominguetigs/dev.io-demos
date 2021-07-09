import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';

import { Store } from '../../store-config/todo.store';

import { TaskStatus } from '../../types/task-status.type';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  @Input()
  status: TaskStatus;

  todoList$: Observable<ITask[]>;

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit(): void {
    this.todoList$ = this.store
      .getTodoList()
      .pipe(map((todoList: ITask[]) => todoList.filter((task: ITask) => task.status === this.status)));
  }

  onToggle(event: any): void {
    this.taskService.updateTask(event);
  }
}
