import { Router } from 'express'
import { container } from 'tsyringe'
import { AppController } from '../controllers/AppController'

// Mapear Padrão com Controller function
// Incluir os Middlewares (auth, validation, transformacao)

export const router = Router()

const appController = container.resolve(AppController)

// Tasks
router.get('/tasks', appController.tasksList)

// Users
router.get('/users', appController.usersList)
router.post('/signup', appController.signup)