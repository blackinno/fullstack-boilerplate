import { config as configDotEnv } from 'dotenv'
import path from 'path'

switch (process.env.NODE_ENV) {
	case 'development':
		console.log('Development mode')
		configDotEnv({ path: path.resolve(__dirname, '../env', '.env.dev') })
		break
	case 'production':
		console.log('Production mode')
		configDotEnv({ path: path.resolve(__dirname, '../env', '.env.prod') })
		break
	default:
		throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
}
