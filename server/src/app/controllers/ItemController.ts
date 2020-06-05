import { Request, Response } from 'express'
import { ItemDAO } from '../models/dao'

class ItemController {
	public async index(request: Request, response: Response) {
		const itemDao = new ItemDAO()
		const items = await itemDao.index()

		const { APP_URL, FILE_URL_PREFIX } = process.env

		const serializedItems = items.map(item => ({
			id: item.id,
			name: item.title,
			image_url: `${APP_URL}/${FILE_URL_PREFIX}/${item.image}`,
		}))

		return response.status(200).json(serializedItems)
	}
}

export default new ItemController()
