import { Request, Response, Router } from 'express'

export const readingsRoutes = Router()

readingsRoutes.get('/', (req: Request, res: Response)=>{
    return res.json({leituras:'leituras'})
})
