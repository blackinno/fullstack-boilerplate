import { Request, Response, NextFunction } from 'express'
import passport from 'passport'

class AuthenticationController {
	/**
	 * Check Authentication
	 */
	public CheckAuth(req: Request, res: Response, next: NextFunction) {
		passport.authenticate('jwt', (err, user) => {
			if (err) return res.status(401).json({ status: 'error', code: 'unauthorized' })
			if (!user) return res.status(401).json({ status: 'error', code: 'unauthorized' })
			next()
		})(req, res, next)
	}
}

export default AuthenticationController
