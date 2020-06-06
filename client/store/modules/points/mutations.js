import Types from './types'

export default {
	[Types.STORE_POINT_ERROR]: (state, payload) => {
		state.errors.push(payload)
	},
}
