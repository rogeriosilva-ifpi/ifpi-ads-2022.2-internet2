import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../data-source';
import { Maybe } from '../../../common/type_utils';
import { Task } from "../../../domain/entities/Task";
import { TaskRepository } from '../../../domain/repositories/TaskRepository';


export class TypeORMTaskRepository implements TaskRepository{
    private readonly taskRepo: Repository<Task>;

    constructor(){
        this.taskRepo = AppDataSource.getRepository(Task);
    }
    
    getAllCompleted(): Promise<Task[]> {
        throw new Error('Method not implemented.');
    }

    getAllNotDone(): Promise<Task[]> {
        throw new Error('Method not implemented.');
    }

    save(obj: Task): Promise<number> {
        throw new Error("Method not implemented.");
    }

    getById(id: number): Maybe<Task> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<Task[]> {
        return this.taskRepo.find();
    }
    
    delete(obj: Task): Promise<void> {
        throw new Error("Method not implemented.");
    }
}