import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TaskStatus } from '../../types/task-status.type';

import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['task-list.component.css'],
})
export class TaskListComponent {
  @Input()
  list: ITask[];

  @Output()
  toggle = new EventEmitter<any>();

  toggleItem(task: ITask, status: TaskStatus) {
    const editedTask = { ...task };
    editedTask.status = status;

    this.toggle.emit({
      task: editedTask,
    });
  }
}
