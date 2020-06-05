import { Request, Response } from 'express'
import { PointDTO } from '../models/dto'
import { PointDAO, PointItemDAO } from '../models/dao'

class PointController {
	public async store(request: Request, response: Response) {
		const { items } = request.body

		const pointDao = new PointDAO()
		const pointDto = new PointDTO(request.body)
		const point = await pointDao.store(pointDto)

		const pointItemDao = new PointItemDAO()

		const pointItems = items.map((itemId: number) => ({
			item_id: itemId,
			point_id: point.id,
		}))

		await pointItemDao.store(pointItems)

		return response.status(201).json(point)
	}
}

export default new PointController()
