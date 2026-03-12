import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('tasks')
export class TasksController {
  private readonly TaskService: TasksService;

  constructor(taskService: TasksService) {
    this.TaskService = taskService;
  }

  @Post()
  createTask(
    @Body() dto: CreateTaskDto) {
    this.TaskService.createTask(dto);
  }

  @Get()
  findAllTask() {
    return this.TaskService.findAllTasks();
  }

  @Get(":id")
  findTaskById(@Param("id") id: string) {
    let task = this.TaskService.findTaskById(id)
    if (!task)
      throw new HttpException("Tarefa nao encontrada", HttpStatus.NOT_FOUND);
    return task;
  }

  @Patch()
  updateTask(@Body() dto: UpdateTaskDto) {
    if (!this.TaskService.updateTask(dto))
      throw new HttpException("Tarefa nao encontrada", HttpStatus.NOT_FOUND);
  }

  @Delete(":id")
  deleteTask(@Param("id") id: string) {
    if (!this.TaskService.deleteTask(id))
      throw new HttpException("Tarefa nao encontrada", HttpStatus.NOT_FOUND);
    return new HttpException("Tarefa Deletada com sucesso!!", HttpStatus.NO_CONTENT);
  }
}
