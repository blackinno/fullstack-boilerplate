import { Request, Response, NextFunction } from 'express'

class DefaultController {
	/**
	 * defaultPath
	 */
	public defaultPath(req: Request, res: Response): void {
		res.status(200).send('Hello from NodeJS boilerplate using TypeScript')
	}
}

export default DefaultController
