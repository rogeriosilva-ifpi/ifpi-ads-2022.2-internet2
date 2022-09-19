import express from 'express'
import { routes } from './routes'

const app = express()

// rotas
app.use(express.json())

app.get('/', (req, res) => res.json({ok: 'ok..'}))

app.use(routes)

// levantar um server
const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`App Leitura at http://localhost:${PORT}`)
})