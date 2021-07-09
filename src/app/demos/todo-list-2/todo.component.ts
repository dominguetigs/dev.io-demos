import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

import { TasksService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
})
export class Todo2Component {
  taskName: FormControl;

  constructor(private taskService: TasksService) {
    this.taskName = new FormControl('');
  }

  addTask(): void {
    this.taskService.insertTask(this.taskName.value);
    this.taskName.setValue('');
  }
}
