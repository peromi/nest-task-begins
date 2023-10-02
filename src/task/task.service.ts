import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>){}
  async create(createTaskDto: CreateTaskDto): Promise<Task>{
    const task = this.taskRepository.save(createTaskDto);
 
    return task;
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findBy({id});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<UpdateResult> {
    const task = await this.taskRepository.findOneBy({id:id});
    
    task.title = updateTaskDto.title
    task.description = updateTaskDto.description
    task.status = updateTaskDto.status
    
     const result = this.taskRepository.update(id, task);

     return result
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
