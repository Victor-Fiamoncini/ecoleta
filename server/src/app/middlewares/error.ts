import { NextFunction, Request, Response } from 'express'

export default (
	err: Error,
	request: Request,
	response: Response,
	next: NextFunction
): Response => {
	console.log(err)

	return response.status(500).json({ error: `${err.name} - ${err.message}` })
}
