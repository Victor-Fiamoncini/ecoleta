import knex from '../../database'
import { ItemDTO } from '../dto'

export default class ItemDAO {
	private readonly table = 'items'

	public async index(): Promise<ItemDTO[]> {
		return await knex(this.table).select(['id', 'image', 'title'])
	}
}
