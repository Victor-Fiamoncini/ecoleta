'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
var express_1 = __importDefault(require('express'))
var helmet_1 = __importDefault(require('helmet'))
var cors_1 = __importDefault(require('cors'))
var morgan_1 = __importDefault(require('morgan'))
var App = /** @class */ (function () {
	function App() {
		this.app = express_1.default()
		this.configs()
		this.middlewares()
	}
	Object.defineProperty(App.prototype, '_app', {
		get: function () {
			return this.app
		},
		enumerable: false,
		configurable: true
	})
	App.prototype.configs = function () {
		this.app.disable('x-powered-by')
	}
	App.prototype.middlewares = function () {
		var _a = process.env, CLIENT_HOST = _a.CLIENT_HOST, NODE_ENV = _a.NODE_ENV
		if (NODE_ENV === 'production') {
			this.app.use(cors_1.default({ origin: CLIENT_HOST }))
			this.app.use(helmet_1.default())
		}
		this.app.use(express_1.default.json())
		this.app.use(morgan_1.default('dev'))
	}
	return App
}())
exports.default = App
