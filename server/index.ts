import 'dotenv/config'

import path from 'path'

import express from 'express'

import { errorLogger, errorResponder } from './errors/errorHandler'
import router from './router'


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'))
  })
}

app.use(errorLogger, errorResponder)

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`)
})
