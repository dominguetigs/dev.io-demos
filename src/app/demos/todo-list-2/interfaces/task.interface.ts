import { TaskStatus } from '../types/task-status.type';

export interface ITask {
  id: number;
  nome: string;
  status: TaskStatus;
}
