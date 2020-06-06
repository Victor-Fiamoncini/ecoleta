import api from '../../../services/axios'
import Types from './types'

export async function actionFetchItems({ commit }) {
	try {
		const response = await api.get('/items')

		commit(Types.FETCH_ITEMS, response.data)
	} catch (err) {
		commit(
			Types.FETCH_ITEMS_ERROR,
			'Erro ao obter os items de coleta, tente mais tarde'
		)
		this.$toast.error('Erro ao obter os items de coleta, tente mais tarde', {
			duration: 4000,
			singleton: true,
		})
	}
}
