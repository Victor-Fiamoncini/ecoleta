import knex from '../../database'
import { PointDTO } from '../dto'
import { PointWithItem } from '../types'

export default class PointDAO {
	private readonly table = 'points'

	public async findWithItems(id: number): Promise<PointWithItem[]> {
		return await knex(this.table)
			.select(
				'points.name',
				'points.email',
				'points.whatsapp',
				'points.image',
				'points.latitude',
				'points.longitude',
				'points.city',
				'points.uf',
				'items.image',
				'items.title'
			)
			.join('point_items AS pi', 'points.id', '=', 'pi.point_id')
			.join('items', 'items.id', '=', 'pi.item_id')
			.where('points.id', '=', id)
	}

	public async store(point: PointDTO): Promise<PointDTO> {
		const [id] = await knex(this.table).insert(point)
		point.id = id

		return point
	}
}
