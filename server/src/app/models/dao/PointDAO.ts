import knex from '../../database'
import { PointDTO } from '../dto'

export default class PointDAO {
	private readonly tableName = 'points'

	public async store(point: PointDTO): Promise<PointDTO> {
		const [id] = await knex(this.tableName).insert(point)
		point.id = id

		return point
	}
}
