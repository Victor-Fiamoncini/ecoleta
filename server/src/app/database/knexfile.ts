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
			directory: `${__dirname}/migrations`,
		},
		seeds: {
			directory: `${__dirname}/seeds`,
		},
		useNullAsDefault: true,
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
			directory: `${__dirname}/migrations`,
		},
		seeds: {
			directory: `${__dirname}/seeds`,
		},
		useNullAsDefault: true,
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
			directory: `${__dirname}/migrations`,
		},
		seeds: {
			directory: `${__dirname}/seeds`,
		},
		useNullAsDefault: true,
	},
}
