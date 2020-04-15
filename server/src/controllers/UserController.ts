import { Request, Response, NextFunction } from 'express'
import { User } from '../models/user'
import { signToken } from '../utils/helpers'
import passport from 'passport'
import { Types } from 'mongoose'

class UserController {
  /**
   * CREATE
   */
  public async register(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { email, password, first_name, last_name } = req.body
    try {
      const foundUser = await User.findOne({ email })
      if (foundUser) return res.status(200).send({ success: false, message: 'The email has already exist' })
      const newUser = new User({ first_name, last_name, email, password, created_at: Date.now(), updated_at: Date.now() })
      const user = await newUser.save()
      const token = signToken(user)
      return res.status(200).send({ success: true, token })
    } catch (error) {
      res.status(500)
    }
  }

  /**
   * UPDATE
   */
  public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { user } = req
    try {
      const getUser = await User.findById({ id: user._id })
      console.log(getUser)
    } catch (error) {
      res.status(500)
    }
  }

  /**
   * READ
   */
  public login(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate('local', { session: false }, (err, user) => {
      if (err) return next(err)
      if (!user) return res.status(401).json({ status: 'error', code: 'unauthorized' })
      const token = signToken(user)
      res.status(200).send({ success: true, token })
    })(req, res, next)
  }

  /**
   * DELETE
   */
  public deleteUser(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send('Hello from NodeJS boilerplate using TypeScript')
  }
}

export default UserController
