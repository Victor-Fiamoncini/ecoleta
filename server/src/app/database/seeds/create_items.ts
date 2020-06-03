import * as Knex from 'knex'

export async function seed(knex: Knex): Promise<any> {
	return knex('items')
		.del()
		.then(() => {
			return knex('items').insert([
				{
					title: 'Lâmpadas',
					image: 'lampadas.svg',
					created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
					updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
				},
				{
					title: 'Pilhas e Baterias',
					image: 'baterias.svg',
					created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
					updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
				},
				{
					title: 'Papéis e Papelão',
					image: 'papeis-papelao.svg',
					created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
					updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
				},
				{
					title: 'Resíduos Eletrônicos',
					image: 'eletronicos.svg',
					created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
					updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
				},
				{
					title: 'Resíduos Orgânicos',
					image: 'organicos.svg',
					created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
					updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
				},
				{
					title: 'Óleo de Cozinha',
					image: 'oleo.svg',
					created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
					updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
				},
			])
		})
}
