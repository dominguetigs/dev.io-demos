import { TestBed } from '@angular/core/testing';

import { Store } from './todo.store';

import { ITask } from '../interfaces/task.interface';

describe('Store -> Teste de Unidade', () => {
  let store: Store;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [Store],
    });

    store = bed.get(Store);
    store.set('todolist', []);
  });

  it('Todo list vazia', () => {
    store.getTodoList().subscribe((tasks: ITask[]) => {
      expect(tasks.length).toBe(0);
      expect(tasks).toEqual([]);
    });
  });

  it('Todo list preenchida corretamente com uma task', () => {
    const newTask = {
      id: 1,
      nome: 'Solve Problems',
      status: 'BACKLOG',
    };

    store.set('todolist', [...store.value.todolist, newTask]);
    store.getTodoList().subscribe((tasks: ITask[]) => {
      expect(tasks.length).toBe(1);

      const [task] = tasks;

      expect(task.id).toBe(1);
      expect(task.nome).toBe('Solve Problems');
      expect(task.status).toBe('BACKLOG');
    });
  });
});
