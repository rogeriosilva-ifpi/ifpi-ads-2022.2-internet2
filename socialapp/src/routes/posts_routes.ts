import { Request, Response, Router } from 'express';

const postRouter = Router()

postRouter.get('/', (req: Request, res: Response)=>{
    res.status(200).json({mensagem:"all my posts!"})
})

postRouter.post('/', (req: Request, res: Response)=>{
    res.status(200).json({mensagem:"new post!"})
})

export { postRouter };

