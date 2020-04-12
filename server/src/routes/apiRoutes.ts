import { Router } from 'express'

/* Controllers */
import UserController from '../controllers/UserController'

class ApiRoutes {
	public router: Router
	private USER: UserController = new UserController()

	constructor() {
		this.router = Router()
		this.routes()
	}

	private routes(): void {
		this.router.get('/', this.USER.defaultPath)
	}
}

export default ApiRoutes
