import { Request, Response, NextFunction } from 'express'
import passport from 'passport'

export class AuthenticationController {
  /**
   * Check Authentication
   */
  public auth(req: Request, res: Response, next: NextFunction) {
    return passport.authenticate('jwt', (err: Error, user: any) => {
      if (err) return res.status(401).json({ status: 'error', code: 'unauthorized' })
      if (!user) return res.status(401).json({ status: 'error', code: 'unauthorized' })
      return next()
    })(req, res, next)
  }
}
