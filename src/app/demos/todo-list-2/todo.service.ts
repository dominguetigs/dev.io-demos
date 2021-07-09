import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Store } from './store-config/todo.store';

import { ITask } from './interfaces/task.interface';

@Injectable()
export class TasksService implements Resolve<ITask[]> {
  private baseUrl: string;

  constructor(private http: HttpClient, private store: Store) {
    this.baseUrl = `${environment.baseUrl}${environment.endpoints.todoList}`;
  }

  resolve(): ITask[] | Observable<ITask[]> | Promise<ITask[]> {
    return this.getToDoList();
  }

  getToDoList(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseUrl).pipe(tap((next) => this.store.set('todolist', next)));
  }

  insertTask(taskName: string): void {
    this.http.post(this.baseUrl, { nome: taskName, status: 'BACKLOG' }).subscribe((task) => {
      const todoList = this.store.value.todolist;

      this.store.set('todolist', [...todoList, task]);
    });
  }

  updateTask(event: { task: ITask }): void {
    this.http.put(`${this.baseUrl}/${event.task.id}`, event.task).subscribe(() => {
      const value = this.store.value.todolist;
      const todolist = value.map((task: ITask) => (event.task.id === task.id ? { ...task, ...event.task } : task));

      this.store.set('todolist', todolist);
    });
  }
}
