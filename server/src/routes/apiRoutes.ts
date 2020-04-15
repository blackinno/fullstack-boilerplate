import { Router } from 'express'

/* Controllers */
import UserController from '../controllers/UserController'

import { requireJWTAuthentication } from '../utils/helpers'

class ApiRoutes {
  public router: Router
  private USER: UserController = new UserController()

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes(): void {
    /* User routes */
    this.router.post('/api/user/register', this.USER.register)
    this.router.post('/api/user/login', this.USER.login)
    this.router.put('/api/user/update', requireJWTAuthentication, this.USER.updateUser)
    this.router.delete('/api/user/remove', requireJWTAuthentication, this.USER.deleteUser)
  }
}

export default ApiRoutes
