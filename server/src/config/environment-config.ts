import { config as configDotEnv } from 'dotenv'
import path from 'path'

switch (process.env.NODE_ENV) {
  case 'development':
    console.log('Development mode')
    configDotEnv({ path: path.resolve(__dirname, '../../environments', '.env.dev') })
    break
  case 'production':
    console.log('Production mode')
    configDotEnv({ path: path.resolve(__dirname, '../../environments', '.env.prod') })
    break
  default:
    break
}
