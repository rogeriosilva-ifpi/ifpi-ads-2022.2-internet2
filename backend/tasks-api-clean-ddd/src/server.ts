import express from 'express'
import 'reflect-metadata'
import './persistence/typeorm'
import { router } from './presentation/routes'

const app = express()

app.use(router)

app.listen(3333, () => {
    console.log('App Live at http://localhost:3333')
})
