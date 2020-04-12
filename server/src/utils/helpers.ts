import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'

export const matchPassword = async (userPassword: string, dataPassword: string): Promise<boolean> => {
	try {
		const compare = bcrypt.compareSync(dataPassword, userPassword)
		return compare
	} catch (error) {
		throw Error(error)
	}
}

export const hashPassword = async (password: string): Promise<string> => {
	try {
		const salt = bcrypt.genSaltSync(parseInt(process.env.SALT))
		const hash = bcrypt.hashSync(password, salt)
		return hash
	} catch (error) {
		throw Error(error)
	}
}

export const signToken = (user: any): string => {
	delete user.password
	return sign(
		{
			iss: 'MESG',
			sub: user,
			iat: new Date().getTime(), // current time
			exp: new Date().setDate(new Date().getDate() + 7),
		},
		process.env.SECRET
	)
}

export const randomString = (length: number) => {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'
	let string = ''
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.floor(Math.random() * chars.length)
		string += chars.substring(randomNumber, randomNumber + 1)
	}
	return string
}
