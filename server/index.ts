import * as http from 'http'
import * as express from 'express'
import { nuxt } from '~/config'

async function start (): Promise<void> {
  let app: express.Application = express()
  app.use(nuxt.render)
  
  http.createServer(app).listen(3000, '0.0.0.0', () => {
    console.log(`Service running in %s environment, PORT: %d ...`, process.env.NODE_ENV || 'development', 3000)
  })
}

start()