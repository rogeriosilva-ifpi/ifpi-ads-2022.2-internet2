import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import './infrastructure/ioc-container'
import './persistence/typeorm'
import { error_interceptor } from './presentation/interceptors/error_interceptor'
import { router } from './presentation/routes'

const app = express()
app.use(express.json())

app.use(router)
app.use(error_interceptor)

app.listen(3333, () => {
    console.log('App Live at http://localhost:3333')
})
