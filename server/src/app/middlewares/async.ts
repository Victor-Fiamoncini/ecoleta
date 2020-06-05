/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default (fn) => (request, response, next) => {
	return Promise.resolve(fn(request, response, next)).catch(next)
}
