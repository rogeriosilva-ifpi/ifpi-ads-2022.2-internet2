import { Request, Response } from "express"
import { UserListQuery } from "../application/UserListQuery"
import { User } from "../domain/entities/User"
import { TaskRepository } from "../domain/repositories/TaskRepository"
import { TypeORMTaskRepository } from "../persistence/typeorm/repositories/TypeORMTaskRepository"
import { TypeORMUserRepository } from "../persistence/typeorm/repositories/TypeORMUserRepository"

export class AppController{

    private userListQuery: UserListQuery
    private currentUser: User

    constructor(){
        this.currentUser = new User()
        const userRepository = new TypeORMUserRepository()
        this.userListQuery = new UserListQuery(userRepository)
    }

    usersList = async (req: Request, res: Response) => {
            const users = await this.userListQuery.execute({user: this.currentUser});
        
            return res.json({ users })
        }

    tasksList = async (req: Request, res: Response) => {
        let tasksRepo: TaskRepository
        tasksRepo = new TypeORMTaskRepository()
        
        const tasks = await tasksRepo.getAll()
    
        return res.json({ tasks })
    }

}