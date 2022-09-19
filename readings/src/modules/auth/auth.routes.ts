import { celebrate, errors } from 'celebrate'
import { Router } from "express"
import { AuthController } from "./auth.controller"
import { signupSchema } from './auth.validation'

export const authRoutes = Router()

const authController = new AuthController()

authRoutes.post('/signup', celebrate(signupSchema), authController.signup)

authRoutes.use(errors())


