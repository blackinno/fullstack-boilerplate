import { Router } from 'express'

/* Controllers */
import UserController from '../controllers/UserController'
import AuthenticationController from '../controllers/AuthticationController'

class ApiRoutes {
	public router: Router
	private USER: UserController = new UserController()
	private AUTH: AuthenticationController = new AuthenticationController()

	constructor() {
		this.router = Router()
		this.routes()
	}

	private routes(): void {
		/* User routes */
		this.router.post('/api/user/register', this.USER.register)
		this.router.post('/api/user/login', this.USER.login)
		this.router.put('/api/user/update', this.AUTH.CheckAuth, this.USER.updateUser)
		this.router.delete('/api/user/remove', this.AUTH.CheckAuth, this.USER.deleteUser)
	}
}

export default ApiRoutes
