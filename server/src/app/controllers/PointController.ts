import { Request, Response } from 'express'
import { PointDTO } from '../models/dto'
import { PointDAO, PointItemDAO } from '../models/dao'

class PointController {
	public async show(request: Request, response: Response) {
		try {
			const pointDao = new PointDAO()
			const points = await pointDao.findWithItems(parseInt(request.params.id))

			const serializedItems = points.map(point => ({
				title: point.title,
				image: point.image,
			}))

			const serializedPoint = points[0]
			delete serializedPoint.image
			delete serializedPoint.title

			return response.status(200).json({
				...serializedPoint,
				items: serializedItems,
			})
		} catch (err) {
			return response.status(500).json(err)
		}
	}

	public async store(request: Request, response: Response) {
		try {
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
		} catch (err) {
			return response.status(500).json(err)
		}
	}
}

export default new PointController()
