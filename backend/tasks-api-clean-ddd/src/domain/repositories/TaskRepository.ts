import { Task } from "../entities/Task";
import { CrudRepository } from "./CrudRepository";

export interface TaskRepository extends CrudRepository<Task>{
    getAllCompleted(): Promise<Task[]>
    getAllNotDone(): Promise<Task[]>
}