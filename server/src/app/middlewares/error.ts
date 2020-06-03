import { NextFunction, Request, Response } from 'express'

export default (
	err: Error,
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
): Response => {
	console.log(err)

	return res.status(500).json({ error: `${err.name} - ${err.message}` })
}
