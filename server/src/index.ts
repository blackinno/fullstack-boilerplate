import { createServer } from 'http'
import app from './server'

import './config/environment-config'

import './config/passport'

const server = createServer(app)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.info(`Server 🌎 Listening on http://localhost:${PORT}`)
})
