import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('point_items', (table) => {
		table.increments()
		table
			.integer('point_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('points')
			.onDelete('cascade')
		table
			.integer('item_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('items')
			.onDelete('cascade')
		table.timestamps()
	})
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('point_items')
}
