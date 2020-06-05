import knex from '../../database'
import { PointItemDTO } from '../dto'

export default class PointItemDAO {
	private readonly table = 'point_items'

	public async store(pointItems: PointItemDTO[]): Promise<PointItemDTO[]> {
		return await knex(this.table).insert(pointItems)
	}
}
