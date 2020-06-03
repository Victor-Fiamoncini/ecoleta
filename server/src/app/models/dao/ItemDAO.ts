import knex from '../../database'
import { ItemDTO } from '../dto'

class ItemDAO {
	private tableName = 'items'

	// public get _tableName(): string {
	// 	return 'this.tableName'
	// }

	public async index(): Promise<any> {
		return await knex('items').select('*')
	}
}

export default new ItemDAO()
