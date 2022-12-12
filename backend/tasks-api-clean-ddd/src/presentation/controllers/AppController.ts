import { Request, Response } from "express"
import { injectable } from "tsyringe"
import { SignupCommand } from "../../application/commands/SignupCommand"
import { UserListQuery } from "../../application/queries/UserListQuery"
import { User } from "../../domain/entities/User"
import { TaskRepository } from "../../domain/repositories/TaskRepository"
import { TypeORMTaskRepository } from "../../persistence/typeorm/repositories/TypeORMTaskRepository"

@injectable()
export class AppController{
    

    constructor(
        private userListQuery: UserListQuery,
        private signupCmd: SignupCommand
        ){}

    signup = async (req: Request, res: Response) => {

        console.log(req.body)
        const {username, name, password, confirmPassword} = req.body

        // Validacoes e tranformacoes
        if (password != confirmPassword){
            res.status(400).json({error: 'Senha não confere com confirmação de senha'})
        }

        const user = await this.signupCmd.execute({name, username, password})

        return res.status(201).json(user)

        // try {
        //     const user = await this.signupCmd.execute({name, username, password})

        //     return res.status(201).json(user)  
        // } catch (error: any) {
        //     res.status(400).json({message: error.message})
        // }
        
    }

    usersList = async (req: Request, res: Response) => {
            const users = await this.userListQuery.execute({user: new User()});
        
            return res.json({ users })
        }

    tasksList = async (req: Request, res: Response) => {
        let tasksRepo: TaskRepository
        tasksRepo = new TypeORMTaskRepository()
        
        const tasks = await tasksRepo.getAll()
    
        return res.json({ tasks })
    }

}