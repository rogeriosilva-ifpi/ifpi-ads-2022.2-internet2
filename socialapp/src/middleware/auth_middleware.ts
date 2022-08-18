import { NextFunction, Request, Response } from "express"

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    const authorization = req.headers.authorization

    console.log(`Authorization: ${authorization}`)

    if (!authorization){
        return res.status(401).json({error: 'Não Autenticado!'})
    }
    
    return next()
}