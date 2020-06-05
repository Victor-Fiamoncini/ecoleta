import '../../bootstrap'
import knex from 'knex'

const { DB_TEST, DB_NAME, DB_USER, DB_PASS, NODE_ENV } = process.env

export default knex({
	client: 'mysql',
	connection: {
		database:
			NODE_ENV === 'development' || NODE_ENV === 'test' ? DB_TEST : DB_NAME,
		user: DB_USER,
		password: DB_PASS,
	},
	migrations: {
		directory: `${__dirname}/migrations`,
	},
	seeds: {
		directory: `${__dirname}/seeds`,
	},
	useNullAsDefault: true,
})
