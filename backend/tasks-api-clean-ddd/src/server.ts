import express, { Request, Response } from 'express'
import 'reflect-metadata'
import { TaskRepository } from './domain/repositories/TaskRepository'
import { UserRepository } from './domain/repositories/UserRepository'
import './persistence/typeorm'
import { TypeORMTaskRepository } from './persistence/typeorm/repositories/TypeORMTaskRepository'
import { TypeORMUserRepository } from './persistence/typeorm/repositories/TypeORMUserRepository'

const app = express()

app.get('/', (req: Request, res: Response) => {
    const data = { message: 'Hello Clean DDD Start Project' } 
    return res.json(data)
})

app.get('/tasks', async (req: Request, res: Response) => {
    let tasksRepo: TaskRepository
    tasksRepo = new TypeORMTaskRepository()
    
    const tasks = await tasksRepo.getAll()

    return res.json({ tasks })
})

app.get('/users', async (req: Request, res: Response) => {
    // Using
    const userRepo: UserRepository = new TypeORMUserRepository()
    const users = await userRepo.getAll()

    return res.json({ users })

    // or just 
    // return res.json({ users: await User.find() })
})

app.listen(3333, () => {
    console.log('App Live at http://localhost:3333')
})
