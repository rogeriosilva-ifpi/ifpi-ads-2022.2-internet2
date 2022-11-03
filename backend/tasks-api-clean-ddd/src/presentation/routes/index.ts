import { Router } from 'express'
import { AppController } from '../controllers/AppController'

// Mapear Padrão com Controller function
// Incluir os Middlewares (auth, validation, transformacao)

export const router = Router()

const appController = new AppController()

router.get('/tasks', appController.tasksList)

router.get('/users', appController.usersList)