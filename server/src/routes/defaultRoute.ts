import { Router } from 'express'

/* Controllers */
import DefaultController from '../controllers/defaultController'

class DefaultRoute {
	public router: Router
	private defaultController: DefaultController = new DefaultController()

	constructor() {
		this.router = Router()
		this.routes()
	}

	private routes(): void {
		this.router.get('/', this.defaultController.defaultPath)
	}
}

export default DefaultRoute
