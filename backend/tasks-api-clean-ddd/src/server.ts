import express, { Request, Response } from 'express'
import 'reflect-metadata'

const app = express()

app.get('/', (request: Request, response: Response) => {
    const data = { message: 'Hello Clean DDD Start Project' } 
    return response.json(data)
})

app.listen(3333, () => {
    console.log('App Live at http://localhost:3333')
})
