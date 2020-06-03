import 'ts-node/register'
import '../../bootstrap'

const { DB_TEST, DB_NAME, DB_USER, DB_PASS } = process.env

module.exports = {
	development: {
		client: 'mysql',
		connection: {
			database: DB_TEST,
			user: DB_USER,
			password: DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
		},
	},

	staging: {
		client: 'mysql',
		connection: {
			database: DB_NAME,
			user: DB_USER,
			password: DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
		},
	},

	production: {
		client: 'mysql',
		connection: {
			database: DB_NAME,
			user: DB_USER,
			password: DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
		},
	},
}
