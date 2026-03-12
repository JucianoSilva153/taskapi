import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { randomUUID } from 'node:crypto';
import { UpdateTaskDto } from './dtos/update-task.dto';

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

  private CurrentTaskList: memoryProps[] = [];

  public createTask(dto: CreateTaskDto) {
    this.CurrentTaskList.push({
      id: randomUUID(),
      title: dto.title,
      description: dto.description,
      completed: false,
    });
  }

  public findAllTasks(): memoryProps[] {
    return this.CurrentTaskList
  }

  public findTaskById(id: string): memoryProps | undefined {
    return this.CurrentTaskList.find(task => task.id === id);
  }

  public updateTask(dto: UpdateTaskDto): Boolean {
    let taskToUpdateIndex = this.CurrentTaskList.findIndex(task => task.id === dto.id);
    if (taskToUpdateIndex === -1)
      return false;

    this.CurrentTaskList[taskToUpdateIndex].title = dto.title
    this.CurrentTaskList[taskToUpdateIndex].description = dto.description
    this.CurrentTaskList[taskToUpdateIndex].completed = dto.completed

    return true;
  }
  
  public deleteTask(id: string): Boolean {
    let taskToDeleteIndex = this.CurrentTaskList.findIndex(task => task.id === id);
    if (taskToDeleteIndex === -1)
      return false;

    if (!((this.CurrentTaskList.splice(taskToDeleteIndex)).length > 0))
      return false;

    return true;
  }
}
