declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production'
		PORT: string
		DB_ENDPOINT: string
		SALT: string
		SECRET: string
	}
}
