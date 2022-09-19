import { Router } from 'express'
import { authRoutes } from './modules/auth/auth.routes'
import { readingsRoutes } from './modules/readings/readings.routes'

export const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/readings', readingsRoutes)