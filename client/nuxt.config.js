export default {
	mode: 'spa',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
			{
				hid: 'theme_color',
				name: 'theme_color',
				content: '#34CB79',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/logo.svg' }],
		script: [
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/js/all.min.js',
				body: true,
			},
		],
	},
	loading: { color: '#34CB79' },
	css: [
		'@/static/css/App.css',
		'@/static/css/CreatePoint.css',
		'@/static/css/Home.css',
	],
	plugins: [],
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/router'],
	modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
	axios: {},
	build: {
		extend(config, ctx) {},
	},
}
