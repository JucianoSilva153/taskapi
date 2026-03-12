import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { randomUUID } from 'node:crypto';

type memoryProps = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
};

@Injectable()
export class TasksService {
  /**
   * Servico para as tarefas
   */

  private _taskList: memoryProps[] = [];

  public createTask(dto: CreateTaskDto) {
    this._taskList.push({
      id: randomUUID(),
      title: dto.title,
      description: dto.description,
      completed: false,
    });
  }

  public findAllTasks() : memoryProps[]{
    return this._taskList
  }
}
