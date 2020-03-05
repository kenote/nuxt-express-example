import * as http from 'http'
import * as express from 'express'
import { nuxt, nuxtHandler } from '~/nuxt.config'

async function start (): Promise<void> {
  let app: express.Application = express()
  
  // Render Nuxt ...
  app.use(nuxtHandler, nuxt.render)
  
  // Running Server ...
  http.createServer(app).listen(3000, '0.0.0.0', () => {
    console.log(`Service running in %s environment, PORT: %d ...`, process.env.NODE_ENV || 'development', 3000)
  })
}

start()