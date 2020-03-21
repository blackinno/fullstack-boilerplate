import { createServer } from 'http'
import app from './server'
import './config/environment-config'

const server = createServer(app)

const PORT = process.env.PORT || 5050

server.listen(PORT)
