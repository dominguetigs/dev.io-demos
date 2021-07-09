import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITask } from '../interfaces/task.interface';

import { STATE } from './state.constant';

import { IState } from './store.interface';

export class Store {
  private subject = new BehaviorSubject<IState>(STATE);
  private store = this.subject.asObservable();

  get value(): IState {
    return this.subject.value;
  }

  getTodoList(): Observable<ITask[]> {
    return this.store.pipe(map((store) => store.todolist));
  }

  set(name: string, state: any): void {
    this.subject.next({
      ...this.value,
      [name]: state,
    });
  }
}
