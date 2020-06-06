import api from '../../../services/axios'
import Types from './types'

export async function actionStorePoint({ commit }, payload) {
	console.log(payload.city, payload.uf)

	try {
		const response = await ''
	} catch (err) {
		commit(Types.STORE_POINT_ERROR, 'Erro ao cadastrar ponto de coleta')
	}
}
