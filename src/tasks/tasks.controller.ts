import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

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

  @Get("/:id")
  findTaskById(id: string){
    
  }
}
