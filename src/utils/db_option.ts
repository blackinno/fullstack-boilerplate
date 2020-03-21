export default {
	keepAlive: true,
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 3000,
	socketTimeoutMS: 3000
	// autoReconnect: true,
	// reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	// reconnectInterval: 1000 // Reconnect every 1s
	// user: process.env.DB_USER,
	// pass: process.env.DB_PASSWORD,
	// authSource: process.env.DB_AUTHSOURCE
}
