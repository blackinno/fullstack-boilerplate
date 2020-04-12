import { Request, Response, NextFunction } from 'express'

class UserController {
	/**
	 * CREATE
	 */
	public register(req: Request, res: Response, next: NextFunction): void {
		res.status(200).send('Hello from NodeJS boilerplate using TypeScript')
	}

	/**
	 * UPDATE
	 */
	public updateUser(req: Request, res: Response, next: NextFunction): void {}

	/**
	 * READ
	 */
	public login(req: Request, res: Response, next: NextFunction): void {
		res.status(200).send('Hello from NodeJS boilerplate using TypeScript')
	}

	/**
	 * DELETE
	 */
	public deleteUser(req: Request, res: Response, next: NextFunction): void {
		res.status(200).send('Hello from NodeJS boilerplate using TypeScript')
	}
}

export default UserController
