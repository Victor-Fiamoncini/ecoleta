import api from '../../../services/axios'
import Types from './types'

export async function actionFetchItems({ commit }) {
	try {
		const response = await api.get('/items')

		commit(Types.FETCH_ITEMS, response.data)
	} catch (err) {
		commit(Types.FETCH_ITEMS_ERROR)
	}
}
