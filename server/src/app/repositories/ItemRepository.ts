import * as knex from '../database'
import Item from '../models/Item'

export default class ItemRepository {
	private readonly tableName = 'items'
	private items: Item[] = []

	public async findAll(): Promise<Item[]> {
		return await knex.default(this.tableName).select('*')
	}
}
