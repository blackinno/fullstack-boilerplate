import mongoose from 'mongoose'

import options from '../utils/db_option'
import { threadId } from 'worker_threads'

class Database {
	private mongo_uri: string
	private options: object
	constructor(MONGO_URL: string) {
		this.mongo_uri = MONGO_URL
		this.options = options
		this.mongo()
	}

	private mongo(): void {
		const connections = mongoose.connection
		connections.on('connected', (): void => {
			console.log('Mongo connection Established on ' + this.mongo_uri)
		})
		connections.on('reconnected', (): void => {
			console.log('Mongo connection ReEstablished')
			this.restart(3000)
		})
		connections.on('disconnected', (): void => {
			console.log('Mongo connection disconnected')
			console.log('Try to reconnect to database')
			this.restart(3000)
		})

		connections.on('close', (): void => {
			console.error(`Mongo connection close`)
			this.restart(3000)
		})
		connections.on('error', (err: Error): void => {
			console.error(`Mongo connection error: ${err}`)
			this.restart(3000)
		})
	}

	private restart(ms: number) {
		setTimeout(() => {
			mongoose.connect(this.mongo_uri, this.options)
		}, ms)
	}

	/**
	 * Start Database
	 */
	public async start(): Promise<void> {
		await mongoose.connect(this.mongo_uri, this.options)
	}
}

export default Database
