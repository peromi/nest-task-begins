import { TaskStatus } from "../utils/task.enum";

export class CreateTaskDto {
    title: string;
    description: string;
    status:TaskStatus
}
