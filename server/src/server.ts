import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'

import Database from './config/database'

import './config/passport'

/* Routes */

import ApiRoutes from './routes/apiRoutes'

if (process.env.NODE_ENV) {
  require('./config/environment-config')
}

class Server {
  public app: express.Application
  private database: Database = new Database(process.env.DB_ENDPOINT)
  constructor() {
    this.app = express()
    this.startDatabase()
    this.middleware()
    this.routes()
  }
  private middleware(): void {
    this.app.all('*', function (req: Request, res: Response, next: NextFunction) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
      res.header('Content-Type', 'application/json;charset=utf-8')
      next()
    })
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(morgan('dev'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }

  private routes(): void {
    this.app.use('/', new ApiRoutes().router)
  }

  private startDatabase() {
    this.database.start().catch(console.error)
  }
}

export default new Server().app
