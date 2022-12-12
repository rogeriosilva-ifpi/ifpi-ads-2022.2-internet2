import * as Sentry from '@sentry/node';
import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../../common/exceptions/HTTPException';


export function error_interceptor(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof HTTPException){
        return res.status(error.status).json(
            {
                code: error.constructor.name,
                message: error.message
            }
        )
    }

    // Se: foi um erro inesperado (fora do meu kit HTTPException)

    // Então: Disparar para Sentry 
    const transaction = Sentry.startTransaction({
        op: 'Test',
        name: 'My first test transaction! ;)'
    });
    Sentry.captureEvent(error);
    transaction.finish()

    // E: Mandar a resposta adequada ao Cliente 
    res.status(500).json({
        code: error.constructor.name,
        message: 'Algo deu errado :('
    })
}