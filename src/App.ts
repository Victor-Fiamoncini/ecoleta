import express, { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

export default class App {
	private app: Application

	constructor() {
		this.app = express()

		this.configs()
		this.middlewares()
	}

	public get _app(): Application {
		return this.app
	}

	private configs(): void {
		this.app.disable('x-powered-by')
	}

	private middlewares(): void {
		const { CLIENT_HOST, NODE_ENV } = process.env

		if (NODE_ENV === 'production') {
			this.app.use(cors({ origin: CLIENT_HOST }))
			this.app.use(helmet())
		}

		this.app.use(express.json())
		this.app.use(morgan('dev'))
	}
}
