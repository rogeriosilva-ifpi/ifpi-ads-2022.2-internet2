import { NextFunction, Request, Response } from 'express'
import { HTTPException } from '../../common/exceptions/HTTPException'


export function error_interceptor(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof HTTPException){
        res.status(error.status).json(
            {
                code: error.constructor.name,
                message: error.message
            }
        )
    }

    res.status(500).json({
        code: error.constructor.name,
        message: 'Algo deu errado :('
    })
}