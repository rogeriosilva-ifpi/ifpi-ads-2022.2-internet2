import * as dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import './infrastructure/ioc-container'
import './persistence/typeorm'
import { router } from './presentation/routes'

const app = express()
app.use(express.json())
const result = dotenv.config()

console.error(result)

app.use(router)

app.listen(3333, () => {
    console.log('App Live at http://localhost:3333')
})
