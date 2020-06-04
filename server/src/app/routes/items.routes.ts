import { Router, Response } from 'express'
import knex from '../database'
// import ItemRepository from '../repositories/ItemRepository'

const router = Router()

router.get('/', async (request, response: Response) => {
	try {
		// const itemRepository = new ItemRepository()
		const items = await knex('items').select('*')
	} catch (err) {
		return response.status(500).json({ error: err.message })
	}
})

export default router
