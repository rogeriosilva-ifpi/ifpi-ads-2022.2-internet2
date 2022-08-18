import { NextFunction, Request, Response } from "express"

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    console.log(`LOG: ${Date.now()} - PATH: ${req.originalUrl} - METHOD: ${req.method}` )

    return next()

}