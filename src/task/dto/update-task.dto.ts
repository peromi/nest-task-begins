
import { TaskStatus } from '../utils/task.enum';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto {
    title: string;
    description: string;
    status:TaskStatus
}
