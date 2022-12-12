import * as Sentry from '@sentry/node'
import "@sentry/tracing"
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import './infrastructure/ioc-container'
import './persistence/typeorm'
import { error_interceptor } from './presentation/interceptors/error_interceptor'
import { router } from './presentation/routes'

const app = express()
app.use(express.json())

// Sentry
Sentry.init({
    dsn: "https://f69728b0c6544011959640ddef9993bc@o4504255151079424.ingest.sentry.io/4504255153307648",
    tracesSampleRate: 1.0
})


app.use(router)
app.use(error_interceptor)

app.listen(3333, () => {
    console.log('App Live at http://localhost:3333')
})
