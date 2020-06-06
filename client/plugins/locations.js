import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$locations = {
	async states() {
		const states = await axios.get(
			'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
		)

		return states.data
	},

	async byUf(uf) {
		const cities = await axios.get(
			`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
		)

		return cities.data
	},
}
