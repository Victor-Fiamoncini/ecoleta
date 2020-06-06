import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import CreatePoint from '@/components/pages/CreatePoint'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				component: Home,
				name: 'Home',
			},
			{
				path: '/cadastro',
				component: CreatePoint,
				name: 'CreatePoint',
			},
		],
	})
}
