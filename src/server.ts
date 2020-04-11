import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'

import Database from './config/database'

import './config/environment-config'

/* Routes */
import defaultRoute from './routes/defaultRoute'

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
		this.app.use(cors())
		this.app.use(compression())
		this.app.use(morgan('dev'))
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({ extended: true }))
	}

	private routes(): void {
		this.app.use('/', new defaultRoute().router)
	}

	private startDatabase() {
		this.database.start().catch(console.error)
	}
}

export default new Server().app
