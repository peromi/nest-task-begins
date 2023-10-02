import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../utils/task.enum";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus
}
