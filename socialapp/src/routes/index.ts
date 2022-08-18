import { Router } from 'express'
import { authMiddleware } from '../middleware/auth_middleware'
import authRoutes from './auth'
import coreRoutes from './core'
import { postRouter } from './posts_routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/core', coreRoutes)
router.use('/posts', authMiddleware, postRouter)

export default router