import { Router } from 'express'

/* Controllers */
import UserController from '../controllers/UserController'

import { requireJWTAuthentication } from '../utils/helpers'

class UserRouter {
  public router: Router
  private USER: UserController = new UserController()

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes(): void {
    /* User routes */
    this.router.post('/register', this.USER.register)
    this.router.post('/login', this.USER.login)
    this.router.post('/profile', requireJWTAuthentication, this.USER.getProfile)
    this.router.put('/update', requireJWTAuthentication, this.USER.updateUser)
    this.router.delete('/remove', requireJWTAuthentication, this.USER.deleteUser)
  }
}

export default UserRouter
