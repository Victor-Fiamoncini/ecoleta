'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
require('./bootstrap')
var App_1 = __importDefault(require('./App'))
var _app = new App_1.default()._app
var PORT = process.env.PORT
_app.listen(PORT, function () { return console.log('Server running at ' + PORT + ' \uD83D\uDE80') })
