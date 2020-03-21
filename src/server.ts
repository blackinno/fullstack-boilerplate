import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'

/* Routes */
import defaultRoute from './routes/defaultRoute'

class Server {
	public app: express.Application
	constructor() {
		this.app = express()
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
}

export default new Server().app
